<script setup>
import { computed, ref } from 'vue'
import {
  ArrowLeftIcon as ArrowLeft,
  ArrowRightIcon as ArrowRight,
  CheckSquareIcon as CheckSquare,
  DownloadIcon as Download,
  FilePlus2Icon as FilePlus,
  FileStackIcon as FileStack,
  LoaderCircleIcon as Loader,
  RotateCwIcon as Rotate,
  ShieldCheckIcon as ShieldCheck,
  Trash2Icon as Trash,
  Undo2Icon as Undo,
  XIcon as X,
} from '@lucide/vue'
import {
  buildMergedPdf,
  buildSplitZip,
  downloadBytes,
  formatBytes,
  inspectPdf,
  parsePageRange,
  sanitizeFilename,
} from '../../features/pdf/core/pdf'

const MAX_FILE_BYTES = 60 * 1024 * 1024
const MAX_TOTAL_BYTES = 120 * 1024 * 1024
const MAX_PAGES = 200

const fileInput = ref()
const documents = ref([])
const pages = ref([])
const busy = ref(false)
const draggingFiles = ref(false)
const progress = ref('')
const error = ref('')
const notice = ref('按住 Shift 点击可以连续选择页面')
const pageRange = ref('')
const outputName = ref('sakura-整理后')
const exportMode = ref('merge')
const lastOutputBytes = ref(null)
const history = ref([])
const draggedIndex = ref(null)
const dropIndex = ref(null)
let lastSelectedIndex = null

const selectedCount = computed(() => pages.value.filter((page) => page.selected).length)
const totalBytes = computed(() => documents.value.reduce((sum, item) => sum + item.size, 0))
const allSelected = computed(() => pages.value.length > 0 && selectedCount.value === pages.value.length)
const rangeSummary = computed(() => {
  if (!pages.value.length) return '0 页'
  try {
    return `${parsePageRange(pageRange.value, pages.value.length).length} 页`
  } catch {
    return '范围有误'
  }
})

