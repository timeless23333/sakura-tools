// Package analytics 实现轻量级站点访问统计。
//
// 设计约束（2 核 2G 服务器）：
//   - 采集接口只做一次事务写入：原始事件 + 同步更新的按日聚合；
//   - Dashboard 只读聚合表（每行代表一天），不扫描原始事件；
//   - 原始事件只保留较短时间（默认 14 天），聚合表长期保留且行数有限；
//   - 访客标识是服务端 HMAC(secret, 随机 client_id) 的不可逆散列，
//     不保存 IP、不使用浏览器指纹。
package analytics

import (
	"context"
	"crypto/hmac"
	"crypto/rand"
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"errors"
	"fmt"
	"log/slog"
	"time"
)

const (
	dayFormat  = "2006-01-02"
	typePV     = "page_view"
	typeUse    = "tool_use"
	secretKey  = "hash_secret"
	trendLimit = 30
)

// detail_daily 的维度种类。
const (
	kindPath    = "path"    // 所有页面浏览
	kindEntry   = "entry"   // 会话入口页面
	kindRef     = "ref"     // 外部来源域名
	kindDevice  = "device"  // 设备类型
	kindBrowser = "browser" // 浏览器
	kindOS      = "os"      // 操作系统
)

type Service struct {
	db     *sql.DB
	logger *slog.Logger
	secret []byte
}

// Event 是一条已通过校验的待入库事件。
type Event struct {
	Type       string // page_view | tool_use
	ToolSlug   string
	Path       string
	RefHost    string // 外部来源主机名，内部跳转为空
	Entry      bool   // 是否为会话第一个页面
	ClientHash string
	Device     string
	Browser    string
	OS         string
	Bot        bool
	TS         time.Time
}

func New(ctx context.Context, db *sql.DB, logger *slog.Logger) (*Service, error) {
	s := &Service{db: db, logger: logger}
	if err := s.migrate(ctx); err != nil {
		return nil, err
	}
	secret, err := s.loadOrCreateSecret(ctx)
	if err != nil {
		return nil, err
	}
	s.secret = secret
	return s, nil
}

func (s *Service) migrate(ctx context.Context) error {
	const schema = `
		CREATE TABLE IF NOT EXISTS analytics_meta (
			key TEXT PRIMARY KEY,
			value TEXT NOT NULL
		) WITHOUT ROWID;

		-- 原始事件：短期保留，仅用于回查与重放，定期清理。
		CREATE TABLE IF NOT EXISTS analytics_events (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			ts INTEGER NOT NULL,
			day TEXT NOT NULL,
			type TEXT NOT NULL,
			tool_slug TEXT NOT NULL DEFAULT '',
			path TEXT NOT NULL DEFAULT '',
			client_hash TEXT NOT NULL DEFAULT '',
			is_new INTEGER NOT NULL DEFAULT 0,
			entry INTEGER NOT NULL DEFAULT 0,
			ref_host TEXT NOT NULL DEFAULT '',
			device TEXT NOT NULL DEFAULT '',
			browser TEXT NOT NULL DEFAULT '',
			os TEXT NOT NULL DEFAULT ''
		);
		CREATE INDEX IF NOT EXISTS idx_analytics_events_ts ON analytics_events (ts);

		-- 访客身份表：client_hash = HMAC(secret, 随机 client_id)，不可逆、无个人信息。
		CREATE TABLE IF NOT EXISTS analytics_clients (
			client_hash TEXT PRIMARY KEY,
			first_day TEXT NOT NULL
		) WITHOUT ROWID;

		-- 按日聚合（长期保留）。
		CREATE TABLE IF NOT EXISTS analytics_daily (
			day TEXT PRIMARY KEY,
			pv INTEGER NOT NULL DEFAULT 0,
			tool_use INTEGER NOT NULL DEFAULT 0,
			bot_pv INTEGER NOT NULL DEFAULT 0,
			new_visitors INTEGER NOT NULL DEFAULT 0
		) WITHOUT ROWID;

		-- 每日访客集合，用于 UV（含跨天去重）与新访客统计。
		CREATE TABLE IF NOT EXISTS analytics_visitors (
			day TEXT NOT NULL,
			client_hash TEXT NOT NULL,
			is_new INTEGER NOT NULL DEFAULT 0,
			PRIMARY KEY (day, client_hash)
		) WITHOUT ROWID;

		CREATE TABLE IF NOT EXISTS analytics_tool_daily (
			day TEXT NOT NULL,
			tool_slug TEXT NOT NULL,
			pv INTEGER NOT NULL DEFAULT 0,
			uses INTEGER NOT NULL DEFAULT 0,
			PRIMARY KEY (day, tool_slug)
		) WITHOUT ROWID;

		CREATE TABLE IF NOT EXISTS analytics_tool_visitors (
			day TEXT NOT NULL,
			tool_slug TEXT NOT NULL,
			client_hash TEXT NOT NULL,
			PRIMARY KEY (day, tool_slug, client_hash)
		) WITHOUT ROWID;

		-- 页面 / 入口 / 来源 / 设备 / 浏览器 / 操作系统共用的按日维度聚合。
		CREATE TABLE IF NOT EXISTS analytics_detail_daily (
			day TEXT NOT NULL,
			kind TEXT NOT NULL,
			value TEXT NOT NULL,
			pv INTEGER NOT NULL DEFAULT 0,
			PRIMARY KEY (day, kind, value)
		) WITHOUT ROWID;
	`
	if _, err := s.db.ExecContext(ctx, schema); err != nil {
		return fmt.Errorf("migrate analytics schema: %w", err)
	}
	return nil
}

