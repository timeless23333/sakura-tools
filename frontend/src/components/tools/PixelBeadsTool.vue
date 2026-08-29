<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import {
  CropIcon as Crop,
  DownloadIcon as Download,
  EraserIcon as Eraser,
  FileImageIcon as FileImage,
  FileTextIcon as FileText,
  Grid3X3Icon as Grid3X3,
  ImagePlusIcon as ImagePlus,
  PaintbrushIcon as Paintbrush,
  PipetteIcon as Pipette,
  Redo2Icon as Redo,
  RefreshCwIcon as Refresh,
  ShieldCheckIcon as ShieldCheck,
  Undo2Icon as Undo,
  UploadCloudIcon as UploadCloud,
} from '@lucide/vue'
import { palettes, getPalette } from '../../features/pixel-beads/core/palettes'
import { decodeImage, drawCropPreview, quantizeImage } from '../../features/pixel-beads/core/image'
import { countColors, drawBeadGrid } from '../../features/pixel-beads/core/render'
import { exportPdf, exportPng } from '../../features/pixel-beads/core/export'

const fileInput = ref(null)
const cropCanvas = ref(null)
const beadCanvas = ref(null)
const sourceImage = shallowRef(null)
const sourceName = ref('')
const error = ref('')
const busy = ref(false)
const draggingFile = ref(false)
const cells = shallowRef(new Int16Array())
const gridSize = reactive({ columns: 0, rows: 0 })
const settings = reactive({
  columns: 48,
  rows: 48,
  zoom: 1,
  focusX: 50,
  focusY: 50,
  detail: 32,
  saturation: 106,
  contrast: 104,
  brightness: 100,
  beadSize: 5,
  paletteId: palettes[0].id,
})
const activeTool = ref('brush')
const selectedColor = ref(0)
const canvasCellSize = ref(16)
const showGrid = ref(true)
const previewMode = ref('pixel')
const past = ref([])
const future = ref([])
let strokeCells = null
let lastCell = -1
let renderFrame = 0

const palette = computed(() => getPalette(settings.paletteId))
const statistics = computed(() => countColors(cells.value, palette.value.colors))
const beadCount = computed(() => statistics.value.reduce((total, item) => total + item.count, 0))
const physicalSize = computed(() => ({
  width: (gridSize.columns * settings.beadSize / 10).toFixed(1),
  height: (gridSize.rows * settings.beadSize / 10).toFixed(1),
}))
const canUndo = computed(() => past.value.length > 0)
const canRedo = computed(() => future.value.length > 0)
const selected = computed(() => palette.value.colors[selectedColor.value])

function clampSettings() {
  settings.columns = Math.max(8, Math.min(150, Number(settings.columns) || 48))
  settings.rows = Math.max(8, Math.min(150, Number(settings.rows) || 48))
}

async function receiveFile(file) {
  error.value = ''
  if (!file || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    error.value = '请选择 JPG、PNG 或 WebP 图片'
    return
  }
  if (file.size > 12 * 1024 * 1024) {
    error.value = '图片不能超过 12 MB'
    return
  }
  busy.value = true
  try {
    sourceImage.value?.close?.()
    sourceImage.value = await decodeImage(file)
    sourceName.value = file.name
    settings.zoom = 1
    settings.focusX = 50
    settings.focusY = 50
    await nextTick()
    updateCropPreview()
    generatePattern()
  } catch (uploadError) {
    error.value = uploadError.message || '图片读取失败'
  } finally {
    busy.value = false
  }
}

function onFileChange(event) {
  receiveFile(event.target.files?.[0])
  event.target.value = ''
}

function onDrop(event) {
  draggingFile.value = false
  receiveFile(event.dataTransfer?.files?.[0])
}

function updateCropPreview() {
  if (!sourceImage.value) return
  clampSettings()
  drawCropPreview(cropCanvas.value, sourceImage.value, settings)
}

