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
