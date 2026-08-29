<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import {
  BoxSelectIcon as BoxSelect,
  CropIcon as Crop,
  EraserIcon as Eraser,
  FileImageIcon as FileImage,
  FileTextIcon as FileText,
  FlipHorizontal2Icon as FlipHorizontal,
  FlipVertical2Icon as FlipVertical,
  FolderOpenIcon as FolderOpen,
  Grid3X3Icon as Grid3X3,
  ImagePlusIcon as ImagePlus,
  ListChecksIcon as ListChecks,
  Maximize2Icon as Fit,
  PaintBucketIcon as PaintBucket,
  PaintbrushIcon as Paintbrush,
  PipetteIcon as Pipette,
  Redo2Icon as Redo,
  RefreshCwIcon as Refresh,
  ReplaceAllIcon as ReplaceAll,
  SaveIcon as Save,
  ShieldCheckIcon as ShieldCheck,
  SparklesIcon as Sparkles,
  SquareIcon as Square,
  TagsIcon as Tags,
  Undo2Icon as Undo,
  UploadCloudIcon as UploadCloud,
} from '@lucide/vue'
import { palettes, getPalette } from '../../features/pixel-beads/core/palettes'
import { decodeImage, drawCropPreview, quantizeImage } from '../../features/pixel-beads/core/image'
import { countColors, drawBeadGrid } from '../../features/pixel-beads/core/render'
import { exportPdf, exportPng } from '../../features/pixel-beads/core/export'
import {
  fillRectangle,
  floodFill,
  mirrorCells,
  reducePaletteUsage,
  removeSpeckles,
  replaceColor,
  suggestColorMerges,
  symmetricIndices,
} from '../../features/pixel-beads/core/editor'
import { createProject, downloadTextFile, materialListCsv, parseProject } from '../../features/pixel-beads/core/project'

const fileInput = ref(null)
const projectInput = ref(null)
const cropCanvas = ref(null)
const beadCanvas = ref(null)
const canvasViewport = ref(null)
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
  maxColors: 0,
  beadSize: 5,
  paletteId: palettes[0].id,
})
const activeTool = ref('brush')
const selectedColor = ref(0)
const canvasCellSize = ref(16)
const showGrid = ref(true)
const showCodes = ref(false)
const previewMode = ref('pixel')
const selection = ref(null)
const symmetry = reactive({ horizontal: false, vertical: false })
const inventory = reactive({})
const past = ref([])
const future = ref([])
let strokeCells = null
let lastCell = -1
let dragRegion = null
let renderFrame = 0
const sizePresets = [29, 48, 52, 80, 100]

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
const mergeSuggestions = computed(() => suggestColorMerges(cells.value, palette.value.colors))
const shortageTotal = computed(() => statistics.value.reduce((total, item) => {
  const owned = Math.max(0, Number(inventory[item.id]) || 0)
  return total + Math.max(0, item.count - owned)
}, 0))

function clampSettings() {
  settings.columns = Math.max(8, Math.min(150, Number(settings.columns) || 48))
  settings.rows = Math.max(8, Math.min(150, Number(settings.rows) || 48))
}

function applySizePreset(size) {
  settings.columns = size
  settings.rows = size
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
    nextTick(() => {
      fitCanvas()
      scheduleRender()
    })
  } finally {
    busy.value = false
  }
}

function renderEditor() {
  drawBeadGrid(beadCanvas.value, cells.value, gridSize.columns, gridSize.rows, palette.value.colors, {
    cellSize: canvasCellSize.value,
    showGrid: showGrid.value,
    showCodes: showCodes.value,
    mode: previewMode.value,
    selection: selection.value,
    symmetry,
  })
}

function scheduleRender() {
  if (renderFrame) return
  renderFrame = requestAnimationFrame(() => {
    renderFrame = 0
    renderEditor()
  })
}

