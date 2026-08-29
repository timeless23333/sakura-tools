<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import 'katex/dist/katex.min.css'
import {
  BoldIcon as Bold,
  Code2Icon as Code,
  Columns2Icon as Columns,
  DownloadIcon as Download,
  EyeIcon as Eye,
  Heading2Icon as Heading,
  ImageIcon as Image,
  ItalicIcon as Italic,
  LinkIcon as Link,
  ListIcon as List,
  ListOrderedIcon as ListOrdered,
  PrinterIcon as Printer,
  QuoteIcon as Quote,
  Table2Icon as Table,
  UploadIcon as Upload,
} from '@lucide/vue'
import { markdownTitle, renderMarkdown } from '../../features/markdown/core/markdown'

const STORAGE_KEY = 'sakura-tools-markdown-draft-v1'
const SPLIT_KEY = 'sakura-tools-markdown-split-v1'
const defaultDocument = `# 一份新的 Markdown 文档

在左侧开始写作，右侧会实时生成适合阅读与打印的预览。

## 支持的内容

- **粗体**、*斜体*、~~删除线~~和行内代码
- 引用、有序列表、任务列表
- 链接、图片、表格与代码块

> 内容只保存在当前浏览器中，不会上传服务器。

| 功能 | 状态 |
| --- | --- |
| 实时预览 | 已启用 |
| PDF 导出 | 已启用 |

\`\`\`javascript
const message = 'Hello, Sakura Tools'
console.log(message)
\`\`\`
`

const source = ref(defaultDocument)
const viewMode = ref('split')
const editor = ref(null)
const preview = ref(null)
const workbench = ref(null)
const fileInput = ref(null)
const fileName = ref('')
const status = ref('自动保存已开启')
const splitPercent = ref(50)
const resizing = ref(false)
let scrollOrigin = ''
let scrollUnlockFrame = 0

const rendered = computed(() => renderMarkdown(source.value))
const title = computed(() => markdownTitle(source.value))
const lineCount = computed(() => source.value ? source.value.split(/\r?\n/).length : 0)
const characterCount = computed(() => source.value.replace(/\s/g, '').length)
const readingMinutes = computed(() => Math.max(1, Math.ceil(characterCount.value / 500)))

function selectEditor(start, end) {
  nextTick(() => {
    editor.value?.focus()
    editor.value?.setSelectionRange(start, end)
  })
}

function replaceSelection(replacement, selectStart, selectEnd) {
  const textarea = editor.value
  const start = textarea?.selectionStart ?? source.value.length
  const end = textarea?.selectionEnd ?? start
  source.value = `${source.value.slice(0, start)}${replacement}${source.value.slice(end)}`
  selectEditor(start + selectStart, start + selectEnd)
}

function wrapSelection(before, after, placeholder) {
  const textarea = editor.value
  const start = textarea?.selectionStart ?? source.value.length
  const end = textarea?.selectionEnd ?? start
  const selected = source.value.slice(start, end) || placeholder
  replaceSelection(`${before}${selected}${after}`, before.length, before.length + selected.length)
}

function prefixLines(prefix, placeholder) {
  const textarea = editor.value
  const selectionStart = textarea?.selectionStart ?? source.value.length
  const selectionEnd = textarea?.selectionEnd ?? selectionStart
  const lineStart = source.value.lastIndexOf('\n', selectionStart - 1) + 1
  let lineEnd = source.value.indexOf('\n', selectionEnd)
  if (lineEnd < 0) lineEnd = source.value.length
  const selected = source.value.slice(lineStart, lineEnd) || placeholder
  const replacement = selected.split('\n').map((line) => `${prefix}${line}`).join('\n')
  source.value = `${source.value.slice(0, lineStart)}${replacement}${source.value.slice(lineEnd)}`
  selectEditor(lineStart, lineStart + replacement.length)
}

function insertBlock(block, cursorOffset = block.length) {
  const textarea = editor.value
  const start = textarea?.selectionStart ?? source.value.length
  const prefix = start > 0 && source.value[start - 1] !== '\n' ? '\n\n' : ''
  replaceSelection(`${prefix}${block}`, prefix.length + cursorOffset, prefix.length + cursorOffset)
}

