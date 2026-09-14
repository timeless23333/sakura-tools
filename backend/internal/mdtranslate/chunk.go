package mdtranslate

import "strings"

// segmentKind: text 段需要翻译；verbatim 段原样保留（代码、公式、References）。
type segmentKind int

const (
	segmentText segmentKind = iota
	segmentVerbatim
)

type segment struct {
	kind    segmentKind
	content string
	section string // 所属章节标题（用于进度展示）
}

// unit 是翻译/合并共用的分组：verbatim 单元原样输出，text 单元整体送翻。
type unit struct {
	verbatim bool
	content  string
	section  string
}

// splitSegments 把 Markdown 解析为不可再切的原子段：
//   - 代码围栏、块级公式（$$ / \[）是 verbatim，绝不会被送入模型；
//   - 表格按整行组切分，不会在行中间断开；
//   - 标题总是开启新段（优先切分点）；
//   - translateReferences 为 false 时，References/Bibliography 之后的内容全部 verbatim。
func splitSegments(markdown string, translateReferences bool) []segment {
	lines := strings.Split(strings.ReplaceAll(strings.TrimSpace(markdown), "\r\n", "\n"), "\n")
	segments := make([]segment, 0, 32)
	currentSection := ""
	i := 0
	for i < len(lines) {
		line := lines[i]
		trimmed := strings.TrimSpace(line)
		if trimmed == "" {
			i++
			continue
		}

		// 代码围栏：原样保留到闭合围栏。
		if strings.HasPrefix(trimmed, "```") {
			block := []string{line}
			i++
			for i < len(lines) {
				block = append(block, lines[i])
				if strings.TrimSpace(lines[i]) == "```" {
					i++
					break
				}
				i++
			}
			segments = append(segments, segment{kind: segmentVerbatim, content: strings.Join(block, "\n"), section: currentSection})
			continue
		}

		// 块级 LaTeX：$$...$$ 或 \[...\]，原样保留。
		if strings.HasPrefix(trimmed, "$$") || strings.HasPrefix(trimmed, "\\[") {
			closing := "$$"
			if strings.HasPrefix(trimmed, "\\[") {
				closing = "\\]"
			}
			block := []string{line}
			singleLine := strings.HasSuffix(trimmed, closing) && len(trimmed) > len(closing)*2
			if singleLine {
				i++
			} else {
				i++
				for i < len(lines) {
					block = append(block, lines[i])
					if strings.HasSuffix(strings.TrimSpace(lines[i]), closing) {
						i++
						break
					}
					i++
				}
			}
			segments = append(segments, segment{kind: segmentVerbatim, content: strings.Join(block, "\n"), section: currentSection})
			continue
		}

		// References：默认整段保留原文（先于普通标题判断）。
		if !translateReferences && isReferencesHeading(trimmed) {
			segments = append(segments, segment{
				kind:    segmentVerbatim,
				content: strings.Join(lines[i:], "\n"),
				section: currentSection,
			})
			i = len(lines)
			continue
		}

		// 标题：新章节起点。
		if headingLevel(trimmed) > 0 {
			currentSection = strings.TrimSpace(strings.TrimLeft(trimmed, "#"))
			segments = append(segments, segment{kind: segmentText, content: line, section: currentSection})
			i++
			continue
		}

		// 表格：连续的表格行作为整段（不会在行中间断开）。
		if strings.HasPrefix(trimmed, "|") {
			block := []string{line}
			i++
			for i < len(lines) && strings.Contains(lines[i], "|") && strings.TrimSpace(lines[i]) != "" {
				block = append(block, lines[i])
				i++
			}
			segments = append(segments, segment{kind: segmentText, content: strings.Join(block, "\n"), section: currentSection})
			continue
		}

		// 引用块、列表：连续行作为一段。
		if strings.HasPrefix(trimmed, ">") || isListItem(trimmed) {
			block := []string{line}
			i++
			for i < len(lines) {
				t := strings.TrimSpace(lines[i])
				if t == "" {
					break
				}
				if !strings.HasPrefix(t, ">") && !isListItem(t) {
					break
				}
				block = append(block, lines[i])
				i++
			}
			segments = append(segments, segment{kind: segmentText, content: strings.Join(block, "\n"), section: currentSection})
			continue
		}

		// 普通段落：连续非空行。
		block := []string{line}
		i++
		for i < len(lines) {
			t := strings.TrimSpace(lines[i])
			if t == "" || headingLevel(t) > 0 || strings.HasPrefix(t, "```") ||
				strings.HasPrefix(t, "$$") || strings.HasPrefix(t, "\\[") ||
				strings.HasPrefix(t, ">") || isListItem(t) || strings.HasPrefix(t, "|") {
				break
			}
			block = append(block, lines[i])
			i++
		}
		segments = append(segments, segment{kind: segmentText, content: strings.Join(block, "\n"), section: currentSection})
	}
	return segments
}

