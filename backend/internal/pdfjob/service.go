// Package pdfjob 实现 PDF → OCR → Markdown → 翻译 的异步任务管理。
//
// 资源约束（2 核 2G，单实例）：
//   - 后台 goroutine 驱动状态机，SQLite pdf_jobs 表持久化任务（TTL 内可跨重启恢复）；
//   - 原始 PDF 只落临时目录，OCR 提交成功后立即删除；
//   - Markdown 与译文保存在任务行内，随任务在 TTL（默认 24h）后一并清理；
//   - 全局/单 IP 每日配额与并发限制，防止滥用打爆外部 API 额度。
package pdfjob

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/sakurano/sakura-tools/backend/internal/paddleocr"
)

// 任务状态（与前端约定）。
const (
	StateQueued        = "queued"
	StateUploading     = "uploading"
	StateOCRProcessing = "ocr_processing"
	StateOCRCompleted  = "ocr_completed"
	StateTranslating   = "translating"
	StateCompleted     = "completed"
	StateFailed        = "failed"
)

var (
	ErrInvalidPDF       = errors.New("不是有效的 PDF 文件")
	ErrTooLarge         = errors.New("PDF 超过大小限制")
	ErrTooManyPages     = errors.New("PDF 页数超过限制")
	ErrQuotaExceeded    = errors.New("今日 OCR 额度已用完，请明天再试")
	ErrTranslateQuota   = errors.New("今日翻译额度已用完，请明天再试")
	ErrIPDailyQuota     = errors.New("今日任务数已达上限，请明天再试")
	ErrTooManyActive    = errors.New("同时进行的任务过多，请等之前的任务完成后再试")
	ErrJobNotFound      = errors.New("任务不存在或已过期")
	ErrInvalidState     = errors.New("当前任务状态不允许该操作")
	ErrNoTranslator     = errors.New("翻译服务未配置")
	ErrMarkdownNotReady = errors.New("Markdown 尚未生成")
)

const (
	// 连续轮询失败上限：超过后立即判失败，不占住并发名额等超时。
	maxConsecutivePollErrors = 10
	// 活动任务的“新鲜度”窗口：超过该时间没有状态更新的活动任务不计入并发限制。
	activeFreshWindow = 5 * time.Minute
)

// Translator 是翻译抽象；由 mdtranslate 提供 OpenAI-compatible 实现。
type Translator interface {
	TranslateMarkdown(ctx context.Context, markdown string, translateReferences bool, progress func(done, total int, section string)) (string, error)
}

// OCRClient 是 PaddleOCR 抽象。
type OCRClient interface {
	SubmitJob(ctx context.Context, fileName string, r io.Reader) (string, error)
	PollJob(ctx context.Context, jobID string) (paddleocr.JobStatus, error)
}

type Config struct {
	TempDir             string        // 临时 PDF 目录（默认 DATABASE 同级 pdf-tmp）
	TTL                 time.Duration // 任务数据保留时长
	MaxSizeBytes        int64
	MaxPages            int
	OCRDailyQuota       int
	TranslateDailyQuota int
	PerIPDailyQuota     int
	PerIPConcurrent     int
	PollInterval        time.Duration
	PollTimeout         time.Duration
	CleanupInterval     time.Duration
}

type job struct {
	ID             string
	State          string
	FileName       string
	Pages          int
	PagesDone      int
	Error          string
	ProviderJobID  string
	Markdown       string
	MarkdownZH     string
	Translated     bool
	ChunkDone      int
	ChunkTotal     int
	CurrentSection string
	IP             string
	CreatedAt      int64
	UpdatedAt      int64
}

// JobView 是返回给前端的公开视图，绝不包含 provider job id、IP 与正文。
type JobView struct {
	ID             string `json:"id"`
	State          string `json:"state"`
	FileName       string `json:"file_name"`
	Pages          int    `json:"pages"`
	PagesDone      int    `json:"pages_done"`
	Error          string `json:"error,omitempty"`
	ChunkDone      int    `json:"chunk_done"`
	ChunkTotal     int    `json:"chunk_total"`
	CurrentSection string `json:"current_section,omitempty"`
	CreatedAt      int64  `json:"created_at"`
	UpdatedAt      int64  `json:"updated_at"`
}