function format(type) {
  const actions = {
    bold: () => wrapSelection('**', '**', '粗体文本'),
    italic: () => wrapSelection('*', '*', '斜体文本'),
    heading: () => prefixLines('## ', '二级标题'),
    quote: () => prefixLines('> ', '引用内容'),
    list: () => prefixLines('- ', '列表项目'),
    ordered: () => prefixLines('1. ', '列表项目'),
    link: () => wrapSelection('[', '](https://example.com)', '链接文字'),
    image: () => insertBlock('![图片说明](https://example.com/image.png)', 2),
    code: () => wrapSelection('`', '`', 'code'),
    table: () => insertBlock('| 列一 | 列二 |\n| --- | --- |\n| 内容 | 内容 |'),
  }
  actions[type]?.()
}

function downloadFile(content, name, type) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = name
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function exportMarkdown() {
  downloadFile(source.value, `${title.value}.md`, 'text/markdown;charset=utf-8')
  status.value = 'Markdown 文件已导出'
}

async function importMarkdown(event) {
  const file = event.target.files?.[0]
  event.target.value = ''
  if (!file) return
  if (file.size > 2 * 1024 * 1024) {
    status.value = '文件超过 2 MB，未打开'
    return
  }
  source.value = await file.text()
  fileName.value = file.name
  status.value = `已打开 ${file.name}`
}

function exportPdf() {
  const originalTitle = document.title
  document.title = title.value
  document.documentElement.classList.add('printing-markdown')
  window.print()
  document.documentElement.classList.remove('printing-markdown')
  document.title = originalTitle
}

function handleEditorKeydown(event) {
  if (event.key === 'Tab') {
    event.preventDefault()
    replaceSelection('  ', 2, 2)
    return
  }
  if (!(event.ctrlKey || event.metaKey)) return
  if (event.key.toLowerCase() === 'b') {
    event.preventDefault()
    format('bold')
  } else if (event.key.toLowerCase() === 'i') {
    event.preventDefault()
    format('italic')
  } else if (event.key.toLowerCase() === 's') {
    event.preventDefault()
    exportMarkdown()
  }
}

function syncScroll(sourcePane, targetPane, origin) {
  if (!sourcePane || !targetPane || viewMode.value !== 'split') return
  if (scrollOrigin && scrollOrigin !== origin) return
  scrollOrigin = origin
  const maximum = sourcePane.scrollHeight - sourcePane.clientHeight
  const progress = maximum > 0 ? sourcePane.scrollTop / maximum : 0
  targetPane.scrollTop = progress * Math.max(0, targetPane.scrollHeight - targetPane.clientHeight)
  if (scrollUnlockFrame) cancelAnimationFrame(scrollUnlockFrame)
  scrollUnlockFrame = requestAnimationFrame(() => { scrollOrigin = '' })
}

function syncPreviewScroll(event) {
  syncScroll(event.currentTarget, preview.value, 'editor')
}

function syncEditorScroll(event) {
  syncScroll(event.currentTarget, editor.value, 'preview')
}

function resizeSplit(event) {
  if (!resizing.value || !workbench.value) return
  const rect = workbench.value.getBoundingClientRect()
  splitPercent.value = Math.max(24, Math.min(76, ((event.clientX - rect.left) / rect.width) * 100))
}

function endResize() {
  if (!resizing.value) return
  resizing.value = false
  document.body.classList.remove('markdown-resizing')
  localStorage.setItem(SPLIT_KEY, String(splitPercent.value))
  window.removeEventListener('pointermove', resizeSplit)
  window.removeEventListener('pointerup', endResize)
}

function beginResize(event) {
  if (viewMode.value !== 'split') return
  event.preventDefault()
  resizing.value = true
  document.body.classList.add('markdown-resizing')
  window.addEventListener('pointermove', resizeSplit)
  window.addEventListener('pointerup', endResize)
}

function resizeWithKeyboard(event) {
  if (!['ArrowLeft', 'ArrowRight', 'Home'].includes(event.key)) return
  event.preventDefault()
  if (event.key === 'Home') splitPercent.value = 50
  else splitPercent.value = Math.max(24, Math.min(76, splitPercent.value + (event.key === 'ArrowLeft' ? -2 : 2)))
}

