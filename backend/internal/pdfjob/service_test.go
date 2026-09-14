package pdfjob

import (
	"context"
	"database/sql"
	"errors"
	"io"
	"log/slog"
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"

	"github.com/sakurano/sakura-tools/backend/internal/paddleocr"
	_ "modernc.org/sqlite"
)

func openTestDB(t *testing.T) *sql.DB {
	t.Helper()
	db, err := sql.Open("sqlite", filepath.Join(t.TempDir(), "test.db")+"?_pragma=busy_timeout(5000)&_pragma=journal_mode(WAL)")
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() { db.Close() })
	return db
}

type fakeOCR struct {
	submitted  int
	blocked    bool
	pollErrors bool
}

func (f *fakeOCR) SubmitJob(ctx context.Context, fileName string, r io.Reader) (string, error) {
	data, _ := io.ReadAll(r)
	if !strings.HasPrefix(string(data), "%PDF-") {
		return "", errors.New("bad upload")
	}
	f.submitted++
	return "provider-job-1", nil
}

func (f *fakeOCR) PollJob(ctx context.Context, jobID string) (paddleocr.JobStatus, error) {
	switch {
	case f.pollErrors:
		return paddleocr.JobStatus{}, errors.New("service down")
	case f.blocked:
		return paddleocr.JobStatus{State: "running"}, nil
	}
	return paddleocr.JobStatus{
		State:      "done",
		TotalPages: 3,
		Markdown:   "# hello\n\nworld",
	}, nil
}

type fakeTranslator struct {
	calls int
}

func (t *fakeTranslator) TranslateMarkdown(ctx context.Context, markdown string, translateReferences bool, progress func(done, total int, section string)) (string, error) {
	t.calls++
	if progress != nil {
		progress(1, 1, "hello")
	}
	return "译文：\n\n" + markdown, nil
}

func newTestService(t *testing.T, ocr OCRClient, translator Translator, mutate func(*Config)) *Service {
	t.Helper()
	cfg := Config{
		TempDir:         t.TempDir(),
		PollInterval:    10 * time.Millisecond,
		PollTimeout:     5 * time.Second,
		CleanupInterval: time.Hour,
	}
	if mutate != nil {
		mutate(&cfg)
	}
	svc, err := New(openTestDB(t), ocr, translator, slog.New(slog.NewTextHandler(io.Discard, nil)), cfg)
	if err != nil {
		t.Fatal(err)
	}
	return svc
}

func waitForState(t *testing.T, svc *Service, id string, states ...string) JobView {
	t.Helper()
	deadline := time.Now().Add(5 * time.Second)
	for time.Now().Before(deadline) {
		view, err := svc.Get(id)
		if err == nil {
			for _, state := range states {
				if view.State == state {
					return view
				}
			}
		}
		time.Sleep(5 * time.Millisecond)
	}
	view, _ := svc.Get(id)
	t.Fatalf("job %s did not reach %v, last=%+v", id, states, view)
	return JobView{}
}

func TestJobLifecycle(t *testing.T) {
	ocr := &fakeOCR{}
	translator := &fakeTranslator{}
	svc := newTestService(t, ocr, translator, nil)

	job, err := svc.Create(context.Background(), "ip-hash", "paper.pdf", 3,
		strings.NewReader("%PDF-1.4 test content"))
	if err != nil {
		t.Fatal(err)
	}
	if job.State != StateQueued {
		t.Fatalf("expected queued, got %s", job.State)
	}

	view := waitForState(t, svc, job.ID, StateOCRCompleted)
	if view.Pages != 3 || view.PagesDone != 3 {
		t.Fatalf("unexpected pages: %+v", view)
	}
	if view.ChunkTotal != 0 {
		t.Fatalf("no chunk info expected before translate: %+v", view)
	}

	markdown, fileName, err := svc.Markdown(job.ID, "original")
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(markdown, "world") || fileName != "paper.md" {
		t.Fatalf("unexpected markdown %q (%q)", markdown, fileName)
	}

	// 提交成功后本地临时 PDF 必须已删除。
	entries, _ := os.ReadDir(svc.cfg.TempDir)
	if len(entries) != 0 {
		t.Fatalf("temp dir should be empty, got %d files", len(entries))
	}

	if err := svc.StartTranslate("ip-hash", job.ID, false); err != nil {
		t.Fatal(err)
	}
	view = waitForState(t, svc, job.ID, StateCompleted)
	if view.ChunkDone != 1 || view.ChunkTotal != 1 || view.CurrentSection != "hello" {
		t.Fatalf("unexpected progress: %+v", view)
	}

	zh, zhName, err := svc.Markdown(job.ID, "zh")
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(zh, "译文") || zhName != "paper.zh.md" {
		t.Fatalf("unexpected zh markdown %q (%q)", zh, zhName)
	}
	if translator.calls != 1 || ocr.submitted != 1 {
		t.Fatalf("unexpected call counts: ocr=%d translate=%d", ocr.submitted, translator.calls)
	}
}