type Service struct {
	db         *sql.DB
	ocr        OCRClient
	translator Translator
	logger     *slog.Logger
	cfg        Config
}

func New(db *sql.DB, ocr OCRClient, translator Translator, logger *slog.Logger, cfg Config) (*Service, error) {
	if cfg.TempDir == "" {
		cfg.TempDir = "data/pdf-tmp"
	}
	if cfg.TTL <= 0 {
		cfg.TTL = 24 * time.Hour
	}
	if cfg.OCRDailyQuota <= 0 {
		cfg.OCRDailyQuota = 100
	}
	if cfg.TranslateDailyQuota <= 0 {
		cfg.TranslateDailyQuota = 100
	}
	if cfg.PerIPDailyQuota <= 0 {
		cfg.PerIPDailyQuota = 30
	}
	if cfg.PerIPConcurrent <= 0 {
		cfg.PerIPConcurrent = 2
	}
	if cfg.PollInterval <= 0 {
		cfg.PollInterval = 5 * time.Second
	}
	if cfg.PollTimeout <= 0 {
		cfg.PollTimeout = 10 * time.Minute
	}
	if cfg.CleanupInterval <= 0 {
		cfg.CleanupInterval = time.Hour
	}
	if cfg.MaxSizeBytes <= 0 {
		cfg.MaxSizeBytes = 18 << 20
	}
	if cfg.MaxPages <= 0 {
		cfg.MaxPages = 100
	}
	if err := os.MkdirAll(cfg.TempDir, 0o750); err != nil {
		return nil, fmt.Errorf("create pdf temp dir: %w", err)
	}
	s := &Service{db: db, ocr: ocr, translator: translator, logger: logger, cfg: cfg}
	if err := s.migrate(); err != nil {
		return nil, err
	}
	s.resumeInterrupted()
	return s, nil
}

func (s *Service) migrate() error {
	const schema = `
		CREATE TABLE IF NOT EXISTS pdf_jobs (
			id TEXT PRIMARY KEY,
			state TEXT NOT NULL,
			file_name TEXT NOT NULL DEFAULT '',
			pages INTEGER NOT NULL DEFAULT 0,
			pages_done INTEGER NOT NULL DEFAULT 0,
			error TEXT NOT NULL DEFAULT '',
			provider_job_id TEXT NOT NULL DEFAULT '',
			markdown TEXT NOT NULL DEFAULT '',
			markdown_zh TEXT NOT NULL DEFAULT '',
			translated INTEGER NOT NULL DEFAULT 0,
			chunk_done INTEGER NOT NULL DEFAULT 0,
			chunk_total INTEGER NOT NULL DEFAULT 0,
			current_section TEXT NOT NULL DEFAULT '',
			ip_hash TEXT NOT NULL DEFAULT '',
			created_at INTEGER NOT NULL,
			updated_at INTEGER NOT NULL
		);
		CREATE INDEX IF NOT EXISTS idx_pdf_jobs_state ON pdf_jobs (state);
		CREATE INDEX IF NOT EXISTS idx_pdf_jobs_updated ON pdf_jobs (updated_at);
	`
	if _, err := s.db.Exec(schema); err != nil {
		return fmt.Errorf("migrate pdf_jobs: %w", err)
	}
	return nil
}

// resumeInterrupted 在进程重启后恢复：ocr_processing 继续轮询，
// translating 重新翻译，未完成上传的任务标记失败。
func (s *Service) resumeInterrupted() {
	rows, err := s.db.Query(`SELECT id, provider_job_id, markdown, file_name FROM pdf_jobs
		WHERE state IN (?, ?, ?, ?)`, StateQueued, StateUploading, StateOCRProcessing, StateTranslating)
	if err != nil {
		s.logger.Warn("pdfjob resume query failed", "error", err)
		return
	}
	type pending struct {
		id, providerID, markdown, fileName string
	}
	var list []pending
	for rows.Next() {
		var item pending
		if err := rows.Scan(&item.id, &item.providerID, &item.markdown, &item.fileName); err != nil {
			rows.Close()
			s.logger.Warn("pdfjob resume scan failed", "error", err)
			return
		}
		list = append(list, item)
	}
	rows.Close()

	for _, item := range list {
		switch {
		case item.providerID != "":
			s.logger.Info("pdfjob resume polling", "job", item.id)
			go s.pollLoop(context.Background(), item.id, item.providerID)
		case item.markdown != "":
			s.logger.Info("pdfjob resume translation", "job", item.id)
			go s.runTranslation(context.Background(), item.id, true)
		default:
			s.fail(item.id, "服务重启，请重新上传")
		}
	}
}