func (s *Service) loadOrCreateSecret(ctx context.Context) ([]byte, error) {
	var hexSecret string
	err := s.db.QueryRowContext(ctx,
		`SELECT value FROM analytics_meta WHERE key = ?`, secretKey).Scan(&hexSecret)
	switch {
	case errors.Is(err, sql.ErrNoRows):
		buf := make([]byte, 32)
		if _, err := rand.Read(buf); err != nil {
			return nil, fmt.Errorf("generate analytics secret: %w", err)
		}
		hexSecret = hex.EncodeToString(buf)
		if _, err := s.db.ExecContext(ctx,
			`INSERT OR IGNORE INTO analytics_meta (key, value) VALUES (?, ?)`,
			secretKey, hexSecret); err != nil {
			return nil, fmt.Errorf("store analytics secret: %w", err)
		}
	case err != nil:
		return nil, fmt.Errorf("load analytics secret: %w", err)
	}
	secret, err := hex.DecodeString(hexSecret)
	if err != nil {
		return nil, fmt.Errorf("decode analytics secret: %w", err)
	}
	return secret, nil
}

// HashClientID 把前端生成的随机 client ID 映射为 64 bit 不可逆散列。
func (s *Service) HashClientID(clientID string) string {
	mac := hmac.New(sha256.New, s.secret)
	mac.Write([]byte(clientID))
	return hex.EncodeToString(mac.Sum(nil)[:8])
}

// CurrentDay 返回服务器本地时区（容器内为 Asia/Shanghai）的当天日期。
func CurrentDay() string { return time.Now().Format(dayFormat) }