function generatePattern() {
  if (!sourceImage.value) return
  clampSettings()
  busy.value = true
  try {
    const nextCells = quantizeImage(sourceImage.value, settings, palette.value.colors)
    gridSize.columns = settings.columns
    gridSize.rows = settings.rows
    cells.value = nextCells
    selectedColor.value = nextCells.find((value) => value >= 0) ?? 0
    past.value = []
    future.value = []
    nextTick(scheduleRender)
  } finally {
    busy.value = false
  }
}

function renderEditor() {
  drawBeadGrid(beadCanvas.value, cells.value, gridSize.columns, gridSize.rows, palette.value.colors, {
    cellSize: canvasCellSize.value,
    showGrid: showGrid.value,
    mode: previewMode.value,
  })
}

function scheduleRender() {
  if (renderFrame) return
  renderFrame = requestAnimationFrame(() => {
    renderFrame = 0
    renderEditor()
  })
}

function snapshot() {
  past.value = [...past.value.slice(-39), new Int16Array(cells.value)]
  future.value = []
}

function undo() {
  if (!canUndo.value) return
  future.value = [new Int16Array(cells.value), ...future.value.slice(0, 39)]
  cells.value = past.value[past.value.length - 1]
  past.value = past.value.slice(0, -1)
  nextTick(scheduleRender)
}

function redo() {
  if (!canRedo.value) return
  past.value = [...past.value.slice(-39), new Int16Array(cells.value)]
  cells.value = future.value[0]
  future.value = future.value.slice(1)
  nextTick(scheduleRender)
}

function cellFromPointer(event) {
  const rect = beadCanvas.value.getBoundingClientRect()
  const x = (event.clientX - rect.left) * (beadCanvas.value.width / rect.width)
  const y = (event.clientY - rect.top) * (beadCanvas.value.height / rect.height)
  const column = Math.floor(x / canvasCellSize.value)
  const row = Math.floor(y / canvasCellSize.value)
  if (column < 0 || row < 0 || column >= gridSize.columns || row >= gridSize.rows) return -1
  return row * gridSize.columns + column
}

function applyAt(index) {
  if (index < 0 || index === lastCell) return
  lastCell = index
  if (activeTool.value === 'picker') {
    const picked = cells.value[index]
    if (picked >= 0) {
      selectedColor.value = picked
      activeTool.value = 'brush'
    }
    strokeCells = null
    return
  }
  const value = activeTool.value === 'eraser' ? -1 : selectedColor.value
  if (strokeCells[index] === value) return
  strokeCells[index] = value
  cells.value = new Int16Array(strokeCells)
  scheduleRender()
}

function beginStroke(event) {
  if (!cells.value.length) return
  event.preventDefault()
  beadCanvas.value.setPointerCapture?.(event.pointerId)
  lastCell = -1
  if (activeTool.value !== 'picker') snapshot()
  strokeCells = new Int16Array(cells.value)
  applyAt(cellFromPointer(event))
}

function continueStroke(event) {
  if (!strokeCells || !(event.buttons & 1)) return
  applyAt(cellFromPointer(event))
}

function endStroke() {
  strokeCells = null
  lastCell = -1
}

function chooseColor(index) {
  selectedColor.value = index
  activeTool.value = 'brush'
}

function fileBase() {
  const base = sourceName.value.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g, '-') || 'pattern'
  return `${base}-${gridSize.columns}x${gridSize.rows}`
}

watch(
  () => [settings.columns, settings.rows, settings.zoom, settings.focusX, settings.focusY],
  () => nextTick(updateCropPreview),
)
watch(() => settings.paletteId, () => {
  if (sourceImage.value) generatePattern()
})
watch([canvasCellSize, showGrid, previewMode], () => nextTick(scheduleRender))

function onKeyboardShortcut(event) {
  if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'z') return
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(event.target?.tagName)) return
  event.preventDefault()
  if (event.shiftKey) redo()
  else undo()
}

onMounted(() => window.addEventListener('keydown', onKeyboardShortcut))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyboardShortcut)
  if (renderFrame) cancelAnimationFrame(renderFrame)
  sourceImage.value?.close?.()
})
</script>