// MaxUploadBytes 是允许的 multipart 上传总量（PDF 上限 + 表单开销）。
func (s *Service) MaxUploadBytes() int64 {
	return s.cfg.MaxSizeBytes + (1 << 20)
}

// HashIP 把客户端 IP 散列后用于配额统计，不保存原始 IP。
func HashIP(ip string) string {
	sum := sha256.Sum256([]byte(ip))
	return hex.EncodeToString(sum[:8])
}

// Create 校验并创建任务：写临时文件、入库、启动 OCR goroutine。
func (s *Service) Create(ctx context.Context, ipHash, fileName string, pages int, r io.Reader) (*JobView, error) {
	dayStart := startOfToday()
	var globalToday, ipToday, ipActive int
	if err := s.db.QueryRow(`SELECT
			COALESCE(SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END), 0),
			COALESCE(SUM(CASE WHEN created_at >= ? AND ip_hash = ? THEN 1 ELSE 0 END), 0),
			COALESCE(SUM(CASE WHEN state NOT IN (?, ?) AND ip_hash = ? AND updated_at >= ? THEN 1 ELSE 0 END), 0)
		FROM pdf_jobs`, dayStart, dayStart, ipHash, StateCompleted, StateFailed, ipHash,
		time.Now().Add(-activeFreshWindow).Unix()).
		Scan(&globalToday, &ipToday, &ipActive); err != nil {
		return nil, err
	}
	if globalToday >= s.cfg.OCRDailyQuota {
		return nil, ErrQuotaExceeded
	}
	if ipToday >= s.cfg.PerIPDailyQuota {
		return nil, ErrIPDailyQuota
	}
	if ipActive >= s.cfg.PerIPConcurrent {
		return nil, ErrTooManyActive
	}
	if pages > s.cfg.MaxPages {
		return nil, ErrTooManyPages
	}

	if err := os.MkdirAll(s.cfg.TempDir, 0o750); err != nil {
		return nil, err
	}
	tempFile, err := os.CreateTemp(s.cfg.TempDir, "pdf-*.pdf")
	if err != nil {
		return nil, err
	}
	defer tempFile.Close()

	// PDF 魔数校验。
	magic := make([]byte, 5)
	if _, err := io.ReadFull(r, magic); err != nil {
		os.Remove(tempFile.Name())
		return nil, ErrInvalidPDF
	}
	if string(magic) != "%PDF-" {
		os.Remove(tempFile.Name())
		return nil, ErrInvalidPDF
	}
	if _, err := tempFile.Write(magic); err != nil {
		os.Remove(tempFile.Name())
		return nil, err
	}
	copied, err := io.Copy(tempFile, r)
	if err != nil {
		os.Remove(tempFile.Name())
		var maxBytesErr *http.MaxBytesError
		if errors.As(err, &maxBytesErr) {
			return nil, ErrTooLarge
		}
		if errors.Is(err, io.ErrUnexpectedEOF) {
			return nil, ErrInvalidPDF
		}
		return nil, err
	}
	if copied+int64(len(magic)) > s.cfg.MaxSizeBytes {
		os.Remove(tempFile.Name())
		return nil, ErrTooLarge
	}

	id, err := newJobID()
	if err != nil {
		os.Remove(tempFile.Name())
		return nil, err
	}
	now := time.Now().Unix()
	if fileName == "" {
		fileName = "document.pdf"
	}
	if _, err := s.db.Exec(`INSERT INTO pdf_jobs
			(id, state, file_name, pages, ip_hash, created_at, updated_at)
			VALUES (?, ?, ?, ?, ?, ?, ?)`,
		id, StateQueued, sanitizeFileName(fileName), max(pages, 0), ipHash, now, now); err != nil {
		os.Remove(tempFile.Name())
		return nil, err
	}

	view := s.view(s.load(id))
	go func() {
		s.runOCR(context.Background(), id, tempFile.Name(), fileName)
	}()
	return view, nil
}