// Ingest 写入一条非 Bot 事件：原始事件 + 按日聚合在同一事务内更新。
func (s *Service) Ingest(ctx context.Context, e *Event) error {
	day := e.TS.Local().Format(dayFormat)
	tx, err := s.db.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()

	isNew := 0
	if e.Type == typePV {
		var seen int
		if err := tx.QueryRowContext(ctx,
			`SELECT COUNT(*) FROM analytics_clients WHERE client_hash = ?`,
			e.ClientHash).Scan(&seen); err != nil {
			return err
		}
		if seen == 0 {
			isNew = 1
			if _, err := tx.ExecContext(ctx,
				`INSERT OR IGNORE INTO analytics_clients (client_hash, first_day) VALUES (?, ?)`,
				e.ClientHash, day); err != nil {
				return err
			}
		}
	}

	if _, err := tx.ExecContext(ctx, `
		INSERT INTO analytics_events
			(ts, day, type, tool_slug, path, client_hash, is_new, entry, ref_host, device, browser, os)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		e.TS.Unix(), day, e.Type, e.ToolSlug, e.Path, e.ClientHash, isNew, boolToInt(e.Entry),
		e.RefHost, e.Device, e.Browser, e.OS); err != nil {
		return err
	}

	if e.Type == typeUse {
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO analytics_daily (day, tool_use) VALUES (?, 1)
			ON CONFLICT(day) DO UPDATE SET tool_use = tool_use + 1`, day); err != nil {
			return err
		}
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO analytics_tool_daily (day, tool_slug, uses) VALUES (?, ?, 1)
			ON CONFLICT(day, tool_slug) DO UPDATE SET uses = uses + 1`, day, e.ToolSlug); err != nil {
			return err
		}
		if _, err := tx.ExecContext(ctx, `
			INSERT OR IGNORE INTO analytics_tool_visitors (day, tool_slug, client_hash) VALUES (?, ?, ?)`,
			day, e.ToolSlug, e.ClientHash); err != nil {
			return err
		}
	} else {
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO analytics_daily (day, pv, new_visitors) VALUES (?, 1, ?)
			ON CONFLICT(day) DO UPDATE SET pv = pv + 1, new_visitors = new_visitors + ?`,
			day, isNew, isNew); err != nil {
			return err
		}
		if _, err := tx.ExecContext(ctx, `
			INSERT OR IGNORE INTO analytics_visitors (day, client_hash, is_new) VALUES (?, ?, ?)`,
			day, e.ClientHash, isNew); err != nil {
			return err
		}
		dims := []struct{ kind, value string }{
			{kindPath, e.Path}, {kindDevice, e.Device}, {kindBrowser, e.Browser}, {kindOS, e.OS},
		}
		if e.Entry {
			dims = append(dims, struct{ kind, value string }{kindEntry, e.Path})
		}
		if e.RefHost != "" {
			dims = append(dims, struct{ kind, value string }{kindRef, e.RefHost})
		}
		for _, dim := range dims {
			if dim.value == "" {
				continue
			}
			if _, err := tx.ExecContext(ctx, `
				INSERT INTO analytics_detail_daily (day, kind, value, pv) VALUES (?, ?, ?, 1)
				ON CONFLICT(day, kind, value) DO UPDATE SET pv = pv + 1`,
				day, dim.kind, dim.value); err != nil {
				return err
			}
		}
		if e.ToolSlug != "" {
			if _, err := tx.ExecContext(ctx, `
				INSERT INTO analytics_tool_daily (day, tool_slug, pv) VALUES (?, ?, 1)
				ON CONFLICT(day, tool_slug) DO UPDATE SET pv = pv + 1`, day, e.ToolSlug); err != nil {
				return err
			}
			if _, err := tx.ExecContext(ctx, `
				INSERT OR IGNORE INTO analytics_tool_visitors (day, tool_slug, client_hash) VALUES (?, ?, ?)`,
				day, e.ToolSlug, e.ClientHash); err != nil {
				return err
			}
		}
	}
	return tx.Commit()
}

// CountBot 记录一条被识别为爬虫/程序的请求，不计入 PV/UV。
func (s *Service) CountBot(ctx context.Context, day string) error {
	_, err := s.db.ExecContext(ctx, `
		INSERT INTO analytics_daily (day, bot_pv) VALUES (?, 1)
		ON CONFLICT(day) DO UPDATE SET bot_pv = bot_pv + 1`, day)
	return err
}

// ---- Dashboard 汇总 ----

type Summary struct {
	Today     DayStat      `json:"today"`
	Range     RangeStat    `json:"range"`
	Last7PV   int64        `json:"last7_pv"`
	Trend     []TrendPoint `json:"trend"`
	TopTools  []ToolStat   `json:"top_tools"`
	TopPages  []NameCount  `json:"top_pages"`
	Entries   []NameCount  `json:"entries"`
	Referrers []NameCount  `json:"referrers"`
	Devices   []NameCount  `json:"devices"`
	Browsers  []NameCount  `json:"browsers"`
	OS        []NameCount  `json:"os"`
}

type DayStat struct {
	Day         string `json:"day"`
	PV          int64  `json:"pv"`
	UV          int64  `json:"uv"`
	ToolUse     int64  `json:"tool_use"`
	NewVisitors int64  `json:"new_visitors"`
	BotPV       int64  `json:"bot_pv"`
}

type RangeStat struct {
	Days    int   `json:"days"`
	PV      int64 `json:"pv"`
	UV      int64 `json:"uv"`
	ToolUse int64 `json:"tool_use"`
	BotPV   int64 `json:"bot_pv"`
}

