<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  CropIcon as Crop,
  DownloadIcon as Download,
  FlipHorizontal2Icon as FlipHorizontal,
  FlipVertical2Icon as FlipVertical,
  ImagePlusIcon as ImagePlus,
  RotateCcwIcon as RotateLeft,
  RotateCwIcon as RotateRight,
  ShieldCheckIcon as ShieldCheck,
  UploadIcon as Upload,
} from '@lucide/vue'
import {
  createTransformedSource,
  decodeImageFile,
  downloadBlob,
  drawPreview,
  exportImage,
  formatBytes,
} from '../../features/image/core/processor'

const presets = [
  { value: 'original', label: '原图' },
  { value: '1:1', label: '1 : 1' },
  { value: '4:3', label: '4 : 3' },
  { value: '3:2', label: '3 : 2' },
  { value: '16:9', label: '16 : 9' },
  { value: '9:16', label: '9 : 16' },
]
const formats = [
  { mime: 'image/jpeg', extension: 'jpg', label: 'JPEG' },
  { mime: 'image/png', extension: 'png', label: 'PNG' },
  { mime: 'image/webp', extension: 'webp', label: 'WebP' },
]

const fileInput = ref()
const previewCanvas = ref()
const previewStage = ref()
const hasImage = ref(false)
const fileName = ref('')
const originalBytes = ref(0)
const originalWidth = ref(0)
const originalHeight = ref(0)
const rotation = ref(0)
const flipX = ref(false)
const flipY = ref(false)
const zoom = ref(1)
const focusX = ref(50)
const focusY = ref(50)
const outputWidth = ref(1200)
const outputHeight = ref(800)
const lockedAspect = ref(1.5)
const keepRatio = ref(true)
const aspectPreset = ref('original')
const mimeType = ref('image/jpeg')
const quality = ref(82)
const latestBytes = ref(null)
const busy = ref(false)
const draggingFile = ref(false)
const draggingImage = ref(false)
const error = ref('')
const notice = ref('拖动画面调整裁剪位置，滚轮可以缩放')
let decodedImage
let transformedSource
let resizeObserver
let pointerStart

const selectedFormat = computed(() => formats.find((item) => item.mime === mimeType.value) || formats[0])
const qualityAvailable = computed(() => mimeType.value !== 'image/png')
const dimensionsLabel = computed(() => `${outputWidth.value} × ${outputHeight.value} px`)

async function loadFile(file) {
  if (!file) return
  if (!file.type.startsWith('image/')) {
    error.value = '请选择图片文件'
    return
  }
  if (file.size > 20 * 1024 * 1024) {
    error.value = '图片不能超过 20 MB'
    return
  }

  busy.value = true
  error.value = ''
  try {
    const image = await decodeImageFile(file)
    decodedImage?.close?.()
    decodedImage = image
    fileName.value = file.name
    originalBytes.value = file.size
    originalWidth.value = image.width
    originalHeight.value = image.height
    rotation.value = 0
    flipX.value = false
    flipY.value = false
    zoom.value = 1
    focusX.value = 50
    focusY.value = 50
    latestBytes.value = null
    rebuildTransformedSource()
    hasImage.value = true
    applyPreset('original')
    notice.value = '图片仅在当前浏览器中处理'
    await nextTick()
    if (previewStage.value) resizeObserver?.observe(previewStage.value)
    renderPreview()
  } catch (loadError) {
    error.value = loadError.message || '图片读取失败'
  } finally {
    busy.value = false
    if (fileInput.value) fileInput.value.value = ''
  }
}

function rebuildTransformedSource() {
  if (!decodedImage) return
  transformedSource = createTransformedSource(decodedImage, {
    rotation: rotation.value,
    flipX: flipX.value,
    flipY: flipY.value,
  })
}

function transform(action) {
  if (!decodedImage) return
  if (action === 'left') rotation.value = (rotation.value + 270) % 360
  if (action === 'right') rotation.value = (rotation.value + 90) % 360
  if (action === 'flip-x') flipX.value = !flipX.value
  if (action === 'flip-y') flipY.value = !flipY.value
  rebuildTransformedSource()
  if (aspectPreset.value === 'original') applyPreset('original')
  else renderPreview()
}

function applyPreset(value) {
  if (!transformedSource) return
  aspectPreset.value = value
  const aspect = value === 'original'
    ? transformedSource.width / transformedSource.height
    : Number(value.split(':')[0]) / Number(value.split(':')[1])
  lockedAspect.value = aspect
  keepRatio.value = true

  if (transformedSource.width / transformedSource.height >= aspect) {
    outputHeight.value = transformedSource.height
    outputWidth.value = Math.round(outputHeight.value * aspect)
  } else {
    outputWidth.value = transformedSource.width
    outputHeight.value = Math.round(outputWidth.value / aspect)
  }
  latestBytes.value = null
  renderPreview()
}