func TestCreateRejectsNonPDF(t *testing.T) {
	svc := newTestService(t, &fakeOCR{}, &fakeTranslator{}, nil)
	if _, err := svc.Create(context.Background(), "ip", "x.pdf", 0, strings.NewReader("MZ not a pdf")); err == nil {
		t.Fatal("expected invalid pdf error")
	}
}

func TestPerIPConcurrencyLimit(t *testing.T) {
	ocr := &fakeOCR{blocked: true}
	svc := newTestService(t, ocr, &fakeTranslator{}, func(cfg *Config) {
		cfg.PerIPConcurrent = 1
	})
	if _, err := svc.Create(context.Background(), "ip", "a.pdf", 0, strings.NewReader("%PDF-1.4 a")); err != nil {
		t.Fatal(err)
	}
	if _, err := svc.Create(context.Background(), "ip", "b.pdf", 0, strings.NewReader("%PDF-1.4 b")); !errors.Is(err, ErrTooManyActive) {
		t.Fatalf("expected active limit error, got %v", err)
	}
}

func TestStaleActiveJobsDoNotBlock(t *testing.T) {
	db := openTestDB(t)
	cfg := Config{TempDir: t.TempDir(), PollInterval: time.Millisecond, CleanupInterval: time.Hour, PerIPConcurrent: 1}
	svc, err := New(db, &fakeOCR{blocked: true}, &fakeTranslator{}, slog.New(slog.NewTextHandler(io.Discard, nil)), cfg)
	if err != nil {
		t.Fatal(err)
	}
	// 一个 10 分钟没有更新的“活动”任务（例如进程曾崩溃残留）不应阻塞新任务。
	now := time.Now().Unix()
	db.Exec(`INSERT INTO pdf_jobs (id, state, ip_hash, created_at, updated_at)
		VALUES ('stale', 'ocr_processing', 'ip', ?, ?)`, now-600, now-600)
	if _, err := svc.Create(context.Background(), "ip", "a.pdf", 0, strings.NewReader("%PDF-1.4 a")); err != nil {
		t.Fatalf("stale active job must not block new jobs: %v", err)
	}
}

func TestPollErrorsFailFast(t *testing.T) {
	svc := newTestService(t, &fakeOCR{pollErrors: true}, &fakeTranslator{}, func(cfg *Config) {
		cfg.PollInterval = 5 * time.Millisecond
	})
	job, err := svc.Create(context.Background(), "ip", "a.pdf", 0, strings.NewReader("%PDF-1.4 a"))
	if err != nil {
		t.Fatal(err)
	}
	view := waitForState(t, svc, job.ID, StateFailed)
	if !strings.Contains(view.Error, "OCR 服务暂时不可用") {
		t.Fatalf("unexpected failure reason: %q", view.Error)
	}
}

func TestResumeMarksUnsubmittedJobsFailed(t *testing.T) {
	db := openTestDB(t)
	cfg := Config{TempDir: t.TempDir(), PollInterval: time.Millisecond, PollTimeout: time.Second, CleanupInterval: time.Hour}
	if _, err := New(db, &fakeOCR{}, &fakeTranslator{}, slog.New(slog.NewTextHandler(io.Discard, nil)), cfg); err != nil {
		t.Fatal(err)
	}
	// 模拟一个进程重启前卡在 uploading 的任务。
	now := time.Now().Unix()
	db.Exec(`INSERT INTO pdf_jobs (id, state, file_name, ip_hash, created_at, updated_at)
		VALUES ('stuck', 'uploading', 'x.pdf', 'ip', ?, ?)`, now, now)

	// 新实例加载后应将其标记失败。
	svc2, err := New(db, &fakeOCR{}, &fakeTranslator{}, slog.New(slog.NewTextHandler(io.Discard, nil)), cfg)
	if err != nil {
		t.Fatal(err)
	}
	view, err := svc2.Get("stuck")
	if err != nil {
		t.Fatal(err)
	}
	if view.State != StateFailed {
		t.Fatalf("expected failed after resume, got %s", view.State)
	}
}

func TestCleanupRemovesExpiredJobs(t *testing.T) {
	db := openTestDB(t)
	cfg := Config{TempDir: filepath.Join(t.TempDir(), "tmp"), PollInterval: time.Millisecond, CleanupInterval: time.Hour}
	svc, err := New(db, &fakeOCR{}, &fakeTranslator{}, slog.New(slog.NewTextHandler(io.Discard, nil)), cfg)
	if err != nil {
		t.Fatal(err)
	}
	now := time.Now().Unix()
	db.Exec(`INSERT INTO pdf_jobs (id, state, ip_hash, created_at, updated_at)
		VALUES ('old', 'completed', 'ip', ?, ?)`, now-48*3600, now-48*3600)
	db.Exec(`INSERT INTO pdf_jobs (id, state, ip_hash, created_at, updated_at)
		VALUES ('fresh', 'completed', 'ip', ?, ?)`, now, now)

	svc.cleanupOnce()

	if _, err := svc.Get("old"); !errors.Is(err, ErrJobNotFound) {
		t.Fatalf("expected expired job removed, got %v", err)
	}
	if _, err := svc.Get("fresh"); err != nil {
		t.Fatalf("fresh job must survive cleanup: %v", err)
	}
}