type TrendPoint struct {
	Day     string `json:"day"`
	PV      int64  `json:"pv"`
	UV      int64  `json:"uv"`
	ToolUse int64  `json:"tool_use"`
}

type ToolStat struct {
	Slug string `json:"slug"`
	Name string `json:"name"`
	PV   int64  `json:"pv"`
	UV   int64  `json:"uv"`
	Uses int64  `json:"uses"`
}

type NameCount struct {
	Name  string `json:"name"`
	Count int64  `json:"count"`
}

// Summary 返回 Dashboard 所需的全部指标，只查聚合表。
// trend 固定返回最近 30 天，top 列表和 range 按 days 过滤。
func (s *Service) Summary(ctx context.Context, days int) (*Summary, error) {
	if days < 1 {
		days = 1
	}
	if days > 90 {
		days = 90
	}
	now := time.Now()
	today := now.Format(dayFormat)
	cutoff := now.AddDate(0, 0, -(days - 1)).Format(dayFormat)
	trendStart := now.AddDate(0, 0, -(trendLimit - 1)).Format(dayFormat)
	weekStart := now.AddDate(0, 0, -6).Format(dayFormat)

	sum := &Summary{Trend: make([]TrendPoint, 0, trendLimit), TopTools: []ToolStat{}}

	todayRow := s.db.QueryRowContext(ctx, `
		SELECT COALESCE(pv, 0), COALESCE(tool_use, 0), COALESCE(bot_pv, 0), COALESCE(new_visitors, 0)
		FROM analytics_daily WHERE day = ?`, today)
	var pv, toolUse, botPV, newVisitors sql.NullInt64
	if err := todayRow.Scan(&pv, &toolUse, &botPV, &newVisitors); err != nil && !errors.Is(err, sql.ErrNoRows) {
		return nil, err
	}
	sum.Today = DayStat{Day: today, PV: pv.Int64, UV: 0, ToolUse: toolUse.Int64,
		NewVisitors: newVisitors.Int64, BotPV: botPV.Int64}
	if err := s.db.QueryRowContext(ctx,
		`SELECT COUNT(*) FROM analytics_visitors WHERE day = ?`, today).Scan(&sum.Today.UV); err != nil {
		return nil, err
	}

	rangeRow := s.db.QueryRowContext(ctx, `
		SELECT COALESCE(SUM(pv), 0), COALESCE(SUM(tool_use), 0), COALESCE(SUM(bot_pv), 0)
		FROM analytics_daily WHERE day >= ?`, cutoff)
	if err := rangeRow.Scan(&sum.Range.PV, &sum.Range.ToolUse, &sum.Range.BotPV); err != nil {
		return nil, err
	}
	sum.Range.Days = days
	if err := s.db.QueryRowContext(ctx,
		`SELECT COUNT(DISTINCT client_hash) FROM analytics_visitors WHERE day >= ?`,
		cutoff).Scan(&sum.Range.UV); err != nil {
		return nil, err
	}
	if err := s.db.QueryRowContext(ctx,
		`SELECT COALESCE(SUM(pv), 0) FROM analytics_daily WHERE day >= ?`,
		weekStart).Scan(&sum.Last7PV); err != nil {
		return nil, err
	}

	pvByDay := make(map[string][2]int64, trendLimit)
	rows, err := s.db.QueryContext(ctx, `
		SELECT day, pv, tool_use FROM analytics_daily WHERE day >= ?`, trendStart)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var day string
		var p, u int64
		if err := rows.Scan(&day, &p, &u); err != nil {
			rows.Close()
			return nil, err
		}
		pvByDay[day] = [2]int64{p, u}
	}
	rows.Close()
	if err := rows.Err(); err != nil {
		return nil, err
	}

	uvByDay := make(map[string]int64, trendLimit)
	rows, err = s.db.QueryContext(ctx, `
		SELECT day, COUNT(*) FROM analytics_visitors WHERE day >= ? GROUP BY day`, trendStart)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var day string
		var uv int64
		if err := rows.Scan(&day, &uv); err != nil {
			rows.Close()
			return nil, err
		}
		uvByDay[day] = uv
	}
	rows.Close()
	if err := rows.Err(); err != nil {
		return nil, err
	}

	for i := trendLimit - 1; i >= 0; i-- {
		day := now.AddDate(0, 0, -i).Format(dayFormat)
		agg := pvByDay[day]
		sum.Trend = append(sum.Trend, TrendPoint{Day: day, PV: agg[0], UV: uvByDay[day], ToolUse: agg[1]})
	}

	toolUV := make(map[string]int64)
	rows, err = s.db.QueryContext(ctx, `
		SELECT tool_slug, COUNT(DISTINCT client_hash) FROM analytics_tool_visitors
		WHERE day >= ? GROUP BY tool_slug`, cutoff)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var slug string
		var uv int64
		if err := rows.Scan(&slug, &uv); err != nil {
			rows.Close()
			return nil, err
		}
		toolUV[slug] = uv
	}
	rows.Close()
	if err := rows.Err(); err != nil {
		return nil, err
	}

	rows, err = s.db.QueryContext(ctx, `
		SELECT tool_slug, COALESCE(SUM(pv), 0), COALESCE(SUM(uses), 0)
		FROM analytics_tool_daily WHERE day >= ?
		GROUP BY tool_slug ORDER BY SUM(uses) DESC, SUM(pv) DESC LIMIT 12`, cutoff)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var item ToolStat
		if err := rows.Scan(&item.Slug, &item.PV, &item.Uses); err != nil {
			rows.Close()
			return nil, err
		}
		item.UV = toolUV[item.Slug]
		sum.TopTools = append(sum.TopTools, item)
	}
	rows.Close()
	if err := rows.Err(); err != nil {
		return nil, err
	}

	detailKinds := []struct {
		kind   string
		target *[]NameCount
	}{
		{kindPath, &sum.TopPages}, {kindEntry, &sum.Entries}, {kindRef, &sum.Referrers},
		{kindDevice, &sum.Devices}, {kindBrowser, &sum.Browsers}, {kindOS, &sum.OS},
	}
	for _, item := range detailKinds {
		values, err := s.detailValues(ctx, item.kind, cutoff)
		if err != nil {
			return nil, err
		}
		*item.target = values
	}
	return sum, nil
}

