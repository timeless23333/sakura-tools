package config

import "os"

type Config struct {
	Address      string
	DatabasePath string
	FrontendDir  string
	Mode         string
}

func Load() Config {
	return Config{
		Address:      envOr("APP_ADDRESS", ":8080"),
		DatabasePath: envOr("DATABASE_PATH", "./data/sakura-tools.db"),
		FrontendDir:  envOr("FRONTEND_DIR", "../frontend/dist"),
		Mode:         envOr("GIN_MODE", "release"),
	}
}

func envOr(name, fallback string) string {
	if value := os.Getenv(name); value != "" {
		return value
	}
	return fallback
}
