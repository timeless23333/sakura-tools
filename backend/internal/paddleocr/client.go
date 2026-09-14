// Package paddleocr 封装 PaddleOCR（AI Studio 星河社区）文档解析服务的异步 API。
// 协议参考：https://ai.baidu.com/ai-doc/AISTUDIO/Mml7n69e7
//   - 提交任务：POST {base}/api/v2/ocr/jobs（multipart: file / model / optionalPayload）
//   - 轮询任务：GET  {base}/api/v2/ocr/jobs/{jobId}（state: pending|running|done|failed）
//   - 结果：resultUrl.jsonUrl 返回 JSONL，逐页含 layoutParsingResults[].markdown.text
//
// API Token 只存在于本包与服务器环境变量，绝不写入日志或响应。
package paddleocr

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"strconv"
	"strings"
	"time"
)

const (
	DefaultBaseURL = "https://paddleocr.aistudio-app.com"
	DefaultModel   = "PP-StructureV3"
)

// 服务端业务错误码（HTTP 200 envelope 内返回）。
const (
	codeDailyQuota  = 12001 // 当日页数配额用尽
	codeRateLimited = 12002 // 触发限流
)

var (
	ErrAuth      = errors.New("paddleocr: invalid access token")
	ErrRateLimit = errors.New("paddleocr: rate limited")
	ErrQuota     = errors.New("paddleocr: daily page quota exhausted")
)

type Client struct {
	baseURL string
	token   string
	model   string
	http    *http.Client
}

func New(baseURL, token, model string) *Client {
	if baseURL == "" {
		baseURL = DefaultBaseURL
	}
	if model == "" {
		model = DefaultModel
	}
	return &Client{
		baseURL: strings.TrimRight(baseURL, "/"),
		token:   token,
		model:   model,
		http:    &http.Client{},
	}
}

// JobStatus 是一次轮询返回的任务状态快照。
type JobStatus struct {
	State          string // pending | running | done | failed
	ErrorMsg       string
	TotalPages     int
	ExtractedPages int
	Markdown       string // 仅 done 时填充
}

type envelope struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
	Data struct {
		JobID           string `json:"jobId"`
		State           string `json:"state"`
		ErrorMsg        string `json:"errorMsg"`
		ExtractProgress struct {
			TotalPages     int `json:"totalPages"`
			ExtractedPages int `json:"extractedPages"`
		} `json:"extractProgress"`
		ResultURL struct {
			JSONURL     string `json:"jsonUrl"`
			MarkdownURL string `json:"markdownUrl"`
		} `json:"resultUrl"`
	} `json:"data"`
}

// SubmitJob 上传 PDF 并创建解析任务，返回服务端 jobId。
func (c *Client) SubmitJob(ctx context.Context, fileName string, r io.Reader) (string, error) {
	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)
	part, err := writer.CreateFormFile("file", fileName)
	if err != nil {
		return "", err
	}
	if _, err := io.Copy(part, r); err != nil {
		return "", err
	}
	if err := writer.WriteField("model", c.model); err != nil {
		return "", err
	}
	optional, _ := json.Marshal(map[string]bool{
		"useDocOrientationClassify": false,
		"useDocUnwarping":           false,
		"useChartRecognition":       false,
	})
	if err := writer.WriteField("optionalPayload", string(optional)); err != nil {
		return "", err
	}
	if err := writer.Close(); err != nil {
		return "", err
	}

	uploadCtx, cancel := context.WithTimeout(ctx, 120*time.Second)
	defer cancel()
	req, err := http.NewRequestWithContext(uploadCtx, http.MethodPost,
		c.baseURL+"/api/v2/ocr/jobs", body)
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", writer.FormDataContentType())
	req.Header.Set("Authorization", "Bearer "+c.token)

	respBody, err := c.doWithRetry(uploadCtx, req)
	if err != nil {
		return "", err
	}
	var env envelope
	if err := json.Unmarshal(respBody, &env); err != nil {
		return "", fmt.Errorf("paddleocr: decode submit response: %w", err)
	}
	if env.Code != 0 || env.Data.JobID == "" {
		return "", businessError(env.Code, env.Msg)
	}
	return env.Data.JobID, nil
}

// PollJob 查询一次任务状态；任务 done 时下载结果并拼接 Markdown。
func (c *Client) PollJob(ctx context.Context, jobID string) (JobStatus, error) {
	pollCtx, cancel := context.WithTimeout(ctx, 30*time.Second)
	defer cancel()
	req, err := http.NewRequestWithContext(pollCtx, http.MethodGet,
		c.baseURL+"/api/v2/ocr/jobs/"+jobID, nil)
	if err != nil {
		return JobStatus{}, err
	}
	req.Header.Set("Authorization", "Bearer "+c.token)

	respBody, err := c.doWithRetry(pollCtx, req)
	if err != nil {
		return JobStatus{}, err
	}
	var env envelope
	if err := json.Unmarshal(respBody, &env); err != nil {
		return JobStatus{}, fmt.Errorf("paddleocr: decode poll response: %w", err)
	}
	if env.Code != 0 {
		return JobStatus{}, businessError(env.Code, env.Msg)
	}
	status := JobStatus{
		State:          env.Data.State,
		ErrorMsg:       env.Data.ErrorMsg,
		TotalPages:     env.Data.ExtractProgress.TotalPages,
		ExtractedPages: env.Data.ExtractProgress.ExtractedPages,
	}
	if status.State != "done" {
		return status, nil
	}
	if status.Markdown, err = c.fetchMarkdown(pollCtx, env.Data.ResultURL.JSONURL, env.Data.ResultURL.MarkdownURL); err != nil {
		return JobStatus{}, err
	}
	return status, nil
}

