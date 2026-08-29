package translation

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"html"
	"io"
	"net/http"
	"net/url"
	"regexp"
	"strings"
	"time"
	"unicode"
	"unicode/utf8"
)

const (
	maxInputCharacters = 5000
	myMemoryChunkBytes = 450
	myMemoryMaxChunks  = 16
)

var ErrInputTooLong = errors.New("translation input is too long")

type Config struct {
	DeepLAPIKey      string
	DeepLEndpoint    string
	MyMemoryEmail    string
	MyMemoryEndpoint string
}

type Service struct {
	client           *http.Client
	deepLAPIKey      string
	deepLEndpoint    string
	myMemoryEmail    string
	myMemoryEndpoint string
	semaphore        chan struct{}
}

type Request struct {
	Text       string
	SourceLang string
	TargetLang string
}

type Result struct {
	Text           string `json:"text"`
	DetectedSource string `json:"detected_source"`
	Provider       string `json:"provider"`
}

func New(cfg Config) *Service {
	endpoint := strings.TrimRight(cfg.DeepLEndpoint, "/")
	if endpoint == "" {
		if strings.HasSuffix(cfg.DeepLAPIKey, ":fx") {
			endpoint = "https://api-free.deepl.com"
		} else {
			endpoint = "https://api.deepl.com"
		}
	}
	myMemoryEndpoint := strings.TrimRight(cfg.MyMemoryEndpoint, "/")
	if myMemoryEndpoint == "" {
		myMemoryEndpoint = "https://api.mymemory.translated.net"
	}
	return &Service{
		client:           &http.Client{Timeout: 12 * time.Second},
		deepLAPIKey:      cfg.DeepLAPIKey,
		deepLEndpoint:    endpoint,
		myMemoryEmail:    cfg.MyMemoryEmail,
		myMemoryEndpoint: myMemoryEndpoint,
		semaphore:        make(chan struct{}, 2),
	}
}

func (s *Service) Translate(ctx context.Context, input Request) (Result, error) {
	text := strings.TrimSpace(input.Text)
	if text == "" {
		return Result{}, errors.New("translation text is required")
	}
	if utf8.RuneCountInString(text) > maxInputCharacters {
		return Result{}, ErrInputTooLong
	}
	select {
	case s.semaphore <- struct{}{}:
		defer func() { <-s.semaphore }()
	case <-ctx.Done():
		return Result{}, ctx.Err()
	}
	if s.deepLAPIKey != "" {
		return s.translateDeepL(ctx, text, input.SourceLang, input.TargetLang)
	}
	return s.translateMyMemory(ctx, text, input.SourceLang, input.TargetLang)
}

func (s *Service) translateDeepL(ctx context.Context, text, source, target string) (Result, error) {
	body := map[string]any{
		"text":                []string{text},
		"target_lang":         deepLLanguage(target, true),
		"preserve_formatting": true,
	}
	if source != "auto" {
		body["source_lang"] = deepLLanguage(source, false)
	}
	payload, err := json.Marshal(body)
	if err != nil {
		return Result{}, err
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, s.deepLEndpoint+"/v2/translate", bytes.NewReader(payload))
	if err != nil {
		return Result{}, err
	}
	req.Header.Set("Authorization", "DeepL-Auth-Key "+s.deepLAPIKey)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", "Sakura-Tools/1.0")
	response, err := s.client.Do(req)
	if err != nil {
		return Result{}, fmt.Errorf("DeepL request failed: %w", err)
	}
	defer response.Body.Close()
	if response.StatusCode != http.StatusOK {
		io.Copy(io.Discard, io.LimitReader(response.Body, 32<<10))
		return Result{}, fmt.Errorf("DeepL returned status %d", response.StatusCode)
	}
	var output struct {
		Translations []struct {
			Text                   string `json:"text"`
			DetectedSourceLanguage string `json:"detected_source_language"`
		} `json:"translations"`
	}
	if err := json.NewDecoder(io.LimitReader(response.Body, 1<<20)).Decode(&output); err != nil || len(output.Translations) == 0 {
		return Result{}, errors.New("invalid DeepL response")
	}
	return Result{
		Text:           output.Translations[0].Text,
		DetectedSource: strings.ToLower(output.Translations[0].DetectedSourceLanguage),
		Provider:       "DeepL",
	}, nil
}

