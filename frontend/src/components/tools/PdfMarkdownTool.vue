<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  CloudIcon as Cloud,
  DownloadIcon as Download,
  EyeIcon as Eye,
  FileTextIcon as FileText,
  FileUpIcon as FileUp,
  LanguagesIcon as Languages,
  LoaderCircleIcon as Loader,
  RefreshCwIcon as Refresh,
} from '@lucide/vue'
import { PDFDocument } from 'pdf-lib'
import { renderMarkdown } from '../../features/markdown/core/markdown'
import { setPendingMarkdown } from '../../features/markdown/handoff'
import { trackToolUse } from '../../analytics'

const MAX_SIZE = 18 * 1024 * 1024
const MAX_PAGES = 100
const POLL_INTERVAL = 2000

const router = useRouter()

const fileInput = ref(null)
const file = ref(null)
const pages = ref(0)
const uploadPercent = ref(0)
const job = ref(null)
const originalMd = ref('')
const zhMd = ref('')
const previewMode = ref(false)
const previewVariant = ref('original')
const busy = ref(false)
const error = ref('')
let pollTimer = null
let completionTracked = false
let translationTracked = false

const step = computed(() => {
  if (!file.value) return 1
  if (zhMd.value) return 4
  if (originalMd.value) return 3
  return 2
})

const stateText = computed(() => {
  const state = job.value?.state
  switch (state) {
    case 'queued': return '任务排队中…'
    case 'uploading': return '正在上传到 OCR 服务…'
    case 'ocr_processing':
      return job.value?.pages > 0
        ? `OCR 解析中：${job.value.pages_done} / ${job.value.pages} 页`
        : 'OCR 解析中…'
    case 'ocr_completed': return 'Markdown 生成完成'
    case 'translating':
      return job.value?.chunk_total > 0
        ? `AI 翻译中：${job.value.chunk_done} / ${job.value.chunk_total} 块 · ${job.value.current_section || ''}`
        : 'AI 翻译中…'
    case 'completed': return '中文翻译完成'
    case 'failed': return job.value?.error || '任务失败'
    default: return ''
  }
})

const ocrPercent = computed(() => {
  if (!job.value?.pages) return null
  return Math.min(100, Math.round((job.value.pages_done / job.value.pages) * 100))
})

const translatePercent = computed(() => {
  if (!job.value?.chunk_total) return null
  return Math.min(100, Math.round((job.value.chunk_done / job.value.chunk_total) * 100))
})

const previewHtml = computed(() => renderMarkdown(previewVariant.value === 'zh' ? zhMd.value : originalMd.value))

function chooseFile(event) {
  const selected = event.target.files?.[0]
  event.target.value = ''
  reset()
  if (!selected) return
  validateAndSet(selected)
}

function validateAndSet(selected) {
  if (!selected.name.toLowerCase().endsWith('.pdf')) {
    error.value = '请选择 PDF 文件'
    return
  }
  if (selected.size > MAX_SIZE) {
    error.value = '文件超过 18 MB，请先压缩或拆分 PDF'
    return
  }
  error.value = ''
  file.value = selected
  selected.arrayBuffer()
    .then((buffer) => PDFDocument.load(buffer, { updateMetadata: false }))
    .then((doc) => {
      pages.value = doc.getPageCount()
      if (pages.value > MAX_PAGES) {
        error.value = `PDF 共 ${pages.value} 页，超过 ${MAX_PAGES} 页限制`
        reset()
      }
    })
    .catch(() => {
      error.value = '无法读取这个 PDF，文件可能已损坏或受密码保护'
      reset()
    })
}

function uploadWithProgress(payload) {
  return new Promise((resolve, reject) => {
    const form = new FormData()
    form.append('file', payload)
    form.append('pages', String(pages.value || 0))
    const request = new XMLHttpRequest()
    request.open('POST', '/api/v1/pdf/jobs')
    request.responseType = 'json'
    request.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        uploadPercent.value = Math.round((event.loaded / event.total) * 100)
      }
    }
    request.onload = () => {
      if (request.status === 201) {
        resolve(request.response)
      } else {
        reject(new Error(request.response?.error || `上传失败（HTTP ${request.status}）`))
      }
    }
    request.onerror = () => reject(new Error('网络错误，上传失败'))
    request.send(form)
  })
}

async function start() {
  if (!file.value || busy.value) return
  busy.value = true
  error.value = ''
  uploadPercent.value = 0
  try {
    const created = await uploadWithProgress(file.value)
    job.value = created
    startPolling()
  } catch (requestError) {
    error.value = requestError.message
  } finally {
    busy.value = false
  }
}