async function addFiles(fileList) {
  const files = [...(fileList || [])]
  if (!files.length || busy.value) return
  busy.value = true
  error.value = ''
  let added = 0
  const failures = []

  for (const file of files) {
    if (!(file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf'))) {
      failures.push(`${file.name}：不是 PDF 文件`)
      continue
    }
    if (file.size > MAX_FILE_BYTES) {
      failures.push(`${file.name}：超过 60 MB`)
      continue
    }
    if (totalBytes.value + file.size > MAX_TOTAL_BYTES) {
      failures.push(`${file.name}：加入后总大小会超过 120 MB`)
      continue
    }
    const remainingPages = MAX_PAGES - pages.value.length
    if (remainingPages <= 0) {
      failures.push('页面总数已达到 200 页')
      break
    }

    try {
      progress.value = `正在读取 ${file.name}…`
      const result = await inspectPdf(file, (current, total) => {
        progress.value = `正在生成缩略图 · ${file.name} · ${current}/${total}`
      }, remainingPages)
      const documentId = crypto.randomUUID()
      documents.value.push({ id: documentId, name: file.name, size: file.size, bytes: result.bytes, pageCount: result.pageCount })
      pages.value.push(...result.thumbnails.map((thumbnail, sourceIndex) => ({
        id: crypto.randomUUID(),
        documentId,
        documentName: file.name,
        sourceIndex,
        sourcePage: sourceIndex + 1,
        rotation: 0,
        selected: false,
        ...thumbnail,
      })))
      added += 1
    } catch (fileError) {
      failures.push(`${file.name}：${fileError.message}`)
    }
  }

  busy.value = false
  progress.value = ''
  if (fileInput.value) fileInput.value.value = ''
  if (failures.length) error.value = failures.join('；')
  if (added) {
    notice.value = `已添加 ${added} 个 PDF，拖动缩略图可调整顺序`
    lastOutputBytes.value = null
  }
}

function handlePageClick(index, event) {
  if (event.target.closest('button')) return
  if (event.shiftKey && lastSelectedIndex !== null) {
    const [start, end] = [lastSelectedIndex, index].sort((a, b) => a - b)
    const nextState = !pages.value[index].selected
    for (let cursor = start; cursor <= end; cursor += 1) pages.value[cursor].selected = nextState
  } else {
    pages.value[index].selected = !pages.value[index].selected
  }
  lastSelectedIndex = index
}

function toggleAll() {
  const nextState = !allSelected.value
  pages.value.forEach((page) => (page.selected = nextState))
  lastSelectedIndex = null
}

function rotatePages(page, direction = 1) {
  const targets = page ? [page] : pages.value.filter((item) => item.selected)
  targets.forEach((item) => (item.rotation = (item.rotation + direction * 90 + 360) % 360))
  lastOutputBytes.value = null
}

function removePages(page) {
  const removing = page ? [page] : pages.value.filter((item) => item.selected)
  if (!removing.length) return
  const ids = new Set(removing.map((item) => item.id))
  const snapshot = pages.value.flatMap((item, index) => ids.has(item.id) ? [{ page: { ...item, selected: false }, index }] : [])
  history.value.unshift({ pages: snapshot, documents: [...documents.value] })
  history.value = history.value.slice(0, 10)
  pages.value = pages.value.filter((item) => !ids.has(item.id))
  cleanupDocuments()
  notice.value = `已移除 ${removing.length} 页，可撤销`
  lastOutputBytes.value = null
}

function undoRemove() {
  const entry = history.value.shift()
  if (!entry) return
  const restored = [...pages.value]
  for (const item of entry.pages) restored.splice(Math.min(item.index, restored.length), 0, item.page)
  pages.value = restored
  const existingDocuments = new Set(documents.value.map((document) => document.id))
  documents.value.push(...entry.documents.filter((document) => !existingDocuments.has(document.id)))
  notice.value = `已恢复 ${entry.pages.length} 页`
}

function clearAll() {
  if (!pages.value.length) return
  history.value.unshift({
    pages: pages.value.map((page, index) => ({ page: { ...page, selected: false }, index })),
    documents: [...documents.value],
  })
  history.value = history.value.slice(0, 10)
  pages.value = []
  documents.value = []
  pageRange.value = ''
  notice.value = '已清空页面，可撤销最近一次删除'
}

function cleanupDocuments() {
  const active = new Set(pages.value.map((page) => page.documentId))
  documents.value = documents.value.filter((document) => active.has(document.id))
}

function startDrag(index, event) {
  draggedIndex.value = index
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', pages.value[index].id)
}

function finishDrop(index, event) {
  if (event.dataTransfer?.files?.length) {
    resetDrag()
    onDrop(event)
    return
  }
  if (draggedIndex.value === null || draggedIndex.value === index) {
    resetDrag()
    return
  }
  const next = [...pages.value]
  const [moving] = next.splice(draggedIndex.value, 1)
  const target = draggedIndex.value < index ? index - 1 : index
  next.splice(target, 0, moving)
  pages.value = next
  notice.value = '页面顺序已更新'
  lastOutputBytes.value = null
  resetDrag()
}

function resetDrag() {
  draggedIndex.value = null
  dropIndex.value = null
}

function movePage(index, direction) {
  const target = index + direction
  if (target < 0 || target >= pages.value.length) return
  const next = [...pages.value]
  ;[next[index], next[target]] = [next[target], next[index]]
  pages.value = next
  lastOutputBytes.value = null
}

function useSelectedRange() {
  const selected = pages.value.flatMap((page, index) => page.selected ? [index + 1] : [])
  if (!selected.length) return
  pageRange.value = compressNumbers(selected)
}

async function exportPdf() {
  if (!pages.value.length || busy.value) return
  error.value = ''
  let chosen
  try {
    const indices = parsePageRange(pageRange.value, pages.value.length)
    chosen = indices.map((index) => pages.value[index])
  } catch (rangeError) {
    error.value = rangeError.message
    return
  }

  busy.value = true
  const baseName = sanitizeFilename(outputName.value)
  try {
    if (exportMode.value === 'merge') {
      progress.value = `正在合并 ${chosen.length} 页…`
      const bytes = await buildMergedPdf(documents.value, chosen)
      lastOutputBytes.value = downloadBytes(bytes, `${baseName}.pdf`, 'application/pdf')
      notice.value = `已导出 ${chosen.length} 页 PDF · ${formatBytes(lastOutputBytes.value)}`
    } else {
      progress.value = `正在拆分 ${chosen.length} 页…`
      const bytes = await buildSplitZip(documents.value, chosen, baseName)
      lastOutputBytes.value = downloadBytes(bytes, `${baseName}-单页.zip`, 'application/zip')
      notice.value = `已导出 ${chosen.length} 个单页 PDF · ${formatBytes(lastOutputBytes.value)}`
    }
  } catch (exportError) {
    error.value = exportError.message || 'PDF 导出失败，请减少页面后重试'
  } finally {
    busy.value = false
    progress.value = ''
  }
}

function onDrop(event) {
  draggingFiles.value = false
  addFiles(event.dataTransfer?.files)
}

function markFileDrag(event) {
  if ([...(event.dataTransfer?.types || [])].includes('Files')) draggingFiles.value = true
}

function leaveFileDrag(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) draggingFiles.value = false
}

