package paddleocr

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync/atomic"
	"testing"
)

func TestSubmitAndPollJob(t *testing.T) {
	var tokenSeen, modelSeen, jsonURL string
	polls := atomic.Int32{}

	mux := http.NewServeMux()
	mux.HandleFunc("POST /api/v2/ocr/jobs", func(w http.ResponseWriter, r *http.Request) {
		tokenSeen = r.Header.Get("Authorization")
		if err := r.ParseMultipartForm(1 << 20); err != nil {
			t.Errorf("multipart parse: %v", err)
		}
		modelSeen = r.FormValue("model")
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"code":0,"msg":"ok","data":{"jobId":"job-1"}}`))
	})
	mux.HandleFunc("GET /api/v2/ocr/jobs/job-1", func(w http.ResponseWriter, r *http.Request) {
		// 第一次轮询 429（验证退避重试），第二次 running，第三次 done。
		switch polls.Add(1) {
		case 1:
			w.Header().Set("Retry-After", "1")
			w.WriteHeader(http.StatusTooManyRequests)
		case 2:
			w.Write([]byte(`{"code":0,"data":{"state":"running","extractProgress":{"totalPages":2,"extractedPages":1}}}`))
		default:
			response, _ := json.Marshal(map[string]any{
				"code": 0,
				"data": map[string]any{
					"state":     "done",
					"resultUrl": map[string]string{"jsonUrl": jsonURL},
				},
			})
			w.Write(response)
		}
	})
	mux.HandleFunc("GET /results/result.jsonl", func(w http.ResponseWriter, r *http.Request) {
		line, _ := json.Marshal(map[string]any{
			"result": map[string]any{
				"layoutParsingResults": []map[string]any{{
					"markdown": map[string]any{
						"text": "# Page 1\n\nsee images/a.png",
						"images": map[string]string{
							"images/a.png": "https://cdn.example/a.png",
						},
					},
				}},
			},
		})
		w.Write(line)
	})
	server := httptest.NewServer(mux)
	defer server.Close()
	jsonURL = server.URL + "/results/result.jsonl"

	client := New(server.URL, "secret-token", "")
	jobID, err := client.SubmitJob(context.Background(), "paper.pdf", strings.NewReader("%PDF-1.4 fake"))
	if err != nil {
		t.Fatal(err)
	}
	if jobID != "job-1" {
		t.Fatalf("unexpected job id %q", jobID)
	}
	if tokenSeen != "Bearer secret-token" {
		t.Fatalf("unexpected auth header %q", tokenSeen)
	}
	if modelSeen != DefaultModel {
		t.Fatalf("unexpected model %q", modelSeen)
	}

	status, err := client.PollJob(context.Background(), jobID)
	if err != nil {
		t.Fatal(err)
	}
	if status.State != "running" || status.TotalPages != 2 || status.ExtractedPages != 1 {
		t.Fatalf("unexpected running status %+v", status)
	}

	status, err = client.PollJob(context.Background(), jobID)
	if err != nil {
		t.Fatal(err)
	}
	if status.State != "done" {
		t.Fatalf("expected done, got %q", status.State)
	}
	if !strings.Contains(status.Markdown, "# Page 1") {
		t.Fatalf("markdown missing: %q", status.Markdown)
	}
	if !strings.Contains(status.Markdown, "https://cdn.example/a.png") {
		t.Fatalf("image path not rewritten: %q", status.Markdown)
	}
}

func TestSubmitRejectsAuthError(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusUnauthorized)
	}))
	defer server.Close()

	client := New(server.URL, "bad", "")
	if _, err := client.SubmitJob(context.Background(), "a.pdf", strings.NewReader("%PDF-")); err == nil {
		t.Fatal("expected auth error")
	}
}
