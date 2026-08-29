package httpapi

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sakurano/sakura-tools/backend/internal/store"
	"github.com/sakurano/sakura-tools/backend/internal/translation"
)

var validSlug = regexp.MustCompile(`^[a-z0-9-]{1,48}$`)

type handler struct {
	store             *store.Store
	logger            *slog.Logger
	translator        *translation.Service
	translationMu     sync.Mutex
	translationLimits map[string]translationWindow
}

type translationWindow struct {
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
}

func NewRouter(s *store.Store, logger *slog.Logger, mode, frontendDir string, translator *translation.Service) http.Handler {
	gin.SetMode(mode)
	router := gin.New()
	if err := router.SetTrustedProxies([]string{"127.0.0.1", "::1"}); err != nil {
		panic(err)
	}
	router.Use(gin.Recovery(), requestLogger(logger))
	h := &handler{store: s, logger: logger, translator: translator, translationLimits: make(map[string]translationWindow)}

	api := router.Group("/api/v1")
	api.GET("/health", h.health)
	api.GET("/tools", h.tools)
	api.POST("/events/tool-opened", h.toolOpened)
	api.POST("/translate", h.translate)
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
		h.translationLimits[clientIP] = translationWindow{started: now, count: 1}
		return true
	}
	if window.count >= 20 {
		return false
	}
	window.count++
	h.translationLimits[clientIP] = window
	return true
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