function changeWidth() {
  outputWidth.value = clampDimension(outputWidth.value)
  if (keepRatio.value) outputHeight.value = clampDimension(Math.round(outputWidth.value / lockedAspect.value))
  else lockedAspect.value = outputWidth.value / outputHeight.value
  aspectPreset.value = 'custom'
  latestBytes.value = null
}

function changeHeight() {
  outputHeight.value = clampDimension(outputHeight.value)
  if (keepRatio.value) outputWidth.value = clampDimension(Math.round(outputHeight.value * lockedAspect.value))
  else lockedAspect.value = outputWidth.value / outputHeight.value
  aspectPreset.value = 'custom'
  latestBytes.value = null
}

function toggleRatio() {
  if (keepRatio.value) lockedAspect.value = outputWidth.value / outputHeight.value
}

function renderPreview() {
  if (!previewCanvas.value || !transformedSource) return
  drawPreview(previewCanvas.value, transformedSource, {
    width: outputWidth.value,
    height: outputHeight.value,
    zoom: zoom.value,
    focusX: focusX.value,
    focusY: focusY.value,
    previewWidth: Math.max(320, (previewStage.value?.clientWidth || 800) - 56),
  })
}

function startPan(event) {
  if (!hasImage.value) return
  draggingImage.value = true
  pointerStart = { x: event.clientX, y: event.clientY, focusX: focusX.value, focusY: focusY.value }
  previewCanvas.value.setPointerCapture(event.pointerId)
}

function pan(event) {
  if (!draggingImage.value || !pointerStart) return
  const rect = previewCanvas.value.getBoundingClientRect()
  focusX.value = clamp(pointerStart.focusX - ((event.clientX - pointerStart.x) / rect.width) * 100, 0, 100)
  focusY.value = clamp(pointerStart.focusY - ((event.clientY - pointerStart.y) / rect.height) * 100, 0, 100)
  renderPreview()
}

function stopPan() {
  draggingImage.value = false
  pointerStart = null
}

function wheelZoom(event) {
  zoom.value = clamp(Number((zoom.value - Math.sign(event.deltaY) * 0.1).toFixed(1)), 1, 4)
}

async function download() {
  if (!transformedSource || busy.value) return
  busy.value = true
  error.value = ''
  notice.value = '正在生成图片…'
  try {
    const blob = await exportImage(transformedSource, {
      width: outputWidth.value,
      height: outputHeight.value,
      zoom: zoom.value,
      focusX: focusX.value,
      focusY: focusY.value,
      mimeType: mimeType.value,
      quality: quality.value / 100,
    })
    latestBytes.value = blob.size
    const base = fileName.value.replace(/\.[^.]+$/, '') || 'image'
    downloadBlob(blob, `${base}-edited.${selectedFormat.value.extension}`)
    notice.value = `已导出 ${selectedFormat.value.label} · ${formatBytes(blob.size)}`
  } catch (exportError) {
    error.value = exportError.message || '导出失败，请缩小尺寸后重试'
  } finally {
    busy.value = false
  }
}

function onDrop(event) {
  draggingFile.value = false
  loadFile(event.dataTransfer?.files?.[0])
}

