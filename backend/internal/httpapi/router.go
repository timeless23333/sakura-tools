package httpapi

import (
	"context"
	"crypto/subtle"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sakurano/sakura-tools/backend/internal/analytics"
	"github.com/sakurano/sakura-tools/backend/internal/pdfjob"
	"github.com/sakurano/sakura-tools/backend/internal/store"
	"github.com/sakurano/sakura-tools/backend/internal/translation"
)

var validSlug = regexp.MustCompile(`^[a-z0-9-]{1,48}$`)

var validClientID = regexp.MustCompile(`^[A-Za-z0-9_-]{8,64}$`)

type handler struct {
	store             *store.Store
	logger            *slog.Logger
	translator        *translation.Service
	analytics         *analytics.Service
	pdfJobs           *pdfjob.Service
	adminToken        string
	translationMu     sync.Mutex
	translationLimits map[string]rateWindow
	analyticsMu       sync.Mutex
	analyticsLimits   map[string]rateWindow
}

type rateWindow struct {
	started time.Time
	count   int
}

type tool struct {
	Slug     string `json:"slug"`
	Name     string `json:"name"`
	Category string `json:"category"`
	Ready    bool   `json:"ready"`
}

var toolCatalog = []tool{
	{Slug: "json", Name: "JSON 格式化", Category: "开发", Ready: true},
	{Slug: "base64", Name: "Base64 编解码", Category: "开发", Ready: true},
	{Slug: "timestamp", Name: "时间戳转换", Category: "开发", Ready: true},
	{Slug: "password", Name: "随机密码", Category: "生活", Ready: true},
	{Slug: "translate", Name: "在线翻译", Category: "文本", Ready: true},
	{Slug: "markdown", Name: "Markdown 编辑器", Category: "文本", Ready: true},
	{Slug: "image", Name: "图片处理", Category: "图像", Ready: true},
	{Slug: "pdf", Name: "PDF 工具", Category: "文档", Ready: true},
	{Slug: "pixel-beads", Name: "像素拼豆图纸", Category: "图像", Ready: true},
	{Slug: "color", Name: "颜色工具", Category: "开发", Ready: true},
	{Slug: "pdf-markdown", Name: "PDF 转 Markdown", Category: "文档", Ready: true},
}

func NewRouter(s *store.Store, logger *slog.Logger, mode, frontendDir string, translator *translation.Service, an *analytics.Service, pdfJobs *pdfjob.Service, adminToken string) http.Handler {
	gin.SetMode(mode)
	router := gin.New()
	if err := router.SetTrustedProxies([]string{"127.0.0.1", "::1"}); err != nil {
		panic(err)
	}
	router.Use(gin.Recovery(), requestLogger(logger))
	h := &handler{
		store: s, logger: logger, translator: translator, analytics: an, pdfJobs: pdfJobs, adminToken: adminToken,
		translationLimits: make(map[string]rateWindow), analyticsLimits: make(map[string]rateWindow),
	}

	api := router.Group("/api/v1")
	api.GET("/health", h.health)
	api.GET("/tools", h.tools)
	api.POST("/events/tool-opened", h.toolOpened)
	api.POST("/translate", h.translate)
	api.POST("/analytics/collect", h.analyticsCollect)

	api.POST("/pdf/jobs", h.pdfCreateJob)
	api.GET("/pdf/jobs/:id", h.pdfGetJob)
	api.GET("/pdf/jobs/:id/markdown", h.pdfJobMarkdown)
	api.POST("/pdf/jobs/:id/translate", h.pdfTranslateJob)

	admin := api.Group("/admin", h.requireAdmin)
	admin.GET("/analytics/summary", h.adminAnalyticsSummary)

	router.NoRoute(spaHandler(frontendDir))

	return router
}

var supportedLanguages = map[string]bool{
	"auto": true, "zh-CN": true, "zh-TW": true, "en": true, "ja": true,
	"ko": true, "fr": true, "de": true, "es": true, "ru": true,
	"it": true, "pt": true, "ar": true, "nl": true, "pl": true,
}