// groupUnits 把原子段聚合为翻译单元：标题处开新单元、文本单元不超过 maxChars；
// 单段超限时按段落/行边界拆分（表格段已保证整行组，不会破坏行）。
func groupUnits(segments []segment, maxChars int) []unit {
	units := make([]unit, 0, 8)
	var current []segment
	size := 0
	flush := func() {
		if len(current) > 0 {
			units = append(units, unit{
				verbatim: false,
				content:  joinSegments(current),
				section:  currentSectionOf(current),
			})
			current = nil
			size = 0
		}
	}
	for _, seg := range segments {
		if seg.kind == segmentVerbatim {
			flush()
			units = append(units, unit{verbatim: true, content: seg.content, section: seg.section})
			continue
		}
		if headingLevel(strings.TrimSpace(firstLine(seg.content))) > 0 || size+len(seg.content) > maxChars {
			flush()
		}
		if len(seg.content) > maxChars {
			for _, piece := range splitOversize(seg, maxChars) {
				current = append(current, piece)
				size += len(piece.content)
				if size >= maxChars {
					flush()
				}
			}
			continue
		}
		current = append(current, seg)
		size += len(seg.content)
	}
	flush()
	return units
}

func joinSegments(segments []segment) string {
	parts := make([]string, 0, len(segments))
	for _, seg := range segments {
		parts = append(parts, seg.content)
	}
	return strings.Join(parts, "\n\n")
}

func currentSectionOf(segments []segment) string {
	for i := len(segments) - 1; i >= 0; i-- {
		if segments[i].section != "" {
			return segments[i].section
		}
	}
	return ""
}

func splitOversize(seg segment, maxChars int) []segment {
	pieces := make([]segment, 0, 4)
	var current []string
	size := 0
	flush := func() {
		if len(current) > 0 {
			pieces = append(pieces, segment{kind: segmentText, content: strings.Join(current, "\n"), section: seg.section})
			current = nil
			size = 0
		}
	}
	for _, line := range lines(seg.content) {
		// 单行仍超限（超长行）时按硬边界切开，尽量在句子结尾断。
		for len(line) > maxChars {
			cut := maxChars
			if idx := strings.LastIndexAny(line[:maxChars], "。；；.!? "); idx > maxChars/2 {
				cut = idx + 1
			}
			flush()
			pieces = append(pieces, segment{kind: segmentText, content: line[:cut], section: seg.section})
			line = line[cut:]
		}
		if size+len(line) > maxChars {
			flush()
		}
		current = append(current, line)
		size += len(line)
	}
	flush()
	return pieces
}

func lines(s string) []string {
	return strings.Split(s, "\n")
}

func headingLevel(line string) int {
	level := 0
	for level < len(line) && line[level] == '#' {
		level++
	}
	if level >= 1 && level <= 6 && level < len(line) && (line[level] == ' ' || line[level] == '\t') {
		return level
	}
	return 0
}

func firstLine(s string) string {
	if idx := strings.IndexByte(s, '\n'); idx >= 0 {
		return s[:idx]
	}
	return s
}

func isTableDivider(line string) bool {
	trimmed := strings.TrimSpace(line)
	if !strings.Contains(trimmed, "-") || !strings.Contains(trimmed, "|") {
		return false
	}
	for _, r := range trimmed {
		switch r {
		case '|', '-', ':', ' ':
		default:
			return false
		}
	}
	return true
}

func isListItem(line string) bool {
	if len(line) < 2 {
		return false
	}
	switch line[0] {
	case '-', '*', '+':
		return line[1] == ' '
	}
	digits := 0
	for digits < len(line) && line[digits] >= '0' && line[digits] <= '9' {
		digits++
	}
	return digits > 0 && digits+1 < len(line) && (line[digits] == '.' || line[digits] == ')') && line[digits+1] == ' '
}

var referencesHeadings = []string{
	"references", "bibliography", "works cited", "literature cited", "参考文献",
}

func isReferencesHeading(line string) bool {
	text := strings.ToLower(strings.TrimSpace(strings.TrimLeft(line, "#")))
	text = strings.Trim(text, " :：.")
	for _, heading := range referencesHeadings {
		if text == heading {
			return true
		}
	}
	return false
}
