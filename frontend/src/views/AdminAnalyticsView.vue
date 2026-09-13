<script setup>
import { computed, onMounted, ref } from 'vue'
import {
  ActivityIcon as Activity,
  ArrowLeftIcon as ArrowLeft,
  LockKeyholeIcon as LockKeyhole,
  LogOutIcon as LogOut,
  RefreshCwIcon as RefreshCw,
  ShieldCheckIcon as ShieldCheck,
} from '@lucide/vue'
import TrendChart from '../components/admin/TrendChart.vue'

const TOKEN_KEY = 'sakura-admin-token'
const SUMMARY_URL = '/api/v1/admin/analytics/summary'

const ranges = [
  { value: 1, label: '今日' },
  { value: 7, label: '7 天' },
  { value: 30, label: '30 天' },
]

const token = ref(readToken())
const tokenInput = ref('')
const range = ref(7)
const summary = ref(null)
const loading = ref(false)
const error = ref('')

const metrics = computed(() => [
  { label: '今日 PV', value: summary.value?.today.pv, hint: `Bot ${formatNumber(summary.value?.today.bot_pv)} 次` },
  { label: '今日 UV', value: summary.value?.today.uv, hint: `新访客 ${formatNumber(summary.value?.today.new_visitors)}` },
  { label: '今日工具使用', value: summary.value?.today.tool_use, hint: 'tool_use 事件' },
  { label: '近 7 日 PV', value: summary.value?.last7_pv, hint: '含今日' },
])

const rangeSummary = computed(() => {
  if (!summary.value) return ''
  const { days, pv, uv, tool_use: toolUse, bot_pv: botPV } = summary.value.range
  const scope = days === 1 ? '今日' : `近 ${days} 天`
  return `${scope}：PV ${formatNumber(pv)} · UV ${formatNumber(uv)} · 工具使用 ${formatNumber(toolUse)} · Bot ${formatNumber(botPV)}（不计入 PV/UV）`
})

function readToken() {
  try {
    return sessionStorage.getItem(TOKEN_KEY) || ''
  } catch {
    return ''
  }
}

function saveToken() {
  const value = tokenInput.value.trim()
  if (!value) return
  token.value = value
  try {
    sessionStorage.setItem(TOKEN_KEY, value)
  } catch {
    // 无法持久化时仍在当前会话内可用。
  }
  tokenInput.value = ''
  load()
}

function logout() {
  token.value = ''
  summary.value = null
  try {
    sessionStorage.removeItem(TOKEN_KEY)
  } catch {
    // ignore
  }
}

