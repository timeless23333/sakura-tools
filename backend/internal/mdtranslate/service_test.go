package mdtranslate

import (
	"context"
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestSplitSegmentsKeepsCodeAndMathVerbatim(t *testing.T) {
	markdown := strings.Join([]string{
		"# Title",
		"",
		"Intro paragraph with inline $x^2$ formula.",
		"",
		"```python",
		"print('keep me')",
		"```",
		"",
		"$$",
		"\\int_0^1 f(x) dx",
		"$$",
		"",
		"| A | B |",
		"| --- | --- |",
		"| 1 | 2 |",
		"",
		"## References",
		"",
		"[1] Some Citation, 2024.",
	}, "\n")

	segments := splitSegments(markdown, false)
	verbatim := 0
	for _, seg := range segments {
		switch seg.kind {
		case segmentVerbatim:
			verbatim++
			if strings.Contains(seg.content, "translated") {
				t.Fatal("verbatim segment must stay intact")
			}
		case segmentText:
			if strings.Contains(seg.content, "print('keep me')") {
				t.Fatal("code fence must be verbatim, not text")
			}
		}
	}
	if verbatim != 3 { // 代码块、公式块、References 尾段
		t.Fatalf("expected 3 verbatim segments, got %d", verbatim)
	}

	// 表格行必须整体在同一个 segment 中，不会行中断开。
	tableFound := false
	for _, seg := range segments {
		if seg.kind == segmentText && strings.Contains(seg.content, "| A | B |") {
			tableFound = true
			if !strings.Contains(seg.content, "| 1 | 2 |") {
				t.Fatal("table rows must stay in one segment")
			}
		}
	}
	if !tableFound {
		t.Fatal("table segment missing")
	}
}

func TestImageOnlyHtmlStaysVerbatim(t *testing.T) {
	imageLine := `<div style="text-align: center;"><img src="https://cdn.example/a.jpg?authorization=bce-auth-v1%2Fx" alt="Image" width="36%" /></div>`
	captionLine := `<div style="text-align: center;"><div style="text-align: center;">(a) SportsMOT中的篮球</div></div>`
	markdown := strings.Join([]string{"# Figures", "", imageLine, "", captionLine}, "\n")

	units := groupUnits(splitSegments(markdown, false), 4000)
	var imageUnit, captionUnit *unit
	for i := range units {
		if strings.Contains(units[i].content, "<img") {
			imageUnit = &units[i]
		}
		if strings.Contains(units[i].content, "篮球") {
			captionUnit = &units[i]
		}
	}
	if imageUnit == nil || !imageUnit.verbatim {
		t.Fatalf("image-only html must be verbatim, units=%+v", units)
	}
	if !strings.Contains(imageUnit.content, "bce-auth-v1%2Fx") {
		t.Fatal("image url must stay intact")
	}
	if captionUnit == nil || captionUnit.verbatim {
		t.Fatal("caption text must remain translatable")
	}
}

func TestReferencesPassthroughByDefault(t *testing.T) {
	markdown := "# Paper\n\nBody.\n\n## References\n\n[1] Doe J. Something. 2024."
	units := groupUnits(splitSegments(markdown, false), 4000)
	last := units[len(units)-1]
	if !last.verbatim || !strings.Contains(last.content, "[1] Doe J. Something. 2024.") {
		t.Fatalf("references must be verbatim by default, got %+v", last)
	}

	units = groupUnits(splitSegments(markdown, true), 4000)
	for _, unit := range units {
		if unit.verbatim {
			t.Fatal("translateReferences=true must not keep verbatim units")
		}
	}
}

func TestTranslateMarkdownMergesInOrder(t *testing.T) {
	var authHeader string
	requests := 0
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		authHeader = r.Header.Get("Authorization")
		requests++
		var payload struct {
			Model    string `json:"model"`
			Messages []struct {
				Role    string `json:"role"`
				Content string `json:"content"`
			} `json:"messages"`
		}
		raw, _ := io.ReadAll(r.Body)
		if err := json.Unmarshal(raw, &payload); err != nil {
			t.Errorf("bad request: %v", err)
		}
		if len(payload.Messages) != 2 || payload.Messages[0].Role != "system" {
			t.Error("expected system + user messages")
		}
		reply := strings.ReplaceAll(payload.Messages[1].Content, "hello", "你好")
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]any{
			"choices": []map[string]any{{"message": map[string]string{"role": "assistant", "content": reply}}},
		})
	}))
	defer server.Close()

	service := New(server.URL, "test-key", "test-model")
	markdown := strings.Join([]string{
		"# hello world",
		"",
		"First paragraph says hello.",
		"",
		"```go",
		"println(\"hello\")",
		"```",
		"",
		"## Another",
		"",
		"Second paragraph says hello too.",
	}, "\n")

	var progressCalls int
	translated, err := service.TranslateMarkdown(context.Background(), markdown, false,
		func(done, total int, section string) {
			progressCalls++
			if done > total {
				t.Errorf("progress out of range: %d/%d", done, total)
			}
		})
	if err != nil {
		t.Fatal(err)
	}
	if authHeader != "Bearer test-key" {
		t.Fatalf("expected bearer auth, got %q", authHeader)
	}
	if !strings.Contains(translated, "println(\"hello\")") {
		t.Fatal("code block must survive translation unchanged")
	}
	if !strings.Contains(translated, "你好 world") || !strings.Contains(translated, "says 你好") {
		t.Fatalf("unexpected translation result: %q", translated)
	}
	order := strings.Index(translated, "## Another")
	code := strings.Index(translated, "println")
	if order < code {
		t.Fatal("translated segments must keep original order")
	}
	if progressCalls == 0 {
		t.Fatal("progress callback expected")
	}
	if requests < 2 {
		t.Fatalf("expected at least 2 LLM calls (code block excluded), got %d", requests)
	}
}

func TestTranslateRetriesOn429(t *testing.T) {
	attempts := 0
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		attempts++
		if attempts == 1 {
			w.Header().Set("Retry-After", "1")
			w.WriteHeader(http.StatusTooManyRequests)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]any{
			"choices": []map[string]any{{"message": map[string]string{"role": "assistant", "content": "你好"}}},
		})
	}))
	defer server.Close()

	service := New(server.URL, "k", "m")
	translated, err := service.TranslateMarkdown(context.Background(), "hello", false, nil)
	if err != nil {
		t.Fatal(err)
	}
	if translated != "你好" {
		t.Fatalf("unexpected translation %q", translated)
	}
	if attempts != 2 {
		t.Fatalf("expected retry after 429, attempts=%d", attempts)
	}
}