func (h *handler) translate(c *gin.Context) {
	if h.translator == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "translation service is unavailable"})
		return
	}
	if !h.allowTranslation(c.ClientIP()) {
		c.Header("Retry-After", "600")
		c.JSON(http.StatusTooManyRequests, gin.H{"error": "too many translation requests"})
		return
	}
	c.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, 24<<10)
	var input struct {
		Text       string `json:"text" binding:"required"`
		SourceLang string `json:"source_lang" binding:"required"`
		TargetLang string `json:"target_lang" binding:"required"`
	}
	if err := c.ShouldBindJSON(&input); err != nil || !supportedLanguages[input.SourceLang] || !supportedLanguages[input.TargetLang] || input.TargetLang == "auto" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid translation request"})
		return
	}
	ctx, cancel := context.WithTimeout(c.Request.Context(), 12*time.Second)
	defer cancel()
	result, err := h.translator.Translate(ctx, translation.Request{
		Text: input.Text, SourceLang: input.SourceLang, TargetLang: input.TargetLang,
	})
	if err != nil {
		if errors.Is(err, translation.ErrInputTooLong) {
			c.JSON(http.StatusRequestEntityTooLarge, gin.H{"error": "translation input is too long"})
			return
		}
		h.logger.Warn("translation failed", "error", err)
		c.JSON(http.StatusBadGateway, gin.H{"error": "translation provider is unavailable"})
		return
	}
	c.JSON(http.StatusOK, result)
}

func (h *handler) allowTranslation(clientIP string) bool {
	h.translationMu.Lock()
	defer h.translationMu.Unlock()
	now := time.Now()
	if len(h.translationLimits) > 1000 {
		for ip, item := range h.translationLimits {
			if now.Sub(item.started) >= 10*time.Minute {
				delete(h.translationLimits, ip)
			}
		}
	}
	window := h.translationLimits[clientIP]
	if window.started.IsZero() || now.Sub(window.started) >= 10*time.Minute {
		h.translationLimits[clientIP] = rateWindow{started: now, count: 1}
		return true
	}
	if window.count >= 20 {
		return false
	}
	window.count++
	h.translationLimits[clientIP] = window
	return true
}

// ---- 访问统计 ----

// requireAdmin 保护 /api/v1/admin/*；未配置令牌时整体返回 404，不暴露接口存在。
func (h *handler) requireAdmin(c *gin.Context) {
	if h.adminToken == "" {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": "not found"})
		return
	}
	token := c.GetHeader("X-Admin-Token")
	if token == "" || subtle.ConstantTimeCompare([]byte(token), []byte(h.adminToken)) != 1 {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}
	c.Next()
}