<template>
  <div class="bead-studio">
    <div
      v-if="!sourceImage"
      class="bead-upload"
      :class="{ dragging: draggingFile }"
      @dragenter.prevent="draggingFile = true"
      @dragover.prevent
      @dragleave.prevent="draggingFile = false"
      @drop.prevent="onDrop"
    >
      <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp" hidden @change="onFileChange" />
      <span class="upload-symbol"><UploadCloud :size="34" :stroke-width="1.5" /></span>
      <p class="bead-kicker">LOCAL IMAGE WORKFLOW</p>
      <h2>从一张图片开始</h2>
      <p>拖入 JPG、PNG 或 WebP，图片只在当前浏览器中解码与处理。</p>
      <button class="primary-button" type="button" :disabled="busy" @click="fileInput?.click()">
        <ImagePlus :size="17" /> {{ busy ? '正在读取…' : '选择图片' }}
      </button>
      <small>最大 12 MB · 不上传服务器</small>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>

    <template v-else>
      <div class="bead-flow" aria-label="工作流程">
        <span class="done">01 图片</span><i />
        <span class="done">02 裁剪</span><i />
        <span :class="{ done: cells.length }">03 配色</span><i />
        <span :class="{ done: cells.length }">04 编辑导出</span>
      </div>

      <div class="bead-workbench">
        <aside class="bead-sidebar bead-source-panel">
          <div class="bead-panel-heading">
            <span><Crop :size="15" /> 图片与网格</span>
            <button type="button" @click="fileInput?.click()"><Refresh :size="13" /> 换图</button>
            <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp" hidden @change="onFileChange" />
          </div>
          <canvas ref="cropCanvas" class="crop-preview" aria-label="裁剪预览" />
          <p class="source-name" :title="sourceName">{{ sourceName }}</p>

          <div class="bead-field-row">
            <label>宽度 <input v-model.number="settings.columns" type="number" min="8" max="150" /></label>
            <span>×</span>
            <label>高度 <input v-model.number="settings.rows" type="number" min="8" max="150" /></label>
          </div>
          <label class="bead-range">
            <span>裁剪缩放 <b>{{ settings.zoom.toFixed(1) }}×</b></span>
            <input v-model.number="settings.zoom" type="range" min="1" max="3" step="0.1" />
          </label>
          <label class="bead-range">
            <span>水平取景 <b>{{ settings.focusX }}%</b></span>
            <input v-model.number="settings.focusX" type="range" min="0" max="100" />
          </label>
          <label class="bead-range">
            <span>垂直取景 <b>{{ settings.focusY }}%</b></span>
            <input v-model.number="settings.focusY" type="range" min="0" max="100" />
          </label>

          <span class="bead-label">成像调整</span>
          <label class="bead-range compact-range">
            <span>细节增强 <b>{{ settings.detail }}</b></span>
            <input v-model.number="settings.detail" type="range" min="0" max="80" />
          </label>
          <label class="bead-range compact-range">
            <span>饱和度 <b>{{ settings.saturation }}%</b></span>
            <input v-model.number="settings.saturation" type="range" min="70" max="140" />
          </label>
          <label class="bead-range compact-range">
            <span>对比度 <b>{{ settings.contrast }}%</b></span>
            <input v-model.number="settings.contrast" type="range" min="80" max="130" />
          </label>
          <label class="bead-range compact-range">
            <span>亮度 <b>{{ settings.brightness }}%</b></span>
            <input v-model.number="settings.brightness" type="range" min="80" max="120" />
          </label>

          <span class="bead-label">拼豆规格</span>
          <div class="bead-segmented">
            <button type="button" :class="{ active: settings.beadSize === 5 }" @click="settings.beadSize = 5">5 mm</button>
            <button type="button" :class="{ active: settings.beadSize === 2.6 }" @click="settings.beadSize = 2.6">2.6 mm</button>
          </div>
          <label class="bead-select">
            <span>品牌色板</span>
            <select v-model="settings.paletteId">
              <option v-for="item in palettes" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </label>
          <button class="primary-button bead-generate" type="button" :disabled="busy" @click="generatePattern">
            <Grid3X3 :size="16" /> {{ busy ? '生成中…' : '应用并重新生成' }}
          </button>
          <p class="palette-note">MARD 色号来自 MIT 社区校准数据；屏幕颜色与实物、批次可能存在差异。</p>
        </aside>

        <section class="bead-editor-panel">
          <div class="bead-toolbar">
            <div class="bead-tool-group" aria-label="绘制工具">
              <button type="button" :class="{ active: activeTool === 'brush' }" title="画笔" @click="activeTool = 'brush'"><Paintbrush :size="17" /><span>画笔</span></button>
              <button type="button" :class="{ active: activeTool === 'eraser' }" title="橡皮擦" @click="activeTool = 'eraser'"><Eraser :size="17" /><span>擦除</span></button>
              <button type="button" :class="{ active: activeTool === 'picker' }" title="吸色" @click="activeTool = 'picker'"><Pipette :size="17" /><span>吸色</span></button>
            </div>
            <div class="bead-tool-group compact">
              <button type="button" :disabled="!canUndo" title="撤销" @click="undo"><Undo :size="17" /></button>
              <button type="button" :disabled="!canRedo" title="重做" @click="redo"><Redo :size="17" /></button>
            </div>
            <label class="canvas-zoom">缩放 <input v-model.number="canvasCellSize" type="range" min="9" max="25" /></label>
            <div class="preview-toggle" aria-label="预览样式">
              <button type="button" :class="{ active: previewMode === 'pixel' }" @click="previewMode = 'pixel'">色块</button>
              <button type="button" :class="{ active: previewMode === 'bead' }" @click="previewMode = 'bead'">拼豆</button>
            </div>
            <button class="grid-toggle" type="button" :class="{ active: showGrid }" @click="showGrid = !showGrid"><Grid3X3 :size="16" /> 网格</button>
          </div>

          <div class="bead-canvas-viewport">
            <canvas
              ref="beadCanvas"
              class="bead-canvas"
              aria-label="拼豆编辑画布"
              @pointerdown="beginStroke"
              @pointermove="continueStroke"
              @pointerup="endStroke"
              @pointercancel="endStroke"
              @pointerleave="endStroke"
            />
          </div>
          <div class="bead-canvas-status">
            <span>{{ gridSize.columns }} × {{ gridSize.rows }} 颗</span>
            <span>{{ physicalSize.width }} × {{ physicalSize.height }} cm</span>
            <span>{{ beadCount }} 颗豆</span>
            <span><i class="selected-swatch" :style="{ background: selected?.hex }" />{{ selected?.name }}</span>
          </div>
        </section>

        <aside class="bead-sidebar bead-color-panel">
          <div class="bead-panel-heading"><span><Pipette :size="15" /> 颜色与用量</span><b>{{ statistics.length }} 色</b></div>
          <div class="bead-palette" aria-label="拼豆色板">
            <button
              v-for="(color, index) in palette.colors"
              :key="color.id"
              type="button"
              :class="{ active: selectedColor === index }"
              :style="{ '--swatch': color.hex }"
              :title="`${color.name} / ${color.code}`"
              @click="chooseColor(index)"
            ><span /></button>
          </div>

          <div class="bead-usage">
            <button v-for="item in statistics" :key="item.id" type="button" @click="chooseColor(item.index)">
              <i :style="{ background: item.hex }" />
              <span><b>{{ item.name }}</b><small>{{ item.code }}</small></span>
              <strong>{{ item.count }}</strong>
            </button>
          </div>

          <div class="bead-export">
            <span class="bead-label">导出图纸</span>
            <button type="button" @click="exportPng(cells, gridSize.columns, gridSize.rows, palette.colors, `${fileBase()}.png`, { mode: previewMode })"><FileImage :size="16" /> PNG 图片</button>
            <button type="button" @click="exportPdf(cells, gridSize.columns, gridSize.rows, palette.colors, `${fileBase()}.pdf`, { mode: previewMode })"><FileText :size="16" /> PDF 图纸</button>
          </div>
          <p class="local-processing"><ShieldCheck :size="14" /> 图片与编辑数据仅保留在当前页面</p>
        </aside>
      </div>
    </template>
  </div>
</template>