func (s *Service) translateMyMemory(ctx context.Context, text, source, target string) (Result, error) {
	detected := source
	if detected == "auto" {
		detected = detectLanguage(text)
	}
	if detected == target {
		return Result{Text: text, DetectedSource: detected, Provider: "本地"}, nil
	}
	chunks, err := splitText(text, myMemoryChunkBytes, myMemoryMaxChunks)
	if err != nil {
		return Result{}, err
	}
	translated := make([]string, 0, len(chunks))
	for _, chunk := range chunks {
		endpoint, _ := url.Parse(s.myMemoryEndpoint + "/get")
		query := endpoint.Query()
		query.Set("q", chunk)
		query.Set("langpair", detected+"|"+target)
		query.Set("mt", "1")
		if s.myMemoryEmail != "" {
			query.Set("de", s.myMemoryEmail)
		}
		endpoint.RawQuery = query.Encode()
		req, requestErr := http.NewRequestWithContext(ctx, http.MethodGet, endpoint.String(), nil)
		if requestErr != nil {
			return Result{}, requestErr
		}
		req.Header.Set("User-Agent", "Sakura-Tools/1.0")
		response, requestErr := s.client.Do(req)
		if requestErr != nil {
			return Result{}, fmt.Errorf("MyMemory request failed: %w", requestErr)
		}
		var output struct {
			ResponseData struct {
				TranslatedText string `json:"translatedText"`
			} `json:"responseData"`
			ResponseStatus  any    `json:"responseStatus"`
			ResponseDetails string `json:"responseDetails"`
		}
		decodeErr := json.NewDecoder(io.LimitReader(response.Body, 1<<20)).Decode(&output)
		response.Body.Close()
		if response.StatusCode != http.StatusOK || decodeErr != nil || output.ResponseData.TranslatedText == "" {
			return Result{}, fmt.Errorf("MyMemory could not translate this segment")
		}
		translated = append(translated, html.UnescapeString(output.ResponseData.TranslatedText))
	}
	return Result{Text: strings.Join(translated, ""), DetectedSource: detected, Provider: "MyMemory"}, nil
}

func deepLLanguage(language string, target bool) string {
	switch language {
	case "zh-CN":
		if target {
			return "ZH-HANS"
		}
		return "ZH"
	case "zh-TW":
		if target {
			return "ZH-HANT"
		}
		return "ZH"
	case "en":
		if target {
			return "EN-US"
		}
		return "EN"
	case "pt":
		if target {
			return "PT-BR"
		}
		return "PT"
	default:
		return strings.ToUpper(language)
	}
}

func detectLanguage(text string) string {
	for _, r := range text {
		switch {
		case unicode.In(r, unicode.Hiragana, unicode.Katakana):
			return "ja"
		case unicode.In(r, unicode.Hangul):
			return "ko"
		case unicode.In(r, unicode.Han):
			return "zh-CN"
		case unicode.In(r, unicode.Cyrillic):
			return "ru"
		case unicode.In(r, unicode.Arabic):
			return "ar"
		}
	}
	return "en"
}

var segmentPattern = regexp.MustCompile(`(?s:.*?[.!?。！？\n]+|.+$)`)

func splitText(text string, maxBytes, maxChunks int) ([]string, error) {
	segments := segmentPattern.FindAllString(text, -1)
	chunks := make([]string, 0)
	var current strings.Builder
	flush := func() {
		if current.Len() > 0 {
			chunks = append(chunks, current.String())
			current.Reset()
		}
	}
	for _, segment := range segments {
		for len(segment) > maxBytes {
			flush()
			cut := maxBytes
			for cut > 0 && !utf8.RuneStart(segment[cut]) {
				cut--
			}
			chunks = append(chunks, segment[:cut])
			segment = segment[cut:]
		}
		if current.Len()+len(segment) > maxBytes {
			flush()
		}
		current.WriteString(segment)
	}
	flush()
	if len(chunks) > maxChunks {
		return nil, ErrInputTooLong
	}
	return chunks, nil
}