func (s *Service) runOCR(ctx context.Context, id, tempPath, fileName string) {
	s.setState(id, StateUploading)
	tempFile, err := os.Open(tempPath)
	if err != nil {
		s.fail(id, "读取上传文件失败")
		return
	}
	providerID, err := s.ocr.SubmitJob(ctx, fileName, tempFile)
	tempFile.Close()
	os.Remove(tempPath) // 无论成功与否，提交后本地 PDF 不再需要。
	if err != nil {
		s.fail(id, describeOCRError(err, "上传 PaddleOCR 失败"))
		return
	}
	if _, err := s.db.Exec(`UPDATE pdf_jobs SET provider_job_id = ?, updated_at = ? WHERE id = ?`,
		providerID, time.Now().Unix(), id); err != nil {
		s.fail(id, "保存任务状态失败")
		return
	}
	s.setState(id, StateOCRProcessing)
	s.pollLoop(ctx, id, providerID)
}

// pollLoop 周期轮询 PaddleOCR 直到 done/failed/超时；进程重启后可直接复用。
// 连续轮询失败达到上限、或出现令牌/配额类永久错误时立即失败，
// 避免任务长时间占用并发名额。
func (s *Service) pollLoop(ctx context.Context, id, providerID string) {
	deadline := time.Now().Add(s.cfg.PollTimeout)
	ticker := time.NewTicker(s.cfg.PollInterval)
	defer ticker.Stop()
	consecutiveErrors := 0
	for {
		status, err := s.ocr.PollJob(ctx, providerID)
		if err != nil {
			if ctx.Err() != nil {
				return
			}
			if errors.Is(err, paddleocr.ErrAuth) {
				s.fail(id, "OCR 服务令牌无效，请联系站长检查配置")
				return
			}
			if errors.Is(err, paddleocr.ErrQuota) {
				s.fail(id, "OCR 服务今日额度已用完，请明天再试")
				return
			}
			consecutiveErrors++
			if consecutiveErrors >= maxConsecutivePollErrors || time.Now().After(deadline) {
				s.fail(id, "OCR 服务暂时不可用，请稍后重试")
				return
			}
			s.logger.Warn("pdfjob poll error", "job", id, "error", err)
			select {
			case <-ctx.Done():
				return
			case <-ticker.C:
			}
			continue
		}
		consecutiveErrors = 0
		switch status.State {
		case "done":
			if status.TotalPages > 0 {
				s.db.Exec(`UPDATE pdf_jobs SET pages = ?, pages_done = ? WHERE id = ?`,
					status.TotalPages, status.TotalPages, id)
			}
			if _, err := s.db.Exec(`UPDATE pdf_jobs SET markdown = ?, state = ?, updated_at = ? WHERE id = ?`,
				status.Markdown, StateOCRCompleted, time.Now().Unix(), id); err != nil {
				s.fail(id, "保存解析结果失败")
				return
			}
			return
		case "failed":
			message := status.ErrorMsg
			if message == "" {
				message = "OCR 解析失败"
			}
			s.fail(id, message)
			return
		default:
			if status.TotalPages > 0 {
				s.db.Exec(`UPDATE pdf_jobs SET pages = ?, pages_done = ?, updated_at = ? WHERE id = ?`,
					status.TotalPages, status.ExtractedPages, time.Now().Unix(), id)
			} else {
				s.setState(id, StateOCRProcessing)
			}
			if time.Now().After(deadline) {
				s.fail(id, "OCR 超时，请稍后重试")
				return
			}
			select {
			case <-ctx.Done():
				return
			case <-ticker.C:
			}
		}
	}
}

