// Sakura Tools 站点访问统计采集模块。
//
// 隐私原则：不使用浏览器指纹，不采集个人信息，不跨站追踪。
// 仅保存一个随机生成的本地 client ID（localStorage，直到用户清除），
// 服务端只存它经 HMAC 加盐后的不可逆散列。
//
// 开发环境（vite dev / localhost）默认不上报；如需本地调试统计，
// 可在控制台执行 localStorage.setItem('sakura-analytics-dev', '1') 后刷新。

const CID_KEY = 'sakura-analytics-cid'
const SID_KEY = 'sakura-analytics-sid'
const DEV_FLAG = 'sakura-analytics-dev'
const COLLECT_URL = '/api/v1/analytics/collect'

function randomId(prefix) {
  const uuid = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
  return `${prefix}-${uuid}`
}

function storedId(key, prefix) {
  try {
    const existing = localStorage.getItem(key)
    if (existing) return existing
    const created = randomId(prefix)
    localStorage.setItem(key, created)
    return created
  } catch {
    try {
      const existing = sessionStorage.getItem(key)
      if (existing) return existing
      const created = randomId(prefix)
      sessionStorage.setItem(key, created)
      return created
    } catch {
      return randomId(prefix)
    }
  }
}

function devTrackingAllowed() {
  try {
    return localStorage.getItem(DEV_FLAG) === '1'
  } catch {
    return false
  }
}

function trackingEnabled() {
  const localHost = ['localhost', '127.0.0.1', '0.0.0.0', '[::1]', '::1'].includes(location.hostname) || location.hostname.endsWith('.local')
  return (import.meta.env.PROD && !localHost) || devTrackingAllowed()
}

function send(payload) {
  if (!trackingEnabled()) return
  const body = JSON.stringify(payload)
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(COLLECT_URL, new Blob([body], { type: 'application/json' }))) return
  } catch {
    // 继续尝试 fetch 兜底。
  }
  try {
    fetch(COLLECT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {})
  } catch {
    // 统计失败时静默忽略，绝不影响工具功能。
  }
}

// 会话第一个页面才标记 entry，用于入口页面与外部来源统计。
function markSessionEntry() {
  try {
    if (sessionStorage.getItem(SID_KEY)) return false
    sessionStorage.setItem(SID_KEY, randomId('s'))
    return true
  } catch {
    return false
  }
}

let lastPath = ''
let lastAt = 0

export function trackPageView(path = location.pathname) {
  if (path.startsWith('/admin')) return
  const now = Date.now()
  if (path === lastPath && now - lastAt < 2000) return
  lastPath = path
  lastAt = now
  send({
    type: 'page_view',
    path,
    tool: '',
    cid: storedId(CID_KEY, 'c'),
    entry: markSessionEntry(),
    ref: document.referrer || '',
  })
}

// 工具核心功能执行成功后调用，例如 trackToolUse('beads')。
export function trackToolUse(slug) {
  send({
    type: 'tool_use',
    path: `/tools/${slug}`,
    tool: slug,
    cid: storedId(CID_KEY, 'c'),
    entry: false,
    ref: '',
  })
}

// 预留的通用事件入口（Phase 3 扩展用）。
export function trackEvent(type, data = {}) {
  send({
    type,
    path: data.path || location.pathname,
    tool: data.tool || '',
    cid: storedId(CID_KEY, 'c'),
    entry: false,
    ref: '',
  })
}