func (s *Service) detailValues(ctx context.Context, kind, cutoff string) ([]NameCount, error) {
	rows, err := s.db.QueryContext(ctx, `
		SELECT value, COALESCE(SUM(pv), 0) FROM analytics_detail_daily
		WHERE day >= ? AND kind = ? GROUP BY value ORDER BY SUM(pv) DESC LIMIT 10`, cutoff, kind)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	values := []NameCount{}
	for rows.Next() {
		var item NameCount
		if err := rows.Scan(&item.Name, &item.Count); err != nil {
			return nil, err
		}
		values = append(values, item)
	}
	return values, rows.Err()
}

// Cleanup 删除过期数据：原始事件按配置保留，访客集合保留 60 天。
// 聚合表每天最多几十行，永久保留。建议每 6 小时执行一次。
func (s *Service) Cleanup(ctx context.Context, rawRetentionDays int) error {
	if rawRetentionDays < 3 {
		rawRetentionDays = 3
	}
	if rawRetentionDays > 90 {
		rawRetentionDays = 90
	}
	now := time.Now()
	rawCutoff := now.AddDate(0, 0, -rawRetentionDays).Unix()
	visitorCutoff := now.AddDate(0, 0, -60).Format(dayFormat)
	if _, err := s.db.ExecContext(ctx,
		`DELETE FROM analytics_events WHERE ts < ?`, rawCutoff); err != nil {
		return err
	}
	if _, err := s.db.ExecContext(ctx,
		`DELETE FROM analytics_visitors WHERE day < ?`, visitorCutoff); err != nil {
		return err
	}
	_, err := s.db.ExecContext(ctx,
		`DELETE FROM analytics_tool_visitors WHERE day < ?`, visitorCutoff)
	return err
}

// RunCleanup 周期性清理，阻塞运行，放到独立 goroutine。
func (s *Service) RunCleanup(ctx context.Context, rawRetentionDays int) {
	if err := s.Cleanup(ctx, rawRetentionDays); err != nil {
		s.logger.Warn("analytics cleanup failed", "error", err)
	}
	ticker := time.NewTicker(6 * time.Hour)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			if err := s.Cleanup(ctx, rawRetentionDays); err != nil {
				s.logger.Warn("analytics cleanup failed", "error", err)
			}
		}
	}
}

func boolToInt(v bool) int {
	if v {
		return 1
	}
	return 0
}
