// Package mdtranslate 提供 Markdown 感知的英→中翻译服务。
//
// 设计：
//   - pdfjob 只依赖本包的 Translator 接口，不绑定具体 AI 供应商；
//   - 第一版 provider 为 OpenAI-compatible /chat/completions；
//   - 分块见 chunk.go：代码/公式/References 不送模型，表格不切断，按原序合并；
//   - 429/5xx 指数退避重试，尊重 Retry-After，不无限重试。
package mdtranslate

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

const (
	maxChunkChars = 4000
	maxAttempts   = 3
)

var ErrTranslationFailed = errors.New("mdtranslate: translation failed")

// Translator 是 pdfjob 依赖的翻译抽象。
type Translator interface {
	TranslateMarkdown(ctx context.Context, markdown string, translateReferences bool, progress func(done, total int, section string)) (string, error)
}

type Service struct {
	baseURL string
	apiKey  string
	model   string
	http    *http.Client
}

// New 创建 OpenAI-compatible 翻译服务；参数来自服务器环境变量。
func New(baseURL, apiKey, model string) *Service {
	return &Service{
		baseURL: strings.TrimRight(baseURL, "/"),
		apiKey:  apiKey,
		model:   model,
		http:    &http.Client{},
	}
}

const systemPrompt = `You are a professional translator for English scientific and technical Markdown documents, translating into Simplified Chinese.

Rules:
1. Translate faithfully. Do not summarize, expand, omit anything, or add any commentary.
2. Preserve the Markdown structure exactly: heading levels, lists, blockquotes, bold/italic markers, tables.
3. Keep unchanged: LaTeX formulas ($...$, $$...$$), code and inline code, URLs, image syntax and links, citation markers such as [1] or [@key], HTML tags.
4. Keep model names, dataset names, person names, algorithm names and other proper nouns in English.
5. Output ONLY the translated Markdown of the given text. No explanations and no code fences around the output.`

// TranslateMarkdown 分块翻译并按原序合并；progress 在每个文本块完成后回调。
func (s *Service) TranslateMarkdown(ctx context.Context, markdown string, translateReferences bool, progress func(done, total int, section string)) (string, error) {
	segments := splitSegments(markdown, translateReferences)
	units := groupUnits(segments, maxChunkChars)

	textTotal := 0
	for i := range units {
		if !units[i].verbatim {
			textTotal++
		}
	}

	outputs := make([]string, 0, len(units))
	done := 0
	for i := range units {
		if units[i].verbatim {
			outputs = append(outputs, units[i].content)
			continue
		}
		translated, err := s.translateChunk(ctx, units[i].content)
		if err != nil {
			return "", err
		}
		outputs = append(outputs, translated)
		done++
		if progress != nil {
			progress(done, textTotal, units[i].section)
		}
	}
	return strings.Join(outputs, "\n\n"), nil
}

type chatRequest struct {
	Model       string        `json:"model"`
	Temperature float64       `json:"temperature"`
	Messages    []chatMessage `json:"messages"`
}

type chatMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type chatResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content"`
		} `json:"message"`
	} `json:"choices"`
	Error *struct {
		Message string `json:"message"`
	} `json:"error"`
}

func (s *Service) translateChunk(ctx context.Context, text string) (string, error) {
	payload, err := json.Marshal(chatRequest{
		Model:       s.model,
		Temperature: 0.1,
		Messages: []chatMessage{
			{Role: "system", Content: systemPrompt},
			{Role: "user", Content: text},
		},
	})
	if err != nil {
		return "", err
	}

	var lastErr error
	backoff := time.Second
	for attempt := 0; attempt < maxAttempts; attempt++ {
		if attempt > 0 {
			select {
			case <-ctx.Done():
				return "", ctx.Err()
			case <-time.After(backoff):
			}
			backoff *= 2
		}
		translated, retryable, err := s.callOnce(ctx, payload)
		if err == nil {
			return translated, nil
		}
		lastErr = err
		if !retryable {
			return "", err
		}
	}
	return "", lastErr
}

func (s *Service) callOnce(ctx context.Context, payload []byte) (string, bool, error) {
	callCtx, cancel := context.WithTimeout(ctx, 180*time.Second)
	defer cancel()
	req, err := http.NewRequestWithContext(callCtx, http.MethodPost, s.baseURL+"/chat/completions", bytes.NewReader(payload))
	if err != nil {
		return "", false, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+s.apiKey)

	resp, err := s.http.Do(req)
	if err != nil {
		return "", true, fmt.Errorf("%w: %v", ErrTranslationFailed, err)
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(io.LimitReader(resp.Body, 16<<20))
	if err != nil {
		return "", true, fmt.Errorf("%w: %v", ErrTranslationFailed, err)
	}

	if resp.StatusCode == http.StatusTooManyRequests {
		return "", true, fmt.Errorf("%w: rate limited (429)", ErrTranslationFailed)
	}
	if resp.StatusCode >= 500 {
		return "", true, fmt.Errorf("%w: provider error %d", ErrTranslationFailed, resp.StatusCode)
	}
	if resp.StatusCode == http.StatusUnauthorized || resp.StatusCode == http.StatusForbidden {
		return "", false, fmt.Errorf("%w: invalid translation API key", ErrTranslationFailed)
	}
	if resp.StatusCode >= 400 {
		return "", false, fmt.Errorf("%w: provider returned %d", ErrTranslationFailed, resp.StatusCode)
	}

	var parsed chatResponse
	if err := json.Unmarshal(body, &parsed); err != nil {
		return "", false, fmt.Errorf("%w: decode response: %v", ErrTranslationFailed, err)
	}
	if parsed.Error != nil && parsed.Error.Message != "" {
		return "", false, fmt.Errorf("%w: %s", ErrTranslationFailed, parsed.Error.Message)
	}
	if len(parsed.Choices) == 0 {
		return "", false, fmt.Errorf("%w: empty response", ErrTranslationFailed)
	}
	content := strings.TrimSpace(parsed.Choices[0].Message.Content)
	content = stripFence(content)
	if content == "" {
		return "", false, fmt.Errorf("%w: empty response", ErrTranslationFailed)
	}
	return content, false, nil
}

// stripFence 去掉个别模型会给输出包上的 ```markdown 围壳。
func stripFence(content string) string {
	if strings.HasPrefix(content, "```markdown\n") && strings.HasSuffix(content, "\n```") {
		return strings.TrimSpace(content[len("```markdown") : len(content)-len("```")])
	}
	return content
}