watch(source, (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value)
    status.value = '草稿已自动保存在浏览器'
  } catch {
    status.value = '浏览器存储空间不足，草稿未自动保存'
  }
})

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved !== null) source.value = saved
  const savedSplit = Number(localStorage.getItem(SPLIT_KEY))
  if (savedSplit >= 24 && savedSplit <= 76) splitPercent.value = savedSplit
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', resizeSplit)
  window.removeEventListener('pointerup', endResize)
  document.body.classList.remove('markdown-resizing')
  if (scrollUnlockFrame) cancelAnimationFrame(scrollUnlockFrame)
})
</script>

<template>
  <div class="markdown-studio" :class="[`mode-${viewMode}`, { resizing }]">
    <header class="markdown-commandbar">
      <div class="markdown-format-tools" aria-label="Markdown 格式工具">
        <button type="button" title="粗体 Ctrl+B" @click="format('bold')"><Bold :size="15" /></button>
        <button type="button" title="斜体 Ctrl+I" @click="format('italic')"><Italic :size="15" /></button>
        <button type="button" title="二级标题" @click="format('heading')"><Heading :size="15" /></button>
        <button type="button" title="引用" @click="format('quote')"><Quote :size="15" /></button>
        <button type="button" title="无序列表" @click="format('list')"><List :size="15" /></button>
        <button type="button" title="有序列表" @click="format('ordered')"><ListOrdered :size="15" /></button>
        <button type="button" title="链接" @click="format('link')"><Link :size="15" /></button>
        <button type="button" title="图片" @click="format('image')"><Image :size="15" /></button>
        <button type="button" title="行内代码" @click="format('code')"><Code :size="15" /></button>
        <button type="button" title="表格" @click="format('table')"><Table :size="15" /></button>
      </div>

      <div class="markdown-view-toggle" aria-label="编辑器视图">
        <button type="button" :class="{ active: viewMode === 'edit' }" title="仅编辑" @click="viewMode = 'edit'"><Code :size="14" /></button>
        <button type="button" :class="{ active: viewMode === 'split' }" title="分栏" @click="viewMode = 'split'"><Columns :size="14" /></button>
        <button type="button" :class="{ active: viewMode === 'preview' }" title="仅预览" @click="viewMode = 'preview'"><Eye :size="14" /></button>
      </div>

      <div class="markdown-file-actions">
        <input ref="fileInput" type="file" accept=".md,.markdown,text/markdown,text/plain" hidden @change="importMarkdown">
        <button type="button" @click="fileInput?.click()"><Upload :size="14" /> 打开</button>
        <button type="button" @click="exportMarkdown"><Download :size="14" /> MD</button>
        <button class="pdf-button" type="button" @click="exportPdf"><Printer :size="14" /> 导出 PDF</button>
      </div>
    </header>

    <main ref="workbench" class="markdown-workbench" :style="{ '--editor-percent': `${splitPercent}%` }">
      <section class="markdown-editor-pane">
        <div class="markdown-pane-heading">
          <span>MARKDOWN</span>
          <small>{{ lineCount }} 行 · {{ characterCount }} 字符</small>
        </div>
        <textarea
          ref="editor"
          v-model="source"
          aria-label="Markdown 编辑区"
          spellcheck="true"
          @keydown="handleEditorKeydown"
          @scroll="syncPreviewScroll"
        />
      </section>

      <div
        class="markdown-resizer"
        role="separator"
        aria-label="调整编辑区与预览区宽度"
        aria-orientation="vertical"
        :aria-valuenow="Math.round(splitPercent)"
        tabindex="0"
        @pointerdown="beginResize"
        @dblclick="splitPercent = 50"
        @keydown="resizeWithKeyboard"
      ><i /></div>

      <section ref="preview" class="markdown-preview-pane" @scroll="syncEditorScroll">
        <div class="markdown-pane-heading">
          <span>PREVIEW</span>
          <small>约 {{ readingMinutes }} 分钟阅读</small>
        </div>
        <article class="markdown-print-root markdown-preview" v-html="rendered" />
      </section>
    </main>

    <footer class="markdown-statusbar">
      <span>{{ fileName || `${title}.md` }}</span>
      <span>{{ status }}</span>
      <span>仅允许安全表格 HTML</span>
    </footer>
  </div>
</template>