// fetchMarkdown 优先解析 JSONL（文档明确给出的结果格式），失败时回退 markdownUrl 纯文本。
func (c *Client) fetchMarkdown(ctx context.Context, jsonURL, markdownURL string) (string, error) {
	if jsonURL != "" {
		if md, err := c.fetchAndJoinJSONL(ctx, jsonURL); err == nil {
			return md, nil
		}
	}
	if markdownURL != "" {
		raw, err := c.fetchRaw(ctx, markdownURL)
		if err != nil {
			return "", err
		}
		return string(raw), nil
	}
	return "", errors.New("paddleocr: job done but no result url")
}

type jsonlLine struct {
	Result struct {
		LayoutParsingResults []struct {
			Markdown struct {
				Text   string            `json:"text"`
				Images map[string]string `json:"images"`
			} `json:"markdown"`
		} `json:"layoutParsingResults"`
	} `json:"result"`
}

func (c *Client) fetchAndJoinJSONL(ctx context.Context, url string) (string, error) {
	raw, err := c.fetchRaw(ctx, url)
	if err != nil {
		return "", err
	}
	var builder strings.Builder
	for _, line := range strings.Split(strings.TrimSpace(string(raw)), "\n") {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}
		var entry jsonlLine
		if err := json.Unmarshal([]byte(line), &entry); err != nil {
			return "", fmt.Errorf("paddleocr: decode result line: %w", err)
		}
		for _, res := range entry.Result.LayoutParsingResults {
			text := res.Markdown.Text
			// 把图片相对路径重写为结果中给出的可访问 URL。
			for path, imageURL := range res.Markdown.Images {
				text = strings.ReplaceAll(text, path, imageURL)
			}
			if builder.Len() > 0 {
				builder.WriteString("\n\n")
			}
			builder.WriteString(text)
		}
	}
	if builder.Len() == 0 {
		return "", errors.New("paddleocr: empty result")
	}
	return builder.String(), nil
}

func (c *Client) fetchRaw(ctx context.Context, url string) ([]byte, error) {
	fetchCtx, cancel := context.WithTimeout(ctx, 60*time.Second)
	defer cancel()
	req, err := http.NewRequestWithContext(fetchCtx, http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	return c.doWithRetry(fetchCtx, req)
}

// doWithRetry 对 429/5xx/网络错误做最多 3 次指数退避重试（尊重 Retry-After）；
// 401、业务配额错误等不重试。带 body 的请求通过 GetBody 重放。
func (c *Client) doWithRetry(ctx context.Context, req *http.Request) ([]byte, error) {
	var lastErr error
	backoff := time.Second
	for attempt := 0; attempt < 3; attempt++ {
		if attempt > 0 {
			select {
			case <-ctx.Done():
				return nil, ctx.Err()
			case <-time.After(backoff):
			}
			backoff *= 2
			if req.Body != nil {
				if req.GetBody == nil {
					return nil, lastErr
				}
				body, err := req.GetBody()
				if err != nil {
					return nil, err
				}
				req.Body = body
			}
		}
		resp, err := c.http.Do(req)
		if err != nil {
			lastErr = err
			continue
		}
		data, readErr := io.ReadAll(io.LimitReader(resp.Body, 64<<20))
		resp.Body.Close()
		if readErr != nil {
			lastErr = readErr
			continue
		}
		switch {
		case resp.StatusCode == http.StatusUnauthorized:
			return nil, ErrAuth
		case resp.StatusCode == http.StatusTooManyRequests:
			if wait := retryAfter(resp.Header); wait > backoff {
				backoff = wait
			}
			lastErr = ErrRateLimit
			continue
		case resp.StatusCode >= 500:
			lastErr = fmt.Errorf("paddleocr: server error %d", resp.StatusCode)
			continue
		case resp.StatusCode >= 400:
			return nil, fmt.Errorf("paddleocr: http %d", resp.StatusCode)
		}
		return data, nil
	}
	return nil, lastErr
}

func retryAfter(header http.Header) time.Duration {
	value := strings.TrimSpace(header.Get("Retry-After"))
	if seconds, err := strconv.Atoi(value); err == nil && seconds > 0 {
		return min(time.Duration(seconds)*time.Second, 30*time.Second)
	}
	return 0
}

func businessError(code int, msg string) error {
	message := fmt.Sprintf("paddleocr: %s (code %d)", msg, code)
	switch code {
	case codeDailyQuota:
		return fmt.Errorf("%w: %s", ErrQuota, message)
	case codeRateLimited:
		return fmt.Errorf("%w: %s", ErrRateLimit, message)
	default:
		return errors.New(message)
	}
}