// analyticsCollect 接收前端匿名事件。失败只影响统计，不影响工具本身。
func (h *handler) analyticsCollect(c *gin.Context) {
	c.Header("Cache-Control", "no-store")
	if h.analytics == nil {
		c.Status(http.StatusNoContent)
		return
	}
	if !h.allowAnalyticsEvent(c.ClientIP()) {
		c.Status(http.StatusTooManyRequests)
		return
	}
	c.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, 2<<10)
	var input struct {
		Type  string `json:"type"`
		Tool  string `json:"tool"`
		Path  string `json:"path"`
		CID   string `json:"cid"`
		Entry bool   `json:"entry"`
		Ref   string `json:"ref"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid event"})
		return
	}

	device, browser, osName, bot := analytics.ClassifyUserAgent(c.Request.UserAgent())
	day := analytics.CurrentDay()
	if bot {
		if err := h.analytics.CountBot(c.Request.Context(), day); err != nil {
			h.logger.Warn("analytics bot count", "error", err)
		}
		c.Status(http.StatusNoContent)
		return
	}

	if !validClientID.MatchString(input.CID) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid event"})
		return
	}

	event := analytics.Event{
		Device:     device,
		Browser:    browser,
		OS:         osName,
		ClientHash: h.analytics.HashClientID(input.CID),
		Entry:      input.Entry,
		TS:         time.Now(),
	}
	switch input.Type {
	case "page_view":
		event.Type = "page_view"
		event.Path = sanitizeEventPath(input.Path)
		if slug, ok := toolSlugFromPath(event.Path); ok {
			event.ToolSlug = slug
		}
		event.RefHost = externalRefHost(input.Ref, c.Request.Host)
	case "tool_use":
		if !validSlug.MatchString(input.Tool) || !isKnownTool(input.Tool) {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid tool slug"})
			return
		}
		event.Type = "tool_use"
		event.ToolSlug = input.Tool
		event.Path = "/tools/" + input.Tool
	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid event"})
		return
	}

	if err := h.analytics.Ingest(c.Request.Context(), &event); err != nil {
		h.logger.Warn("analytics ingest", "error", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not record event"})
		return
	}
	c.Status(http.StatusNoContent)
}

func (h *handler) adminAnalyticsSummary(c *gin.Context) {
	days := 7
	switch c.Query("days") {
	case "1":
		days = 1
	case "30":
		days = 30
	}
	summary, err := h.analytics.Summary(c.Request.Context(), days)
	if err != nil {
		h.logger.Error("analytics summary", "error", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not load summary"})
		return
	}
	names := make(map[string]string, len(toolCatalog))
	for _, item := range toolCatalog {
		names[item.Slug] = item.Name
	}
	for i := range summary.TopTools {
		summary.TopTools[i].Name = names[summary.TopTools[i].Slug]
	}
	c.JSON(http.StatusOK, summary)
}

// allowAnalyticsEvent 对单 IP 限流：10 分钟最多 120 条事件。
func (h *handler) allowAnalyticsEvent(clientIP string) bool {
	h.analyticsMu.Lock()
	defer h.analyticsMu.Unlock()
	now := time.Now()
	if len(h.analyticsLimits) > 1000 {
		for ip, item := range h.analyticsLimits {
			if now.Sub(item.started) >= 10*time.Minute {
				delete(h.analyticsLimits, ip)
			}
		}
	}
	window := h.analyticsLimits[clientIP]
	if window.started.IsZero() || now.Sub(window.started) >= 10*time.Minute {
		h.analyticsLimits[clientIP] = rateWindow{started: now, count: 1}
		return true
	}
	if window.count >= 120 {
		return false
	}
	window.count++
	h.analyticsLimits[clientIP] = window
	return true
}

// sanitizeEventPath 只保留本站路径：去掉查询与锚点、限制长度，异常输入归一为 "/"。
func sanitizeEventPath(raw string) string {
	if index := strings.IndexAny(raw, "?#"); index >= 0 {
		raw = raw[:index]
	}
	if raw == "" || !strings.HasPrefix(raw, "/") || len(raw) > 128 || strings.Contains(raw, "..") {
		return "/"
	}
	return raw
}

func toolSlugFromPath(path string) (string, bool) {
	rest, ok := strings.CutPrefix(path, "/tools/")
	if !ok {
		return "", false
	}
	rest = strings.Trim(rest, "/")
	if !validSlug.MatchString(rest) || !isKnownTool(rest) {
		return "", false
	}
	return rest, true
}

// externalRefHost 解析外部来源域名；空 referrer 或同站跳转返回空。
func externalRefHost(raw, siteHost string) string {
	if raw == "" {
		return ""
	}
	parsed, err := url.Parse(raw)
	if err != nil || parsed.Host == "" {
		return ""
	}
	host := strings.ToLower(parsed.Host)
	if index := strings.LastIndex(host, ":"); index >= 0 && !strings.Contains(host, "]") {
		host = host[:index]
	}
	host = strings.TrimPrefix(host, "www.")
	if host == "" || strings.EqualFold(host, siteHost) {
		return ""
	}
	if len(host) > 100 {
		host = host[:100]
	}
	return host
}

// ---- PDF → Markdown → 翻译 ----

func pdfServiceError(c *gin.Context, err error) {
	switch {
	case errors.Is(err, pdfjob.ErrInvalidPDF), errors.Is(err, pdfjob.ErrTooManyPages):
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	case errors.Is(err, pdfjob.ErrTooLarge):
		c.JSON(http.StatusRequestEntityTooLarge, gin.H{"error": err.Error()})
	case errors.Is(err, pdfjob.ErrQuotaExceeded), errors.Is(err, pdfjob.ErrTranslateQuota),
		errors.Is(err, pdfjob.ErrIPDailyQuota), errors.Is(err, pdfjob.ErrTooManyActive):
		c.JSON(http.StatusTooManyRequests, gin.H{"error": err.Error()})
	case errors.Is(err, pdfjob.ErrJobNotFound):
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
	case errors.Is(err, pdfjob.ErrInvalidState), errors.Is(err, pdfjob.ErrMarkdownNotReady):
		c.JSON(http.StatusConflict, gin.H{"error": err.Error()})
	case errors.Is(err, pdfjob.ErrNoTranslator):
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": err.Error()})
	default:
		c.JSON(http.StatusInternalServerError, gin.H{"error": "服务暂时不可用"})
	}
}

func (h *handler) pdfCreateJob(c *gin.Context) {
	if h.pdfJobs == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "PDF 解析服务未配置"})
		return
	}
	c.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, h.pdfJobs.MaxUploadBytes())
	fileHeader, err := c.FormFile("file")
	if err != nil {
		var maxBytesErr *http.MaxBytesError
		if errors.As(err, &maxBytesErr) {
			c.JSON(http.StatusRequestEntityTooLarge, gin.H{"error": pdfjob.ErrTooLarge.Error()})
			return
		}
		c.JSON(http.StatusBadRequest, gin.H{"error": "请选择 PDF 文件"})
		return
	}
	pages := 0
	if value, err := strconv.Atoi(c.PostForm("pages")); err == nil && value > 0 {
		pages = value
	}
	file, err := fileHeader.Open()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "无法读取上传的文件"})
		return
	}
	defer file.Close()

	job, err := h.pdfJobs.Create(c.Request.Context(), pdfjob.HashIP(c.ClientIP()), fileHeader.Filename, pages, file)
	if err != nil {
		pdfServiceError(c, err)
		return
	}
	c.JSON(http.StatusCreated, job)
}

func (h *handler) pdfGetJob(c *gin.Context) {
	if h.pdfJobs == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "PDF 解析服务未配置"})
		return
	}
	view, err := h.pdfJobs.Get(c.Param("id"))
	if err != nil {
		pdfServiceError(c, err)
		return
	}
	c.JSON(http.StatusOK, view)
}

func (h *handler) pdfJobMarkdown(c *gin.Context) {
	if h.pdfJobs == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "PDF 解析服务未配置"})
		return
	}
	variant := c.DefaultQuery("variant", "original")
	markdown, fileName, err := h.pdfJobs.Markdown(c.Param("id"), variant)
	if err != nil {
		pdfServiceError(c, err)
		return
	}
	c.Header("Content-Disposition", fmt.Sprintf("attachment; filename=%q", fileName))
	c.Data(http.StatusOK, "text/markdown; charset=utf-8", []byte(markdown))
}

func (h *handler) pdfTranslateJob(c *gin.Context) {
	if h.pdfJobs == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "PDF 解析服务未配置"})
		return
	}
	var input struct {
		TranslateReferences bool `json:"translate_references"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		// body 可选，缺省按不翻译 References 处理。
		input.TranslateReferences = false
	}
	if err := h.pdfJobs.StartTranslate(pdfjob.HashIP(c.ClientIP()), c.Param("id"), input.TranslateReferences); err != nil {
		pdfServiceError(c, err)
		return
	}
	view, err := h.pdfJobs.Get(c.Param("id"))
	if err != nil {
		pdfServiceError(c, err)
		return
	}
	c.JSON(http.StatusAccepted, view)
}