function fitCanvas() {
  if (!canvasViewport.value || !gridSize.columns || !gridSize.rows) return
  const availableWidth = Math.max(240, canvasViewport.value.clientWidth - 56)
  const availableHeight = Math.max(240, canvasViewport.value.clientHeight - 56)
  canvasCellSize.value = Math.max(4, Math.min(25, Math.floor(Math.min(
    availableWidth / gridSize.columns,
    availableHeight / gridSize.rows,
  ))))
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

function pointFromIndex(index) {
  return { column: index % gridSize.columns, row: Math.floor(index / gridSize.columns) }
}

function commit(nextCells) {
  snapshot()
  cells.value = nextCells
  nextTick(scheduleRender)
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
  const targets = symmetricIndices(index, gridSize.columns, gridSize.rows, symmetry)
  if (targets.every((target) => strokeCells[target] === value)) return
  for (const target of targets) strokeCells[target] = value
  cells.value = new Int16Array(strokeCells)
  scheduleRender()
}

function beginStroke(event) {
  if (!cells.value.length) return
  event.preventDefault()
  beadCanvas.value.setPointerCapture?.(event.pointerId)
  lastCell = -1
  const index = cellFromPointer(event)
  if (index < 0) return
  if (activeTool.value === 'bucket') {
    commit(floodFill(cells.value, gridSize.columns, gridSize.rows, index, selectedColor.value, symmetry))
    return
  }
  if (activeTool.value === 'replace') {
    commit(replaceColor(cells.value, cells.value[index], selectedColor.value))
    return
  }
  if (activeTool.value === 'rectangle' || activeTool.value === 'select') {
    const point = pointFromIndex(index)
    dragRegion = { startColumn: point.column, startRow: point.row, endColumn: point.column, endRow: point.row }
    selection.value = { ...dragRegion }
    if (activeTool.value === 'rectangle') snapshot()
    scheduleRender()
    return
  }
  if (activeTool.value !== 'picker') snapshot()
  strokeCells = new Int16Array(cells.value)
  applyAt(index)
}

function continueStroke(event) {
  if (!(event.buttons & 1)) return
  const index = cellFromPointer(event)
  if (dragRegion && index >= 0) {
    const point = pointFromIndex(index)
    dragRegion.endColumn = point.column
    dragRegion.endRow = point.row
    selection.value = { ...dragRegion }
    scheduleRender()
    return
  }
  if (strokeCells) applyAt(index)
}

function endStroke() {
  if (dragRegion && activeTool.value === 'rectangle') {
    cells.value = fillRectangle(cells.value, gridSize.columns, gridSize.rows, dragRegion, selectedColor.value, symmetry)
    selection.value = null
  }
  dragRegion = null
  strokeCells = null
  lastCell = -1
  scheduleRender()
}

function mirrorPattern(axis) {
  if (!cells.value.length) return
  commit(mirrorCells(cells.value, gridSize.columns, gridSize.rows, axis, selection.value))
}

function cleanSpeckles() {
  if (!cells.value.length) return
  commit(removeSpeckles(cells.value, gridSize.columns, gridSize.rows, 2))
}

function enforceColorLimit() {
  if (!cells.value.length || !settings.maxColors) return
  commit(reducePaletteUsage(cells.value, palette.value.colors, settings.maxColors))
}

function applyMerge(suggestion) {
  commit(replaceColor(cells.value, suggestion.source.index, suggestion.target.index))
}

function saveProject() {
  if (!cells.value.length) return
  const project = createProject({
    cells: cells.value,
    columns: gridSize.columns,
    rows: gridSize.rows,
    paletteId: palette.value.id,
    settings,
    inventory,
  })
  downloadTextFile(JSON.stringify(project), `${fileBase()}.sakurabeads`)
}

async function openProject(event) {
  const file = event.target.files?.[0]
  event.target.value = ''
  if (!file) return
  error.value = ''
  try {
    const project = parseProject(await file.text(), palettes)
    sourceImage.value?.close?.()
    sourceImage.value = null
    sourceName.value = file.name.replace(/\.sakurabeads$/i, '')
    settings.paletteId = project.palette.id
    settings.columns = project.columns
    settings.rows = project.rows
    Object.assign(settings, project.settings || {})
    gridSize.columns = project.columns
    gridSize.rows = project.rows
    cells.value = project.cells
    for (const key of Object.keys(inventory)) delete inventory[key]
    Object.assign(inventory, project.inventory || {})
    selectedColor.value = project.cells.find((value) => value >= 0) ?? 0
    selection.value = null
    past.value = []
    future.value = []
    await nextTick()
    fitCanvas()
    scheduleRender()
  } catch (projectError) {
    error.value = projectError.message || '工程文件读取失败'
  }
}

function exportMaterials() {
  downloadTextFile(materialListCsv(statistics.value, inventory), `${fileBase()}-材料清单.csv`, 'text/csv;charset=utf-8')
}

function chooseColor(index) {
  selectedColor.value = index
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
watch(
  [canvasCellSize, showGrid, showCodes, previewMode, selection, () => symmetry.horizontal, () => symmetry.vertical],
  () => nextTick(scheduleRender),
)

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
      v-if="!sourceImage && !cells.length"
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
      <button class="project-open-button" type="button" @click="projectInput?.click()"><FolderOpen :size="16" /> 打开拼豆工程</button>
      <input ref="projectInput" type="file" accept=".sakurabeads,application/json" hidden @change="openProject" />
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
          <canvas v-if="sourceImage" ref="cropCanvas" class="crop-preview" aria-label="裁剪预览" />
          <div v-else class="project-preview"><FolderOpen :size="22" /><span>已打开工程网格</span></div>
          <p class="source-name" :title="sourceName">{{ sourceName }}</p>
          <p v-if="error" class="error-message">{{ error }}</p>

          <div class="bead-field-row">
            <label>宽度 <input v-model.number="settings.columns" type="number" min="8" max="150" /></label>
            <span>×</span>
            <label>高度 <input v-model.number="settings.rows" type="number" min="8" max="150" /></label>
          </div>
          <div class="bead-size-presets" aria-label="常用方形网格预设">
            <button
              v-for="size in sizePresets"
              :key="size"
              type="button"
              :class="{ active: settings.columns === size && settings.rows === size }"
              @click="applySizePreset(size)"
            >{{ size }}</button>
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
          <label class="bead-select">
            <span>颜色数限制</span>
            <select v-model.number="settings.maxColors">
              <option :value="0">不限颜色</option>
              <option :value="10">最多 10 色</option>
              <option :value="20">最多 20 色</option>
              <option :value="30">最多 30 色</option>
              <option :value="40">最多 40 色</option>
              <option :value="60">最多 60 色</option>
            </select>
          </label>
          <div class="bead-optimize-actions">
            <button type="button" :disabled="!cells.length || !settings.maxColors" @click="enforceColorLimit"><Tags :size="14" /> 应用限色</button>
            <button type="button" :disabled="!cells.length" @click="cleanSpeckles"><Sparkles :size="14" /> 去除杂点</button>
          </div>

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
          <button class="primary-button bead-generate" type="button" :disabled="busy || !sourceImage" @click="generatePattern">
            <Grid3X3 :size="16" /> {{ busy ? '生成中…' : '应用并重新生成' }}
          </button>
          <p class="palette-note">品牌色号来自社区校准数据；屏幕颜色与实物、批次可能存在差异。</p>
        </aside>

        <section class="bead-editor-panel">
          <div class="bead-toolbar">
            <div class="bead-tool-group" aria-label="绘制工具">
              <button type="button" :class="{ active: activeTool === 'brush' }" title="画笔" @click="activeTool = 'brush'"><Paintbrush :size="17" /><span>画笔</span></button>
              <button type="button" :class="{ active: activeTool === 'eraser' }" title="橡皮擦" @click="activeTool = 'eraser'"><Eraser :size="17" /><span>擦除</span></button>
              <button type="button" :class="{ active: activeTool === 'bucket' }" title="填充连续区域" @click="activeTool = 'bucket'"><PaintBucket :size="17" /><span>油漆桶</span></button>
              <button type="button" :class="{ active: activeTool === 'rectangle' }" title="拖动填充矩形" @click="activeTool = 'rectangle'"><Square :size="17" /><span>矩形</span></button>
              <button type="button" :class="{ active: activeTool === 'select' }" title="拖动选择区域，镜像操作将只作用于选区" @click="activeTool = 'select'"><BoxSelect :size="17" /><span>选区</span></button>
              <button type="button" :class="{ active: activeTool === 'replace' }" title="点击一种现有颜色，将其全部替换成当前选中色" @click="activeTool = 'replace'"><ReplaceAll :size="17" /><span>替换</span></button>
              <button type="button" :class="{ active: activeTool === 'picker' }" title="吸色" @click="activeTool = 'picker'"><Pipette :size="17" /><span>吸色</span></button>
            </div>
            <div class="bead-tool-group compact">
              <button type="button" :disabled="!canUndo" :title="`撤销（${past.length} 步历史）`" @click="undo"><Undo :size="17" /></button>
              <button type="button" :disabled="!canRedo" :title="`重做（${future.length} 步历史）`" @click="redo"><Redo :size="17" /></button>
            </div>
            <label class="canvas-zoom">缩放 <input v-model.number="canvasCellSize" type="range" min="4" max="25" /></label>
            <button class="fit-button" type="button" title="适应画布" @click="fitCanvas"><Fit :size="15" /> 适应</button>
            <div class="preview-toggle" aria-label="预览样式">
              <button type="button" :class="{ active: previewMode === 'pixel' }" @click="previewMode = 'pixel'">色块</button>
              <button type="button" :class="{ active: previewMode === 'bead' }" @click="previewMode = 'bead'">拼豆</button>
            </div>
            <button class="grid-toggle" type="button" :class="{ active: showGrid }" @click="showGrid = !showGrid"><Grid3X3 :size="16" /> 网格</button>
          </div>

          <div class="bead-editor-actions">
            <span>对称编辑</span>
            <button type="button" :class="{ active: symmetry.horizontal }" @click="symmetry.horizontal = !symmetry.horizontal"><FlipHorizontal :size="14" /> 左右</button>
            <button type="button" :class="{ active: symmetry.vertical }" @click="symmetry.vertical = !symmetry.vertical"><FlipVertical :size="14" /> 上下</button>
            <i />
            <span>{{ selection ? '镜像选区' : '镜像全图' }}</span>
            <button type="button" @click="mirrorPattern('horizontal')"><FlipHorizontal :size="14" /> 左右</button>
            <button type="button" @click="mirrorPattern('vertical')"><FlipVertical :size="14" /> 上下</button>
            <button v-if="selection" type="button" @click="selection = null">取消选区</button>
            <button class="code-toggle" type="button" :class="{ active: showCodes }" title="单格放大到 12px 以上时显示色号" @click="showCodes = !showCodes"><Tags :size="14" /> 格内色号</button>
          </div>

          <div ref="canvasViewport" class="bead-canvas-viewport">
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
            <span>历史 {{ past.length }} / {{ future.length }}</span>
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

          <div class="bead-materials">
            <div class="material-summary" :class="{ complete: shortageTotal === 0 }">
              <ListChecks :size="14" />
              <span>{{ shortageTotal ? `按库存还缺 ${shortageTotal} 颗` : '库存数量充足' }}</span>
            </div>
            <div class="bead-usage">
              <div v-for="item in statistics" :key="item.id" class="bead-usage-row" role="button" tabindex="0" @click="chooseColor(item.index)" @keydown.enter="chooseColor(item.index)">
                <i :style="{ background: item.hex }" />
                <span><b>{{ item.name }}</b><small>{{ item.code }}</small></span>
                <strong title="需要数量">需 {{ item.count }}</strong>
                <label title="输入已有库存" @click.stop>有 <input v-model.number="inventory[item.id]" type="number" min="0" /></label>
                <em v-if="item.count > (Number(inventory[item.id]) || 0)">缺 {{ item.count - (Number(inventory[item.id]) || 0) }}</em>
                <em v-else class="enough">足够</em>
              </div>
            </div>

            <details v-if="mergeSuggestions.length" class="merge-suggestions">
              <summary>颜色合并建议 <b>{{ mergeSuggestions.length }}</b></summary>
              <button v-for="suggestion in mergeSuggestions" :key="`${suggestion.source.id}-${suggestion.target.id}`" type="button" @click="applyMerge(suggestion)">
                <i :style="{ background: suggestion.source.hex }" />{{ suggestion.source.code }}
                <span>→</span>
                <i :style="{ background: suggestion.target.hex }" />{{ suggestion.target.code }}
                <small>ΔE {{ suggestion.distance.toFixed(1) }}</small>
              </button>
            </details>
          </div>

          <div class="bead-export">
            <span class="bead-label">导出图纸</span>
            <button type="button" @click="exportPng(cells, gridSize.columns, gridSize.rows, palette.colors, `${fileBase()}.png`, { paletteName: palette.name })"><FileImage :size="16" /> PNG 图片</button>
            <button type="button" @click="exportPdf(cells, gridSize.columns, gridSize.rows, palette.colors, `${fileBase()}.pdf`, { paletteName: palette.name, boardSize: 29 })"><FileText :size="16" /> PDF（29×29 分页）</button>
            <button type="button" @click="exportMaterials"><ListChecks :size="16" /> 材料清单 CSV</button>
            <span class="bead-label project-label">工程文件</span>
            <div class="project-actions">
              <button type="button" @click="saveProject"><Save :size="15" /> 保存</button>
              <button type="button" @click="projectInput?.click()"><FolderOpen :size="15" /> 打开</button>
            </div>
            <input ref="projectInput" type="file" accept=".sakurabeads,application/json" hidden @change="openProject" />
          </div>
          <p class="local-processing"><ShieldCheck :size="14" /> 图片与编辑数据仅保留在当前页面</p>
        </aside>
      </div>
    </template>
  </div>
</template>