async function load() {
  if (!token.value) return
  loading.value = true
  error.value = ''
  try {
    const response = await fetch(`${SUMMARY_URL}?days=${range.value}`, {
      headers: { 'X-Admin-Token': token.value },
    })
    if (response.status === 401) {
      error.value = '访问令牌无效，请重新输入。'
      logout()
      return
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    summary.value = await response.json()
  } catch {
    error.value = '无法加载统计数据，请稍后重试。'
  } finally {
    loading.value = false
  }
}

function switchRange(value) {
  range.value = value
  load()
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString()
}

function share(count, list) {
  const total = list.reduce((sum, item) => sum + item.count, 0)
  return total ? `${Math.round((count / total) * 100)}%` : '0%'
}

function barWidth(count, list) {
  const max = Math.max(...list.map((item) => item.count), 1)
  return `${Math.max(Math.round((count / max) * 100), 3)}%`
}

function conversion(tool) {
  return tool.pv > 0 ? `${Math.round((tool.uses / tool.pv) * 100)}%` : '—'
}

onMounted(() => {
  if (token.value) load()
})
</script>

<template>
  <section v-if="!token" class="admin-gate">
    <div class="tool-panel admin-gate-panel">
      <LockKeyhole :size="26" />
      <h1>Analytics 管理端</h1>
      <p>输入服务器 <code>.env</code> 中配置的 <code>ANALYTICS_ADMIN_TOKEN</code>。令牌仅保存在当前浏览器会话中。</p>
      <form @submit.prevent="saveToken">
        <input v-model="tokenInput" type="password" placeholder="管理员令牌" autocomplete="off" />
        <button class="primary-button" type="submit">进入 Dashboard</button>
      </form>
      <router-link class="admin-back" to="/"><ArrowLeft :size="14" /> 返回工具索引</router-link>
    </div>
  </section>

  <section v-else class="admin-dashboard">
    <header class="admin-header">
      <div>
        <p class="section-kicker">ADMIN · ANALYTICS</p>
        <h1>Sakura Tools Analytics</h1>
      </div>
      <div class="admin-actions">
        <div class="range-switch" role="tablist" aria-label="时间范围">
          <button
            v-for="item in ranges"
            :key="item.value"
            type="button"
            :class="{ active: range === item.value }"
            @click="switchRange(item.value)"
          >{{ item.label }}</button>
        </div>
        <button class="icon-button" type="button" aria-label="刷新" :disabled="loading" @click="load">
          <RefreshCw :size="17" :class="{ spinning: loading }" />
        </button>
        <button class="icon-button" type="button" aria-label="退出管理端" @click="logout">
          <LogOut :size="17" />
        </button>
      </div>
    </header>

    <p v-if="error" class="error-message">{{ error }}</p>

    <div v-if="summary" class="admin-body">
      <div class="metric-grid">
        <div v-for="metric in metrics" :key="metric.label" class="metric-card">
          <span class="metric-label">{{ metric.label }}</span>
          <strong class="metric-value">{{ formatNumber(metric.value) }}</strong>
          <span class="metric-hint">{{ metric.hint }}</span>
        </div>
      </div>

      <div class="tool-panel chart-panel">
        <div class="panel-title"><Activity :size="17" /> 最近 30 天趋势</div>
        <TrendChart :points="summary.trend" />
        <p class="range-note">{{ rangeSummary }}</p>
      </div>

      <div class="tool-panel">
        <div class="panel-title">热门工具</div>
        <table v-if="summary.top_tools.length" class="admin-table">
          <thead>
            <tr><th>#</th><th>工具</th><th class="num">PV</th><th class="num">UV</th><th class="num">使用</th><th class="num">使用转化率</th></tr>
          </thead>
          <tbody>
            <tr v-for="(tool, index) in summary.top_tools" :key="tool.slug">
              <td class="rank">{{ index + 1 }}</td>
              <td>{{ tool.name || tool.slug }}</td>
              <td class="num">{{ formatNumber(tool.pv) }}</td>
              <td class="num">{{ formatNumber(tool.uv) }}</td>
              <td class="num">{{ formatNumber(tool.uses) }}</td>
              <td class="num">{{ conversion(tool) }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else class="empty-note">暂无工具数据。</p>
      </div>

      <div class="panel-grid">
        <div class="tool-panel">
          <div class="panel-title">热门页面</div>
          <ul v-if="summary.top_pages.length" class="rank-list">
            <li v-for="item in summary.top_pages" :key="item.name">
              <span class="rank-name">{{ item.name }}</span>
              <span class="rank-bar" :style="{ width: barWidth(item.count, summary.top_pages) }" />
              <span class="rank-count">{{ formatNumber(item.count) }} · {{ share(item.count, summary.top_pages) }}</span>
            </li>
          </ul>
          <p v-else class="empty-note">暂无数据。</p>
        </div>
        <div class="tool-panel">
          <div class="panel-title">入口页面</div>
          <ul v-if="summary.entries.length" class="rank-list">
            <li v-for="item in summary.entries" :key="item.name">
              <span class="rank-name">{{ item.name }}</span>
              <span class="rank-bar" :style="{ width: barWidth(item.count, summary.entries) }" />
              <span class="rank-count">{{ formatNumber(item.count) }} · {{ share(item.count, summary.entries) }}</span>
            </li>
          </ul>
          <p v-else class="empty-note">暂无数据。</p>
        </div>
        <div class="tool-panel">
          <div class="panel-title">Referrer 来源</div>
          <ul v-if="summary.referrers.length" class="rank-list">
            <li v-for="item in summary.referrers" :key="item.name">
              <span class="rank-name">{{ item.name }}</span>
              <span class="rank-bar" :style="{ width: barWidth(item.count, summary.referrers) }" />
              <span class="rank-count">{{ formatNumber(item.count) }} · {{ share(item.count, summary.referrers) }}</span>
            </li>
          </ul>
          <p v-else class="empty-note">暂无外部来源，访问主要来自直接输入或书签。</p>
        </div>
      </div>

      <div class="panel-grid">
        <div class="tool-panel">
          <div class="panel-title">设备</div>
          <ul v-if="summary.devices.length" class="rank-list">
            <li v-for="item in summary.devices" :key="item.name">
              <span class="rank-name">{{ item.name }}</span>
              <span class="rank-bar" :style="{ width: barWidth(item.count, summary.devices) }" />
              <span class="rank-count">{{ formatNumber(item.count) }} · {{ share(item.count, summary.devices) }}</span>
            </li>
          </ul>
          <p v-else class="empty-note">暂无数据。</p>
        </div>
        <div class="tool-panel">
          <div class="panel-title">浏览器</div>
          <ul v-if="summary.browsers.length" class="rank-list">
            <li v-for="item in summary.browsers" :key="item.name">
              <span class="rank-name">{{ item.name }}</span>
              <span class="rank-bar" :style="{ width: barWidth(item.count, summary.browsers) }" />
              <span class="rank-count">{{ formatNumber(item.count) }} · {{ share(item.count, summary.browsers) }}</span>
            </li>
          </ul>
          <p v-else class="empty-note">暂无数据。</p>
        </div>
        <div class="tool-panel">
          <div class="panel-title">操作系统</div>
          <ul v-if="summary.os.length" class="rank-list">
            <li v-for="item in summary.os" :key="item.name">
              <span class="rank-name">{{ item.name }}</span>
              <span class="rank-bar" :style="{ width: barWidth(item.count, summary.os) }" />
              <span class="rank-count">{{ formatNumber(item.count) }} · {{ share(item.count, summary.os) }}</span>
            </li>
          </ul>
          <p v-else class="empty-note">暂无数据。</p>
        </div>
      </div>

      <p class="admin-footnote">
        <ShieldCheck :size="14" />
        访客标识为随机 ID 的服务端不可逆散列，不保存 IP 与个人信息；设备/浏览器为 User-Agent 粗分类，按 PV 占比展示。
      </p>
    </div>
  </section>
</template>

<style scoped>
.admin-gate { display: flex; justify-content: center; padding: 64px 0; }
.admin-gate-panel { max-width: 420px; text-align: center; display: flex; flex-direction: column; gap: 12px; align-items: center; padding: 36px 28px; }
.admin-gate-panel h1 { font-size: 22px; margin: 0; }
.admin-gate-panel p { color: var(--muted); font-size: 14px; margin: 0; line-height: 1.6; }
.admin-gate-panel code { background: var(--paper-deep); padding: 1px 6px; border-radius: 6px; font-size: 13px; }
.admin-gate-panel form { display: flex; gap: 8px; width: 100%; }
.admin-gate-panel input {
  flex: 1; border: 1px solid var(--line-dark); border-radius: 10px;
  padding: 9px 12px; background: var(--surface); color: var(--ink);
}
.admin-back { display: inline-flex; align-items: center; gap: 5px; color: var(--muted); font-size: 13px; }

.admin-dashboard { display: flex; flex-direction: column; gap: 18px; }
.admin-header { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px; }
.admin-header h1 { margin: 4px 0 0; font-size: 26px; }
.admin-actions { display: flex; align-items: center; gap: 10px; }
.range-switch { display: flex; border: 1px solid var(--line); border-radius: 999px; overflow: hidden; }
.range-switch button { border: 0; background: var(--surface); color: var(--muted); padding: 6px 16px; cursor: pointer; font-size: 13px; }
.range-switch button.active { background: var(--sakura-pale); color: var(--sakura); }
.icon-button.spinning { animation: admin-spin 0.9s linear infinite; }
@keyframes admin-spin { to { transform: rotate(360deg); } }

.admin-body { display: flex; flex-direction: column; gap: 18px; }
.metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; }
.metric-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 14px;
  padding: 16px 18px; display: flex; flex-direction: column; gap: 4px;
  box-shadow: var(--shadow);
}
.metric-label { color: var(--muted); font-size: 13px; }
.metric-value { font-size: 28px; line-height: 1.2; }
.metric-hint { color: var(--muted); font-size: 12px; }