function startPolling() {
  stopPolling()
  pollTimer = setInterval(poll, POLL_INTERVAL)
  poll()
}

function stopPolling() {
  if (pollTimer) {
    clearInterval(pollTimer)
    pollTimer = null
  }
}

async function poll() {
  if (!job.value?.id) return
  try {
    const response = await fetch(`/api/v1/pdf/jobs/${job.value.id}`)
    if (!response.ok) throw new Error(response.status === 404 ? '任务不存在或已过期' : '查询任务状态失败')
    job.value = await response.json()
    if (job.value.state === 'ocr_completed' && !originalMd.value) {
      await loadMarkdown('original')
      if (!completionTracked) {
        trackToolUse('pdf-markdown')
        completionTracked = true
      }
    }
    if (job.value.state === 'completed' && !zhMd.value) {
      await loadMarkdown('zh')
      if (!translationTracked) {
        trackToolUse('pdf-markdown')
        translationTracked = true
      }
    }
    if (job.value.state === 'failed') {
      stopPolling()
      error.value = job.value.error || '任务失败'
    }
  } catch (pollError) {
    stopPolling()
    error.value = pollError.message
  }
}

async function loadMarkdown(variant) {
  const response = await fetch(`/api/v1/pdf/jobs/${job.value.id}/markdown?variant=${variant}`)
  if (!response.ok) throw new Error('读取 Markdown 失败')
  if (variant === 'zh') zhMd.value = await response.text()
  else originalMd.value = await response.text()
}

