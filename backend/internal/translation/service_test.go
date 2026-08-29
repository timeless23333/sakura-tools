package translation

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestDeepLTranslation(t *testing.T) {
	upstream := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if got := r.Header.Get("Authorization"); got != "DeepL-Auth-Key secret:fx" {
			t.Fatalf("unexpected authorization header %q", got)
		}
		var body map[string]any
		if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
			t.Fatal(err)
		}
		if body["target_lang"] != "ZH-HANS" {
			t.Fatalf("unexpected target language %v", body["target_lang"])
		}
		if _, exists := body["source_lang"]; exists {
			t.Fatal("auto source must be omitted for DeepL")
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]any{"translations": []map[string]string{{
			"text": "你好", "detected_source_language": "EN",
		}}})
	}))
	defer upstream.Close()

	service := New(Config{DeepLAPIKey: "secret:fx", DeepLEndpoint: upstream.URL})
	result, err := service.Translate(context.Background(), Request{Text: "hello", SourceLang: "auto", TargetLang: "zh-CN"})
	if err != nil {
		t.Fatal(err)
	}
	if result.Text != "你好" || result.DetectedSource != "en" || result.Provider != "DeepL" {
		t.Fatalf("unexpected result %#v", result)
	}
}

func TestMyMemoryTranslationAndChunking(t *testing.T) {
	requests := 0
	upstream := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		requests++
		if r.URL.Query().Get("langpair") != "en|zh-CN" {
			t.Fatalf("unexpected language pair %q", r.URL.Query().Get("langpair"))
		}
		json.NewEncoder(w).Encode(map[string]any{"responseData": map[string]string{
			"translatedText": strings.ToUpper(r.URL.Query().Get("q")),
		}})
	}))
	defer upstream.Close()

	service := New(Config{MyMemoryEndpoint: upstream.URL})
	result, err := service.Translate(context.Background(), Request{
		Text: strings.Repeat("a", 460), SourceLang: "en", TargetLang: "zh-CN",
	})
	if err != nil {
		t.Fatal(err)
	}
	if requests != 2 || len(result.Text) != 460 || result.Provider != "MyMemory" {
		t.Fatalf("unexpected translation result %#v after %d requests", result, requests)
	}
}

func TestSplitTextRejectsTooManyChunks(t *testing.T) {
	_, err := splitText(strings.Repeat("界", 3000), myMemoryChunkBytes, myMemoryMaxChunks)
	if err == nil {
		t.Fatal("expected oversized MyMemory input to be rejected")
	}
}