.chart-panel { display: flex; flex-direction: column; gap: 8px; }
.panel-title { display: flex; align-items: center; gap: 7px; font-weight: 600; margin-bottom: 8px; }
.range-note { color: var(--muted); font-size: 13px; margin: 6px 0 0; }

.admin-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.admin-table th, .admin-table td { padding: 8px 10px; border-bottom: 1px solid var(--line); text-align: left; }
.admin-table th { color: var(--muted); font-weight: 500; font-size: 12px; }
.admin-table .num { text-align: right; font-variant-numeric: tabular-nums; }
.admin-table .rank { color: var(--muted); width: 28px; }
.admin-table tbody tr:last-child td { border-bottom: 0; }

.panel-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; }
.rank-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.rank-list li { display: flex; align-items: center; gap: 10px; font-size: 13px; }
.rank-name { min-width: 0; flex: 0 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.rank-bar { height: 8px; border-radius: 4px; background: var(--sakura-pale); border-right: 2px solid var(--sakura); }
.rank-count { margin-left: auto; color: var(--muted); font-variant-numeric: tabular-nums; white-space: nowrap; }
.empty-note { color: var(--muted); font-size: 13px; margin: 0; }

.admin-footnote { display: flex; align-items: center; gap: 6px; color: var(--muted); font-size: 12px; margin: 0; }

@media (max-width: 640px) {
  .admin-header { flex-direction: column; align-items: flex-start; }
}
</style>