function clampDimension(value) {
  return clamp(Math.round(Number(value) || 1), 1, 12000)
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

watch([zoom, focusX, focusY, outputWidth, outputHeight], () => {
  latestBytes.value = null
  renderPreview()
})

onMounted(() => {
  resizeObserver = new ResizeObserver(renderPreview)
  if (previewStage.value) resizeObserver.observe(previewStage.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  decodedImage?.close?.()
})
</script>

<template>
  <div
    v-if="!hasImage"
    class="image-dropzone"
    :class="{ active: draggingFile }"
    @dragenter.prevent="draggingFile = true"
    @dragover.prevent="draggingFile = true"
    @dragleave.prevent="draggingFile = false"
    @drop.prevent="onDrop"
  >
    <input ref="fileInput" type="file" accept="image/*" hidden @change="loadFile($event.target.files?.[0])" />
    <div class="image-drop-symbol"><ImagePlus :size="30" /></div>
    <p class="section-kicker">LOCAL IMAGE LAB</p>
    <h2>拖入一张图片开始处理</h2>
    <p>支持浏览器可读取的常见图片格式，单张不超过 20 MB / 3200 万像素，最长边不超过 12000 px。</p>
    <button class="primary-button" type="button" :disabled="busy" @click="fileInput?.click()"><Upload :size="16" /> {{ busy ? '正在读取…' : '选择图片' }}</button>
    <span><ShieldCheck :size="14" /> 图片不会离开当前设备</span>
    <p v-if="error" class="error-message" role="status">{{ error }}</p>
  </div>

  <div v-else class="image-studio">
    <div class="image-commandbar">
      <div class="image-file-summary">
        <strong>{{ fileName }}</strong>
        <span>{{ originalWidth }} × {{ originalHeight }} px · {{ formatBytes(originalBytes) }}</span>
      </div>
      <div class="image-transform-tools" aria-label="图像方向">
        <button type="button" title="向左旋转" @click="transform('left')"><RotateLeft :size="16" /></button>
        <button type="button" title="向右旋转" @click="transform('right')"><RotateRight :size="16" /></button>
        <button type="button" title="水平翻转" :class="{ active: flipX }" @click="transform('flip-x')"><FlipHorizontal :size="16" /></button>
        <button type="button" title="垂直翻转" :class="{ active: flipY }" @click="transform('flip-y')"><FlipVertical :size="16" /></button>
      </div>
      <input ref="fileInput" type="file" accept="image/*" hidden @change="loadFile($event.target.files?.[0])" />
      <button class="image-replace" type="button" @click="fileInput?.click()"><ImagePlus :size="15" /> 换一张</button>
    </div>

    <div class="image-workbench">
      <section ref="previewStage" class="image-preview-stage">
        <div class="image-stage-heading"><span><Crop :size="14" /> 裁剪预览</span><em>{{ dimensionsLabel }}</em></div>
        <div class="image-canvas-wrap">
          <canvas
            ref="previewCanvas"
            :class="{ dragging: draggingImage }"
            aria-label="裁剪预览，拖动图片调整位置"
            @pointerdown="startPan"
            @pointermove="pan"
            @pointerup="stopPan"
            @pointercancel="stopPan"
            @wheel.prevent="wheelZoom"
          />
        </div>
        <div class="image-position-controls">
          <label>缩放 <strong>{{ zoom.toFixed(1) }}×</strong><input v-model.number="zoom" type="range" min="1" max="4" step="0.1" /></label>
          <span>拖动画面定位 · 滚轮缩放</span>
        </div>
      </section>

      <aside class="image-settings">
        <section>
          <h3><span>01</span> 裁剪比例</h3>
          <div class="image-preset-grid">
            <button v-for="preset in presets" :key="preset.value" type="button" :class="{ active: aspectPreset === preset.value }" @click="applyPreset(preset.value)">{{ preset.label }}</button>
          </div>
        </section>

        <section>
          <h3><span>02</span> 输出尺寸</h3>
          <div class="image-size-fields">
            <label>宽度<input v-model.number="outputWidth" type="number" min="1" max="12000" @change="changeWidth" /><small>px</small></label>
            <i>×</i>
            <label>高度<input v-model.number="outputHeight" type="number" min="1" max="12000" @change="changeHeight" /><small>px</small></label>
          </div>
          <label class="image-ratio-lock"><input v-model="keepRatio" type="checkbox" @change="toggleRatio" /> 锁定宽高比</label>
        </section>

        <section>
          <h3><span>03</span> 格式与压缩</h3>
          <div class="image-format-tabs">
            <button v-for="format in formats" :key="format.mime" type="button" :class="{ active: mimeType === format.mime }" @click="mimeType = format.mime; latestBytes = null">{{ format.label }}</button>
          </div>
          <label v-if="qualityAvailable" class="image-quality">质量 <strong>{{ quality }}%</strong><input v-model.number="quality" type="range" min="10" max="100" step="1" @input="latestBytes = null" /></label>
          <p v-else class="image-lossless-note">PNG 使用无损导出，不提供质量调节。</p>
        </section>

        <div class="image-export-summary">
          <span>输出</span><strong>{{ dimensionsLabel }}</strong>
          <span>最近导出</span><strong>{{ latestBytes === null ? '尚未导出' : formatBytes(latestBytes) }}</strong>
        </div>
        <button class="image-download" type="button" :disabled="busy" @click="download"><Download :size="17" /> {{ busy ? '正在生成…' : `下载 ${selectedFormat.label}` }}</button>
      </aside>
    </div>

    <footer class="image-statusbar">
      <p :class="{ error }">{{ error || notice }}</p>
      <span><ShieldCheck :size="14" /> 全程在浏览器本地处理，不上传服务器</span>
    </footer>
  </div>
</template>