function compressNumbers(numbers) {
  const parts = []
  let start = numbers[0]
  let previous = numbers[0]
  for (let index = 1; index <= numbers.length; index += 1) {
    const current = numbers[index]
    if (current === previous + 1) {
      previous = current
      continue
    }
    parts.push(start === previous ? `${start}` : `${start}-${previous}`)
    start = current
    previous = current
  }
  return parts.join(',')
}

function pageTransform(page) {
  const sideways = page.rotation % 180 !== 0
  const scale = sideways ? Math.min(page.width / page.height, page.height / page.width, 1) : 1
  return `rotate(${page.rotation}deg) scale(${scale})`
}
</script>

<template>
  <div
    v-if="!pages.length"
    class="pdf-dropzone"
    :class="{ active: draggingFiles }"
    @dragenter.prevent="draggingFiles = true"
    @dragover.prevent="draggingFiles = true"
    @dragleave.prevent="draggingFiles = false"
    @drop.prevent="onDrop"
  >
    <input ref="fileInput" type="file" accept="application/pdf,.pdf" multiple hidden @change="addFiles($event.target.files)" />
    <div class="pdf-drop-symbol"><FileStack :size="31" /></div>
    <p class="section-kicker">PDF BINDERY</p>
    <h2>拖入 PDF，开始整理页面</h2>
    <p>可以同时选择多个文档，合并、拆分、排序和旋转都在当前浏览器中完成。</p>
    <button class="primary-button" type="button" :disabled="busy" @click="fileInput?.click()"><FilePlus :size="16" /> {{ busy ? '正在读取…' : '选择 PDF 文件' }}</button>
    <span><ShieldCheck :size="14" /> 单个不超过 60 MB，最多 200 页，文件不会上传</span>
    <p v-if="progress" class="pdf-progress"><Loader class="spin" :size="14" /> {{ progress }}</p>
    <p v-if="error" class="error-message" role="status">{{ error }}</p>
  </div>

  <div v-else class="pdf-studio" @dragenter.prevent="markFileDrag" @dragleave="leaveFileDrag" @dragover.prevent @drop.prevent="onDrop">
    <div class="pdf-commandbar">
      <input ref="fileInput" type="file" accept="application/pdf,.pdf" multiple hidden @change="addFiles($event.target.files)" />
      <button type="button" @click="fileInput?.click()"><FilePlus :size="15" /> 添加 PDF</button>
      <i />
      <button type="button" :class="{ active: allSelected }" @click="toggleAll"><CheckSquare :size="15" /> {{ allSelected ? '取消全选' : '全选' }}</button>
      <button type="button" :disabled="!selectedCount" @click="rotatePages()"><Rotate :size="15" /> 旋转所选</button>
      <button type="button" :disabled="!selectedCount" @click="removePages()"><Trash :size="15" /> 删除所选</button>
      <button type="button" :disabled="!history.length" @click="undoRemove"><Undo :size="15" /> 撤销删除</button>
      <button class="pdf-clear" type="button" @click="clearAll"><X :size="15" /> 清空</button>
    </div>

    <div class="pdf-workbench">
      <main class="pdf-pages-panel">
        <header>
          <div><strong>{{ pages.length }}</strong> 页 / {{ documents.length }} 个文档</div>
          <span>已选 {{ selectedCount }} 页 · 拖动卡片调整顺序</span>
        </header>
        <div
          class="pdf-page-grid"
          :class="{ receiving: draggingFiles }"
          @dragenter.self.prevent="draggingFiles = true"
          @drop.self.prevent="onDrop"
        >
          <article
            v-for="(page, index) in pages"
            :key="page.id"
            class="pdf-page-card"
            :class="{ selected: page.selected, 'drop-before': dropIndex === index && draggedIndex !== index }"
            draggable="true"
            @click="handlePageClick(index, $event)"
            @dragstart="startDrag(index, $event)"
            @dragenter.prevent="dropIndex = index"
            @dragend="resetDrag"
            @drop.prevent.stop="finishDrop(index, $event)"
          >
            <div class="pdf-page-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="pdf-paper" :style="{ aspectRatio: `${page.width} / ${page.height}` }">
              <img :src="page.thumbnail" :alt="`${page.documentName} 第 ${page.sourcePage} 页`" :style="{ transform: pageTransform(page) }" />
              <span v-if="page.selected"><CheckSquare :size="17" /></span>
            </div>
            <div class="pdf-page-meta">
              <strong :title="page.documentName">{{ page.documentName }}</strong>
              <span>原第 {{ page.sourcePage }} 页<span v-if="page.rotation"> · {{ page.rotation }}°</span></span>
            </div>
            <div class="pdf-page-actions">
              <button type="button" title="左移" :disabled="index === 0" @click.stop="movePage(index, -1)"><ArrowLeft :size="13" /></button>
              <button type="button" title="右移" :disabled="index === pages.length - 1" @click.stop="movePage(index, 1)"><ArrowRight :size="13" /></button>
              <button type="button" title="旋转 90°" @click.stop="rotatePages(page)"><Rotate :size="13" /></button>
              <button type="button" title="删除页面" @click.stop="removePages(page)"><Trash :size="13" /></button>
            </div>
          </article>
          <button class="pdf-add-tile" type="button" @click="fileInput?.click()"><FilePlus :size="22" /><span>继续添加 PDF</span></button>
        </div>
      </main>

      <aside class="pdf-export-panel">
        <div class="pdf-export-heading"><span>EXPORT</span><strong>导出文档</strong></div>
        <section>
          <label for="pdf-output-name">文件名</label>
          <div class="pdf-name-field"><input id="pdf-output-name" v-model="outputName" maxlength="80" /><span>{{ exportMode === 'merge' ? '.pdf' : '.zip' }}</span></div>
        </section>
        <section>
          <label for="pdf-range">页面范围</label>
          <input id="pdf-range" v-model="pageRange" class="pdf-range-field" :placeholder="`留空表示全部 1-${pages.length}`" />
          <div class="pdf-range-note"><span>{{ rangeSummary }}</span><button type="button" :disabled="!selectedCount" @click="useSelectedRange">使用已选页</button></div>
          <small>示例：1-3, 6, 9-</small>
        </section>
        <section>
          <label>导出方式</label>
          <div class="pdf-mode-tabs">
            <button type="button" :class="{ active: exportMode === 'merge' }" @click="exportMode = 'merge'">合并 PDF</button>
            <button type="button" :class="{ active: exportMode === 'split' }" @click="exportMode = 'split'">单页 ZIP</button>
          </div>
          <p>{{ exportMode === 'merge' ? '按当前页面顺序生成一个 PDF。' : '每页生成独立 PDF，并打包为 ZIP。' }}</p>
        </section>
        <div class="pdf-output-summary">
          <span>输入总计</span><strong>{{ formatBytes(totalBytes) }}</strong>
          <span>最近导出</span><strong>{{ lastOutputBytes === null ? '尚未导出' : formatBytes(lastOutputBytes) }}</strong>
        </div>
        <button class="pdf-export-button" type="button" :disabled="busy || rangeSummary === '范围有误'" @click="exportPdf">
          <Loader v-if="busy" class="spin" :size="16" /><Download v-else :size="16" /> {{ busy ? '正在处理…' : exportMode === 'merge' ? '下载合并 PDF' : '下载单页 ZIP' }}
        </button>
      </aside>
    </div>

    <footer class="pdf-statusbar">
      <p :class="{ error }">{{ error || progress || notice }}</p>
      <span><ShieldCheck :size="14" /> 文档仅保留在当前页面内存中</span>
    </footer>
  </div>
</template>
