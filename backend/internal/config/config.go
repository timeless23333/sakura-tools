package config

import (
	"os"
	"strconv"
)

type Config struct {
	Address          string
	DatabasePath     string
	FrontendDir      string
	Mode             string
	DeepLAPIKey      string
	DeepLEndpoint    string
	MyMemoryEmail    string
	MyMemoryEndpoint string
	// AdminToken 保护 /api/v1/admin/*；为空表示管理接口整体停用。
	AdminToken string
	// RawRetentionDays 是 analytics 原始事件保留天数（聚合数据不受影响）。
	RawRetentionDays int

	// PaddleOCR 文档解析服务（PDF → Markdown）。Token 仅存于服务器环境变量。
	PaddleOCRBaseURL string
	PaddleOCRToken   string
	PaddleOCRModel   string

	// AI 翻译服务（OpenAI-compatible 接口，Markdown → 中文）。
	TranslateBaseURL string
	TranslateAPIKey  string
	TranslateModel   string

	// PDF 任务限制。
	PDFMaxSizeMB          int
	PDFMaxPages           int
	PDFOCRDailyQuota      int
	PDFTranslateDailyQuota int
	PDFJobTTLHours        int
}

func Load() Config {
	return Config{
		Address:          envOr("APP_ADDRESS", ":8080"),
		DatabasePath:     envOr("DATABASE_PATH", "./data/sakura-tools.db"),
		FrontendDir:      envOr("FRONTEND_DIR", "../frontend/dist"),
		Mode:             envOr("GIN_MODE", "release"),
		DeepLAPIKey:      os.Getenv("DEEPL_API_KEY"),
		DeepLEndpoint:    os.Getenv("DEEPL_ENDPOINT"),
		MyMemoryEmail:    os.Getenv("MYMEMORY_EMAIL"),
		MyMemoryEndpoint: os.Getenv("MYMEMORY_ENDPOINT"),
		AdminToken:       os.Getenv("ANALYTICS_ADMIN_TOKEN"),
		RawRetentionDays: envIntOr("ANALYTICS_RAW_RETENTION_DAYS", 14),

		PaddleOCRBaseURL: os.Getenv("PADDLEOCR_API_BASE"),
		PaddleOCRToken:   os.Getenv("PADDLEOCR_API_TOKEN"),
		PaddleOCRModel:   os.Getenv("PADDLEOCR_MODEL"),

		TranslateBaseURL: os.Getenv("TRANSLATION_API_BASE"),
		TranslateAPIKey:  os.Getenv("TRANSLATION_API_KEY"),
		TranslateModel:   os.Getenv("TRANSLATION_MODEL"),

		PDFMaxSizeMB:           envIntOr("PDF_MAX_SIZE_MB", 18),
		PDFMaxPages:            envIntOr("PDF_MAX_PAGES", 100),
		PDFOCRDailyQuota:       envIntOr("PDF_OCR_DAILY_QUOTA", 100),
		PDFTranslateDailyQuota: envIntOr("PDF_TRANSLATE_DAILY_QUOTA", 100),
		PDFJobTTLHours:         envIntOr("PDF_JOB_TTL_HOURS", 24),
	}
}

func envIntOr(name string, fallback int) int {
	if value := os.Getenv(name); value != "" {
		if parsed, err := strconv.Atoi(value); err == nil && parsed > 0 {
			return parsed
		}
	}
	return fallback
}

func envOr(name, fallback string) string {
	if value := os.Getenv(name); value != "" {
		return value
	}
	return fallback
}