// StartTranslate 启动 AI 翻译（异步）。翻译失败回退到 ocr_completed，保留原文。
func (s *Service) StartTranslate(ipHash, id string, translateReferences bool) error {
	row := s.db.QueryRow(`SELECT state, markdown FROM pdf_jobs WHERE id = ?`, id)
	var state, markdown string
	if err := row.Scan(&state, &markdown); err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return ErrJobNotFound
		}
		return err
	}
	if state != StateOCRCompleted && state != StateCompleted {
		return ErrInvalidState
	}
	if s.translator == nil {
		return ErrNoTranslator
	}
	var translatedToday int
	if err := s.db.QueryRow(`SELECT COUNT(*) FROM pdf_jobs
			WHERE translated = 1 AND updated_at >= ?`, startOfToday()).Scan(&translatedToday); err != nil {
		return err
	}
	if translatedToday >= s.cfg.TranslateDailyQuota {
		return ErrTranslateQuota
	}
	now := time.Now().Unix()
	if _, err := s.db.Exec(`UPDATE pdf_jobs SET state = ?, translated = 1, chunk_done = 0,
			chunk_total = 0, current_section = '', error = '', updated_at = ? WHERE id = ?`,
		StateTranslating, now, id); err != nil {
		return err
	}
	go s.runTranslation(context.Background(), id, translateReferences)
	return nil
}

func (s *Service) runTranslation(ctx context.Context, id string, translateReferences bool) {
	var markdown string
	if err := s.db.QueryRow(`SELECT markdown FROM pdf_jobs WHERE id = ?`, id).Scan(&markdown); err != nil || markdown == "" {
		s.fail(id, "任务内容缺失，无法翻译")
		return
	}
	translated, err := s.translator.TranslateMarkdown(ctx, markdown, translateReferences,
		func(done, total int, section string) {
			s.db.Exec(`UPDATE pdf_jobs SET chunk_done = ?, chunk_total = ?, current_section = ?, updated_at = ?
				WHERE id = ? AND state = ?`, done, total, section, time.Now().Unix(), id, StateTranslating)
		})
	if err != nil {
		if ctx.Err() != nil {
			return
		}
		// 回退到 ocr_completed：原文仍在，用户可重试翻译或先下载原文。
		s.db.Exec(`UPDATE pdf_jobs SET state = ?, error = ?, updated_at = ? WHERE id = ?`,
			StateOCRCompleted, "翻译失败："+err.Error(), time.Now().Unix(), id)
		s.logger.Warn("pdfjob translation failed", "job", id, "error", err)
		return
	}
	if _, err := s.db.Exec(`UPDATE pdf_jobs SET markdown_zh = ?, state = ?, updated_at = ? WHERE id = ?`,
		translated, StateCompleted, time.Now().Unix(), id); err != nil {
		s.fail(id, "保存译文失败")
		return
	}
}

func (s *Service) setState(id, state string) {
	s.db.Exec(`UPDATE pdf_jobs SET state = ?, updated_at = ? WHERE id = ?`, state, time.Now().Unix(), id)
}

func (s *Service) fail(id, message string) {
	s.db.Exec(`UPDATE pdf_jobs SET state = ?, error = ?, updated_at = ? WHERE id = ?`,
		StateFailed, message, time.Now().Unix(), id)
	s.logger.Warn("pdfjob failed", "job", id, "reason", message)
}

func (s *Service) Get(id string) (JobView, error) {
	job := s.load(id)
	if job == nil {
		return JobView{}, ErrJobNotFound
	}
	return *s.view(job), nil
}

// Markdown 返回任务正文；variant 为 "zh" 时返回译文。
func (s *Service) Markdown(id, variant string) (string, string, error) {
	job := s.load(id)
	if job == nil {
		return "", "", ErrJobNotFound
	}
	if variant == "zh" {
		if job.State != StateCompleted || job.MarkdownZH == "" {
			return "", "", ErrMarkdownNotReady
		}
		return job.MarkdownZH, zhFileName(job.FileName), nil
	}
	if job.State != StateOCRCompleted && job.State != StateTranslating && job.State != StateCompleted {
		return "", "", ErrMarkdownNotReady
	}
	if job.Markdown == "" {
		return "", "", ErrMarkdownNotReady
	}
	return job.Markdown, mdFileName(job.FileName), nil
}