async function translate() {
  if (!job.value?.id || busy.value) return
  busy.value = true
  error.value = ''
  try {
    const response = await fetch(`/api/v1/pdf/jobs/${job.value.id}/translate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ translate_references: false }),
    })
    const body = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(body.error || '无法开始翻译')
    job.value = body
    zhMd.value = ''
    startPolling()
  } catch (requestError) {
    error.value = requestError.message
  } finally {
    busy.value = false
  }
}

function togglePreview(variant) {
  if (previewMode.value && previewVariant.value === variant) {
    previewMode.value = false
    return
  }
  previewVariant.value = variant
  previewMode.value = true
}

function download(content, name) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = name
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function openInEditor(variant) {
  const content = variant === 'zh' ? zhMd.value : originalMd.value
  const base = (file.value?.name || 'document.pdf').replace(/\.pdf$/i, '')
  setPendingMarkdown(content, variant === 'zh' ? `${base}.zh.md` : `${base}.md`)
  router.push('/tools/markdown')
}

function reset() {
  stopPolling()
  file.value = null
  pages.value = 0
  job.value = null
  originalMd.value = ''
  zhMd.value = ''
  previewMode.value = false
  uploadPercent.value = 0
  completionTracked = false
  translationTracked = false
  error.value = ''
}

onBeforeUnmount(stopPolling)
</script>

<template>
  <div class="tool-panel pdfmd-panel">
    <div class="pdfmd-privacy">
      <Cloud :size="14" />
      本工具为云端处理：PDF 将上传至 PaddleOCR 解析服务，译文由 AI 翻译服务生成；文件与结果仅临时保存（24 小时内自动删除），不会永久存储。
    </div>

    <section class="pdfmd-step" :class="{ active: step === 1 }">
      <header class="pdfmd-step-head"><span class="pdfmd-step-no">01</span> 选择 PDF</header>
      <div class="pdfmd-pick">
        <button class="secondary-button" type="button" :disabled="!!file" @click="fileInput?.click()">
          <FileUp :size="15" /> 选择 PDF 文件
        </button>
        <input ref="fileInput" type="file" accept="application/pdf,.pdf" hidden @change="chooseFile" />
        <span v-if="file" class="pdfmd-fileinfo">
          {{ file.name }} · {{ (file.size / 1024 / 1024).toFixed(1) }} MB
          <template v-if="pages"> · 共 {{ pages }} 页</template>
        </span>
        <button v-if="file" class="secondary-button" type="button" @click="reset"><Refresh :size="14" /> 重新选择</button>
      </div>
      <div v-if="file && step === 1" class="action-group">
        <button class="primary-button" type="button" :disabled="busy" @click="start">
          开始 OCR 解析
        </button>
      </div>
    </section>

    <section v-if="step >= 2 && job" class="pdfmd-step" :class="{ active: step === 2 }">
      <header class="pdfmd-step-head"><span class="pdfmd-step-no">02</span> OCR 解析</header>
      <div class="pdfmd-progress">
        <div v-if="uploadPercent > 0 && job.state === 'queued'" class="pdfmd-bar"><span :style="{ width: uploadPercent + '%' }" /></div>
        <div v-else-if="ocrPercent !== null && (job.state === 'ocr_processing')" class="pdfmd-bar"><span :style="{ width: ocrPercent + '%' }" /></div>
        <p class="pdfmd-status">
          <Loader v-if="['queued', 'uploading', 'ocr_processing'].includes(job.state)" :size="14" class="spinning" />
          {{ stateText }}
        </p>
      </div>
    </section>

    <section v-if="originalMd" class="pdfmd-step active">
      <header class="pdfmd-step-head"><span class="pdfmd-step-no">03</span> Markdown 生成完成</header>
      <div class="tool-bar">
        <div class="action-group">
          <button class="secondary-button" type="button" @click="togglePreview('original')"><Eye :size="15" /> {{ previewMode && previewVariant === 'original' ? '收起预览' : '预览' }}</button>
          <button class="secondary-button" type="button" @click="download(originalMd, (file?.name || 'document.pdf').replace(/\.pdf$/i, '') + '.md')"><Download :size="15" /> 下载 Markdown</button>
          <button class="secondary-button" type="button" @click="openInEditor('original')"><FileText :size="15" /> 在 Markdown 编辑器中打开</button>
          <button class="primary-button" type="button" :disabled="busy || job.state === 'translating' || zhMd" @click="translate"><Languages :size="15" /> 翻译为中文</button>
        </div>
      </div>
    </section>

    <section v-if="job?.state === 'translating' || zhMd" class="pdfmd-step" :class="{ active: zhMd }">
      <header class="pdfmd-step-head"><span class="pdfmd-step-no">04</span> AI 中文翻译</header>
      <div v-if="job?.state === 'translating'" class="pdfmd-progress">
        <div v-if="translatePercent !== null" class="pdfmd-bar"><span :style="{ width: translatePercent + '%' }" /></div>
        <p class="pdfmd-status"><Loader :size="14" class="spinning" /> {{ stateText }}</p>
      </div>
      <div v-else class="tool-bar">
        <div class="action-group">
          <button class="secondary-button" type="button" @click="togglePreview('zh')"><Eye :size="15" /> {{ previewMode && previewVariant === 'zh' ? '收起预览' : '预览' }}</button>
          <button class="secondary-button" type="button" @click="openInEditor('zh')"><FileText :size="15" /> 打开中文 Markdown</button>
          <button class="secondary-button" type="button" @click="download(zhMd, (file?.name || 'document.pdf').replace(/\.pdf$/i, '') + '.zh.md')"><Download :size="15" /> 下载中文 Markdown</button>
        </div>
        <p class="success-message"><span class="status-dot" /> 翻译完成，公式与代码保持原文</p>
      </div>
    </section>

    <div v-if="previewMode" class="pdfmd-preview markdown-preview">
      <article class="markdown-print-root" v-html="previewHtml" />
    </div>

    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<style scoped>
.pdfmd-panel { display: flex; flex-direction: column; gap: 14px; }
.pdfmd-privacy {
  display: flex; align-items: center; gap: 7px;
  border: 1px solid var(--line); border-radius: 10px;
  background: var(--blue-pale); color: var(--ink);
  padding: 9px 12px; font-size: 13px; line-height: 1.5;
}
.pdfmd-step {
  border: 1px solid var(--line); border-radius: 12px; padding: 14px 16px;
  display: flex; flex-direction: column; gap: 10px; opacity: 0.65;
}
.pdfmd-step.active { opacity: 1; }
.pdfmd-step-head { font-weight: 600; display: flex; align-items: center; gap: 8px; }
.pdfmd-step-no { color: var(--sakura); font-size: 13px; letter-spacing: 1px; }
.pdfmd-pick { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.pdfmd-fileinfo { color: var(--muted); font-size: 13px; }
.pdfmd-progress { display: flex; flex-direction: column; gap: 8px; }
.pdfmd-bar { height: 8px; border-radius: 4px; background: var(--paper-deep); overflow: hidden; }
.pdfmd-bar span { display: block; height: 100%; border-radius: 4px; background: var(--sakura); transition: width 0.4s ease; }
.pdfmd-status { display: flex; align-items: center; gap: 7px; margin: 0; color: var(--muted); font-size: 13px; }
.spinning { animation: pdfmd-spin 0.9s linear infinite; }
@keyframes pdfmd-spin { to { transform: rotate(360deg); } }
.pdfmd-preview {
  border: 1px solid var(--line); border-radius: 12px; padding: 18px 20px;
  background: var(--surface); max-height: 480px; overflow: auto;
}
</style>