func spaHandler(frontendDir string) gin.HandlerFunc {
	root, err := filepath.Abs(frontendDir)
	if err != nil {
		root = frontendDir
	}
	indexPath := filepath.Join(root, "index.html")

	return func(c *gin.Context) {
		if strings.HasPrefix(c.Request.URL.Path, "/api/") {
			c.JSON(http.StatusNotFound, gin.H{"error": "not found"})
			return
		}
		if c.Request.Method != http.MethodGet && c.Request.Method != http.MethodHead {
			c.Status(http.StatusNotFound)
			return
		}

		requestPath := strings.TrimPrefix(filepath.Clean("/"+c.Request.URL.Path), string(filepath.Separator))
		candidate := filepath.Join(root, filepath.FromSlash(requestPath))
		relative, relErr := filepath.Rel(root, candidate)
		if relErr == nil && relative != ".." && !strings.HasPrefix(relative, ".."+string(filepath.Separator)) {
			if info, statErr := os.Stat(candidate); statErr == nil && !info.IsDir() {
				if strings.HasPrefix(c.Request.URL.Path, "/assets/") {
					c.Header("Cache-Control", "public, max-age=604800, immutable")
				}
				c.File(candidate)
				return
			}
		}

		c.Header("Cache-Control", "no-cache")
		c.File(indexPath)
	}
}

func (h *handler) health(c *gin.Context) {
	ctx := c.Request.Context()
	if err := h.store.Ping(ctx); err != nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{"status": "unhealthy"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "ok", "time": time.Now().UTC()})
}

func (h *handler) tools(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"items": toolCatalog})
}

func (h *handler) toolOpened(c *gin.Context) {
	var input struct {
		Slug string `json:"slug" binding:"required"`
	}
	if err := c.ShouldBindJSON(&input); err != nil || !validSlug.MatchString(input.Slug) || !isKnownTool(input.Slug) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid tool slug"})
		return
	}
	if err := h.store.RecordToolOpened(c.Request.Context(), input.Slug); err != nil {
		h.logger.Error("record tool event", "error", err, "slug", input.Slug)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not record event"})
		return
	}
	c.Status(http.StatusNoContent)
}

func isKnownTool(slug string) bool {
	for _, item := range toolCatalog {
		if item.Slug == slug && item.Ready {
			return true
		}
	}
	return false
}

func requestLogger(logger *slog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		started := time.Now()
		c.Next()
		logger.Info("http request",
			"method", c.Request.Method,
			"path", c.Request.URL.Path,
			"status", c.Writer.Status(),
			"duration_ms", time.Since(started).Milliseconds(),
		)
	}
}
