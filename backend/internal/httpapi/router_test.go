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

	"github.com/sakurano/sakura-tools/backend/internal/analytics"
	"github.com/sakurano/sakura-tools/backend/internal/store"
	"github.com/sakurano/sakura-tools/backend/internal/translation"
)

func newTestRouter(t *testing.T, frontendDir string, adminToken string, translator *translation.Service) http.Handler {
	t.Helper()
	s, err := store.Open(filepath.Join(t.TempDir(), "test.db"))
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() { s.Close() })
	an, err := analytics.New(t.Context(), s.DB(), slog.New(slog.NewTextHandler(io.Discard, nil)))
	if err != nil {
		t.Fatal(err)
	}
	return NewRouter(s, slog.New(slog.NewTextHandler(io.Discard, nil)), "test", frontendDir, translator, an, nil, adminToken)
}

func TestHealthAndTools(t *testing.T) {
	frontendDir := t.TempDir()
	if err := os.WriteFile(filepath.Join(frontendDir, "index.html"), []byte("<main>Sakura SPA</main>"), 0o600); err != nil {
		t.Fatal(err)
	}
	router := newTestRouter(t, frontendDir, "test-token", translation.New(translation.Config{}))

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
	if len(body.Items) != 11 {
		t.Fatalf("expected 11 tools, got %d", len(body.Items))
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

	router := newTestRouter(t, t.TempDir(), "test-token", translation.New(translation.Config{MyMemoryEndpoint: upstream.URL}))
	request := httptest.NewRequest(http.MethodPost, "/api/v1/translate", strings.NewReader(`{"text":"hello","source_lang":"en","target_lang":"zh-CN"}`))
	request.Header.Set("Content-Type", "application/json")
	response := httptest.NewRecorder()
	router.ServeHTTP(response, request)
	if response.Code != http.StatusOK || !strings.Contains(response.Body.String(), "你好") {
		t.Fatalf("expected translated response, got status %d and body %q", response.Code, response.Body.String())
	}
}

func postEvent(t *testing.T, router http.Handler, body, userAgent string) *httptest.ResponseRecorder {
	t.Helper()
	request := httptest.NewRequest(http.MethodPost, "/api/v1/analytics/collect", strings.NewReader(body))
	request.Header.Set("Content-Type", "application/json")
	if userAgent != "" {
		request.Header.Set("User-Agent", userAgent)
	}
	response := httptest.NewRecorder()
	router.ServeHTTP(response, request)
	return response
}

func TestAnalyticsCollectAndSummary(t *testing.T) {
	router := newTestRouter(t, t.TempDir(), "secret-token", translation.New(translation.Config{}))

	chromeUA := "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
	if resp := postEvent(t, router, `{"type":"page_view","path":"/tools/json?utm=x","cid":"visitor-aaaa1111","entry":true,"ref":"https://www.google.com/search?q=x"}`, chromeUA); resp.Code != http.StatusNoContent {
		t.Fatalf("page_view: expected 204, got %d", resp.Code)
	}
	if resp := postEvent(t, router, `{"type":"tool_use","tool":"json","cid":"visitor-aaaa1111"}`, chromeUA); resp.Code != http.StatusNoContent {
		t.Fatalf("tool_use: expected 204, got %d", resp.Code)
	}
	// 第二个访客访问首页。
	if resp := postEvent(t, router, `{"type":"page_view","path":"/","cid":"visitor-bbbb2222","entry":true}`, chromeUA); resp.Code != http.StatusNoContent {
		t.Fatalf("second page_view: expected 204, got %d", resp.Code)
	}

	// Bot UA 只增加 bot_pv，不影响 PV/UV。
	if resp := postEvent(t, router, `{"type":"page_view","path":"/tools/json","cid":"crawler-cccc3333"}`, "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"); resp.Code != http.StatusNoContent {
		t.Fatalf("bot page_view: expected 204, got %d", resp.Code)
	}

	// 非法输入必须被拒绝。
	for name, body := range map[string]string{
		"unknown type":   `{"type":"click","cid":"visitor-aaaa1111"}`,
		"unknown tool":   `{"type":"tool_use","tool":"nope","cid":"visitor-aaaa1111"}`,
		"missing client": `{"type":"tool_use","tool":"json"}`,
	} {
		if resp := postEvent(t, router, body, chromeUA); resp.Code != http.StatusBadRequest {
			t.Fatalf("%s: expected 400, got %d", name, resp.Code)
		}
	}

	// 未带令牌 → 401；令牌错误 → 401；未配置令牌的实例 → 404。
	noAuth := httptest.NewRequest(http.MethodGet, "/api/v1/admin/analytics/summary?days=7", nil)
	noAuthResp := httptest.NewRecorder()
	router.ServeHTTP(noAuthResp, noAuth)
	if noAuthResp.Code != http.StatusUnauthorized {
		t.Fatalf("summary without token: expected 401, got %d", noAuthResp.Code)
	}
	badAuth := httptest.NewRequest(http.MethodGet, "/api/v1/admin/analytics/summary", nil)
	badAuth.Header.Set("X-Admin-Token", "wrong")
	badAuthResp := httptest.NewRecorder()
	router.ServeHTTP(badAuthResp, badAuth)
	if badAuthResp.Code != http.StatusUnauthorized {
		t.Fatalf("summary with wrong token: expected 401, got %d", badAuthResp.Code)
	}
	disabledRouter := newTestRouter(t, t.TempDir(), "", translation.New(translation.Config{}))
	disabledResp := httptest.NewRecorder()
	disabledRouter.ServeHTTP(disabledResp, httptest.NewRequest(http.MethodGet, "/api/v1/admin/analytics/summary", nil))
	if disabledResp.Code != http.StatusNotFound {
		t.Fatalf("summary when disabled: expected 404, got %d", disabledResp.Code)
	}

	summaryRequest := httptest.NewRequest(http.MethodGet, "/api/v1/admin/analytics/summary?days=7", nil)
	summaryRequest.Header.Set("X-Admin-Token", "secret-token")
	summaryResponse := httptest.NewRecorder()
	router.ServeHTTP(summaryResponse, summaryRequest)
	if summaryResponse.Code != http.StatusOK {
		t.Fatalf("summary: expected 200, got %d", summaryResponse.Code)
	}
	var summary struct {
		Today struct {
			PV          int64 `json:"pv"`
			UV          int64 `json:"uv"`
			ToolUse     int64 `json:"tool_use"`
			NewVisitors int64 `json:"new_visitors"`
			BotPV       int64 `json:"bot_pv"`
		} `json:"today"`
		Range struct {
			PV      int64 `json:"pv"`
			UV      int64 `json:"uv"`
			ToolUse int64 `json:"tool_use"`
			BotPV   int64 `json:"bot_pv"`
		} `json:"range"`
		Trend    []struct{ Day string } `json:"trend"`
		TopTools []struct {
			Slug string `json:"slug"`
			Name string `json:"name"`
			PV   int64  `json:"pv"`
			UV   int64  `json:"uv"`
			Uses int64  `json:"uses"`
		} `json:"top_tools"`
		TopPages  []struct{ Name string } `json:"top_pages"`
		Referrers []struct {
			Name  string `json:"name"`
			Count int64  `json:"count"`
		} `json:"referrers"`
		Devices []struct {
			Name  string `json:"name"`
			Count int64  `json:"count"`
		} `json:"devices"`
	}
	if err := json.Unmarshal(summaryResponse.Body.Bytes(), &summary); err != nil {
		t.Fatal(err)
	}

	if summary.Today.PV != 2 || summary.Today.UV != 2 || summary.Today.ToolUse != 1 || summary.Today.NewVisitors != 2 || summary.Today.BotPV != 1 {
		t.Fatalf("unexpected today stats: %+v", summary.Today)
	}
	if summary.Range.PV != 2 || summary.Range.UV != 2 || summary.Range.ToolUse != 1 || summary.Range.BotPV != 1 {
		t.Fatalf("unexpected range stats: %+v", summary.Range)
	}
	if len(summary.Trend) != 30 {
		t.Fatalf("expected 30 trend points, got %d", len(summary.Trend))
	}
	if len(summary.TopTools) != 1 || summary.TopTools[0].Slug != "json" || summary.TopTools[0].Name != "JSON 格式化" ||
		summary.TopTools[0].PV != 1 || summary.TopTools[0].UV != 1 || summary.TopTools[0].Uses != 1 {
		t.Fatalf("unexpected top tools: %+v", summary.TopTools)
	}
	if len(summary.TopPages) != 2 {
		t.Fatalf("unexpected top pages: %+v", summary.TopPages)
	}
	seenPaths := map[string]bool{}
	for _, page := range summary.TopPages {
		seenPaths[page.Name] = true
	}
	if !seenPaths["/"] || !seenPaths["/tools/json"] {
		t.Fatalf("unexpected top pages: %+v", summary.TopPages)
	}
	if len(summary.Referrers) != 1 || summary.Referrers[0].Name != "google.com" || summary.Referrers[0].Count != 1 {
		t.Fatalf("unexpected referrers: %+v", summary.Referrers)
	}
	if len(summary.Devices) != 1 || summary.Devices[0].Name != "desktop" || summary.Devices[0].Count != 2 {
		t.Fatalf("unexpected devices: %+v", summary.Devices)
	}
}
