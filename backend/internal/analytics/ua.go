package analytics

import "strings"

// ClassifyUserAgent 用无依赖的子串匹配对 User-Agent 做粗分类。
// 只服务于“大致分布”展示，不追求精确；返回小写 device 与首字母大写 browser/os。
// bot 为 true 时该请求不计入 PV/UV。
func ClassifyUserAgent(ua string) (device, browser, osName string, bot bool) {
	ua = strings.ToLower(ua)
	bot = containsAny(ua, botKeywords)
	device = classifyDevice(ua)
	browser = classifyBrowser(ua)
	osName = classifyOS(ua)
	return device, browser, osName, bot
}

var botKeywords = []string{
	"bot", "spider", "crawl", "slurp", "curl/", "wget", "python-requests", "python-urllib",
	"go-http-client", "java/", "okhttp", "libwww", "httpclient", "headlesschrome",
	"lighthouse", "pagespeed", "pingdom", "uptime", "site monitor", "facebookexternalhit",
	"slack-img", "telegrambot", "openai", "gptbot", "claudebot", "anthropic", "perplexity",
	"bytespider", "yandex", "duckduck", "baiduspider", "sogou", "semrush", "ahrefs",
	"mj12bot", "dotbot", "petalbot", "applebot", "seo", "scanner", "nikto", "masscan",
	"zgrab", "nuclei", "httpx",
}

func classifyDevice(ua string) string {
	isAndroid := strings.Contains(ua, "android")
	switch {
	case strings.Contains(ua, "ipad"), strings.Contains(ua, "tablet"),
		strings.Contains(ua, "playbook"), strings.Contains(ua, "silk"),
		isAndroid && !strings.Contains(ua, "mobile"):
		return "tablet"
	case strings.Contains(ua, "mobi"), strings.Contains(ua, "iphone"),
		strings.Contains(ua, "ipod"), strings.Contains(ua, "iemobile"), isAndroid:
		return "mobile"
	default:
		return "desktop"
	}
}

// 顺序敏感：微信/Edge/三星等浏览器的 UA 都内嵌 Chrome，必须先判断。
func classifyBrowser(ua string) string {
	switch {
	case containsAny(ua, []string{"micromessenger"}):
		return "WeChat"
	case containsAny(ua, []string{"edg/", "edga/", "edgios/"}):
		return "Edge"
	case containsAny(ua, []string{"opr/", "opera"}):
		return "Opera"
	case containsAny(ua, []string{"samsungbrowser"}):
		return "Samsung Internet"
	case containsAny(ua, []string{"huaweibrowser"}):
		return "Huawei Browser"
	case containsAny(ua, []string{"qqbrowser"}):
		return "QQ Browser"
	case containsAny(ua, []string{"ucbrowser"}):
		return "UC Browser"
	case containsAny(ua, []string{"baidubrowser", "baiduboxapp"}):
		return "Baidu Browser"
	case strings.Contains(ua, "firefox"):
		return "Firefox"
	case strings.Contains(ua, "crios"):
		return "Chrome"
	case strings.Contains(ua, "chrome"), strings.Contains(ua, "chromium"):
		return "Chrome"
	case strings.Contains(ua, "safari"):
		return "Safari"
	default:
		return "Other"
	}
}

func classifyOS(ua string) string {
	switch {
	case strings.Contains(ua, "windows"):
		return "Windows"
	case strings.Contains(ua, "iphone"), strings.Contains(ua, "ipod"):
		return "iOS"
	case strings.Contains(ua, "ipad"):
		return "iPadOS"
	case strings.Contains(ua, "mac os x"), strings.Contains(ua, "macintosh"):
		return "macOS"
	case strings.Contains(ua, "android"):
		return "Android"
	case strings.Contains(ua, "cros"):
		return "Chrome OS"
	case strings.Contains(ua, "linux"):
		return "Linux"
	default:
		return "Other"
	}
}

func containsAny(s string, needles []string) bool {
	for _, needle := range needles {
		if strings.Contains(s, needle) {
			return true
		}
	}
	return false
}
