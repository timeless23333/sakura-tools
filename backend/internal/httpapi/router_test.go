package httpapi

import (
	"encoding/json"
	"io"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"testing"

	"github.com/sakurano/sakura-tools/backend/internal/store"
)

func TestHealthAndTools(t *testing.T) {
	s, err := store.Open(filepath.Join(t.TempDir(), "test.db"))
	if err != nil {
		t.Fatal(err)
	}
	defer s.Close()

	router := NewRouter(s, slog.New(slog.NewTextHandler(io.Discard, nil)), "test")

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
	var body struct{ Items []tool `json:"items"` }
	if err := json.Unmarshal(response.Body.Bytes(), &body); err != nil {
		t.Fatal(err)
	}
	if len(body.Items) != 10 {
		t.Fatalf("expected 10 tools, got %d", len(body.Items))
	}
}
