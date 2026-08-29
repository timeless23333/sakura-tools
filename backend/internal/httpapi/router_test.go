package httpapi

import (
	"encoding/json"
	"io"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/sakurano/sakura-tools/backend/internal/store"
	"github.com/sakurano/sakura-tools/backend/internal/translation"
)

func TestHealthAndTools(t *testing.T) {
	s, err := store.Open(filepath.Join(t.TempDir(), "test.db"))
	if err != nil {
		t.Fatal(err)
	}
	defer s.Close()

	frontendDir := t.TempDir()
	if err := os.WriteFile(filepath.Join(frontendDir, "index.html"), []byte("<main>Sakura SPA</main>"), 0o600); err != nil {
		t.Fatal(err)
	}
	router := NewRouter(s, slog.New(slog.NewTextHandler(io.Discard, nil)), "test", frontendDir, translation.New(translation.Config{}))

	for _, path := range []string{"/api/v1/health", "/api/v1/tools"} {
		request := httptest.NewRequest(http.MethodGet, path, nil)
		response := httptest.NewRecorder()
		router.ServeHTTP(response, request)
		if response.Code != http.StatusOK {
			t.Fatalf("%s: expected 200, got %d", path, response.Code)
		}
	}

	request := httptest.NewRequest(http.MethodGet, "/api/v1/tools", nil)
	response := httptest.NewRecorder()
	router.ServeHTTP(response, request)
	var body struct {
		Items []tool `json:"items"`
	}
	if err := json.Unmarshal(response.Body.Bytes(), &body); err != nil {
		t.Fatal(err)
	}
	if len(body.Items) != 10 {
		t.Fatalf("expected 10 tools, got %d", len(body.Items))
	}

	spaRequest := httptest.NewRequest(http.MethodGet, "/tools/json", nil)
	spaResponse := httptest.NewRecorder()
	router.ServeHTTP(spaResponse, spaRequest)
	if spaResponse.Code != http.StatusOK || !strings.Contains(spaResponse.Body.String(), "Sakura SPA") {
		t.Fatalf("expected SPA fallback, got status %d and body %q", spaResponse.Code, spaResponse.Body.String())
	}

	apiRequest := httptest.NewRequest(http.MethodGet, "/api/v1/missing", nil)
	apiResponse := httptest.NewRecorder()
	router.ServeHTTP(apiResponse, apiRequest)
	if apiResponse.Code != http.StatusNotFound || strings.Contains(apiResponse.Body.String(), "Sakura SPA") {
		t.Fatalf("unknown API route must not return the SPA")
	}
}

func TestTranslateEndpoint(t *testing.T) {
	upstream := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]any{"responseData": map[string]string{"translatedText": "你好"}})
	}))
	defer upstream.Close()

	s, err := store.Open(filepath.Join(t.TempDir(), "test.db"))
	if err != nil {
		t.Fatal(err)
	}
	defer s.Close()
	router := NewRouter(
		s,
		slog.New(slog.NewTextHandler(io.Discard, nil)),
		"test",
		t.TempDir(),
		translation.New(translation.Config{MyMemoryEndpoint: upstream.URL}),
	)
	request := httptest.NewRequest(http.MethodPost, "/api/v1/translate", strings.NewReader(`{"text":"hello","source_lang":"en","target_lang":"zh-CN"}`))
	request.Header.Set("Content-Type", "application/json")
	response := httptest.NewRecorder()
	router.ServeHTTP(response, request)
	if response.Code != http.StatusOK || !strings.Contains(response.Body.String(), "你好") {
		t.Fatalf("expected translated response, got status %d and body %q", response.Code, response.Body.String())
	}
}