// RunCleanup 周期清理过期任务与孤儿临时文件。
func (s *Service) RunCleanup(ctx context.Context) {
	ticker := time.NewTicker(s.cfg.CleanupInterval)
	defer ticker.Stop()
	for {
		s.cleanupOnce()
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
		}
	}
}

func (s *Service) cleanupOnce() {
	cutoff := time.Now().Add(-s.cfg.TTL).Unix()
	if _, err := s.db.Exec(`DELETE FROM pdf_jobs WHERE updated_at < ?`, cutoff); err != nil {
		s.logger.Warn("pdfjob cleanup failed", "error", err)
	}
	// 兜底：卡在中间状态超过 30 分钟没有更新的任务标记失败，释放并发名额。
	if _, err := s.db.Exec(`UPDATE pdf_jobs SET state = ?, error = ?, updated_at = ?
		WHERE state NOT IN (?, ?) AND updated_at < ?`,
		StateFailed, "任务长时间无进展，已自动结束", StateCompleted, StateFailed,
		time.Now().Add(-30*time.Minute).Unix()); err != nil {
		s.logger.Warn("pdfjob stale sweep failed", "error", err)
	}
	entries, err := os.ReadDir(s.cfg.TempDir)
	if err != nil {
		return
	}
	for _, entry := range entries {
		info, err := entry.Info()
		if err == nil && info.ModTime().Before(time.Now().Add(-s.cfg.TTL)) {
			os.Remove(filepath.Join(s.cfg.TempDir, entry.Name()))
		}
	}
}

func (s *Service) load(id string) *job {
	row := s.db.QueryRow(`SELECT id, state, file_name, pages, pages_done, error, markdown, markdown_zh,
		translated, chunk_done, chunk_total, current_section, created_at, updated_at FROM pdf_jobs WHERE id = ?`, id)
	var item job
	var translated int
	err := row.Scan(&item.ID, &item.State, &item.FileName, &item.Pages, &item.PagesDone, &item.Error,
		&item.Markdown, &item.MarkdownZH, &translated, &item.ChunkDone, &item.ChunkTotal,
		&item.CurrentSection, &item.CreatedAt, &item.UpdatedAt)
	if err != nil {
		return nil
	}
	item.Translated = translated == 1
	return &item
}

func (s *Service) view(job *job) *JobView {
	if job == nil {
		return nil
	}
	return &JobView{
		ID: job.ID, State: job.State, FileName: job.FileName, Pages: job.Pages, PagesDone: job.PagesDone,
		Error: job.Error, ChunkDone: job.ChunkDone, ChunkTotal: job.ChunkTotal,
		CurrentSection: job.CurrentSection, CreatedAt: job.CreatedAt, UpdatedAt: job.UpdatedAt,
	}
}

func newJobID() (string, error) {
	buf := make([]byte, 12)
	if _, err := rand.Read(buf); err != nil {
		return "", err
	}
	return hex.EncodeToString(buf), nil
}

func sanitizeFileName(name string) string {
	name = filepath.Base(strings.TrimSpace(name))
	if name == "." || name == "/" || name == "" {
		return "document.pdf"
	}
	if len(name) > 120 {
		name = name[len(name)-120:]
	}
	return name
}

func mdFileName(source string) string {
	base := strings.TrimSuffix(source, ".pdf")
	if base == "" || base == source {
		base = "document"
	}
	return base + ".md"
}

func zhFileName(source string) string {
	base := strings.TrimSuffix(mdFileName(source), ".md")
	return base + ".zh.md"
}

func describeOCRError(err error, fallback string) string {
	switch {
	case errors.Is(err, paddleocr.ErrAuth):
		return "OCR 服务令牌无效，请联系站长检查配置"
	case errors.Is(err, paddleocr.ErrQuota):
		return "OCR 服务今日额度已用完，请明天再试"
	case errors.Is(err, paddleocr.ErrRateLimit):
		return "OCR 服务繁忙，请稍后重试"
	default:
		if err != nil {
			return fallback + "：" + err.Error()
		}
		return fallback
	}
}

func startOfToday() int64 {
	now := time.Now()
	return time.Date(now.Year(), now.Month(), now.Day(), 0, 0, 0, 0, now.Location()).Unix()
}
