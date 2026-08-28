package httpapi

import (
	"log/slog"
	"net/http"
	"regexp"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sakurano/sakura-tools/backend/internal/store"
)

var validSlug = regexp.MustCompile(`^[a-z0-9-]{1,48}$`)

type handler struct {
	store  *store.Store
	logger *slog.Logger
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
	{Slug: "translate", Name: "在线翻译", Category: "文本", Ready: false},
	{Slug: "markdown", Name: "Markdown 编辑器", Category: "文本", Ready: false},
	{Slug: "image", Name: "图片处理", Category: "图像", Ready: false},
	{Slug: "pdf", Name: "PDF 工具", Category: "文档", Ready: false},
	{Slug: "pixel-beads", Name: "像素拼豆图纸", Category: "图像", Ready: false},
	{Slug: "color", Name: "颜色工具", Category: "开发", Ready: false},
}

func NewRouter(s *store.Store, logger *slog.Logger, mode string) http.Handler {
	gin.SetMode(mode)
	router := gin.New()
	router.Use(gin.Recovery(), requestLogger(logger))
	h := &handler{store: s, logger: logger}

	api := router.Group("/api/v1")
	api.GET("/health", h.health)
	api.GET("/tools", h.tools)
	api.POST("/events/tool-opened", h.toolOpened)

	return router
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
