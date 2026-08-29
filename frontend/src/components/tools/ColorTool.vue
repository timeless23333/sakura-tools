<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import {
  ArrowLeftRightIcon as Swap,
  CheckIcon as Check,
  ClipboardIcon as Clipboard,
  PaletteIcon as Palette,
  PipetteIcon as Pipette,
  ShieldCheckIcon as ShieldCheck,
} from '@lucide/vue'
import {
  compositeColors,
  contrastRatio,
  generatePalette,
  hsvToRgb,
  parseHex,
  readableTextColor,
  rgbToCmyk,
  rgbToHex,
  rgbToHsl,
  rgbToHsv,
} from '../../features/color/core/color'

const hue = ref(348)
const saturation = ref(63)
const value = ref(79)
const alpha = ref(100)
const hexInput = ref('#C94B55')
const backgroundHex = ref('#FFFDF8')
const scheme = ref('analogous')
const copiedKey = ref('')
const error = ref('')
const notice = ref('拖动色域选择颜色，所有数值会实时同步')
const saturationArea = ref()
const recentColors = ref(['#C94B55', '#39708D', '#53735E', '#9A6B2C', '#23211E'])
const canEyedropper = typeof window !== 'undefined' && 'EyeDropper' in window
let pointerActive = false
let copyTimer

const rgb = computed(() => hsvToRgb({ h: hue.value, s: saturation.value, v: value.value, a: alpha.value / 100 }))
const hex = computed(() => rgbToHex(rgb.value, alpha.value < 100))
const solidHex = computed(() => rgbToHex(rgb.value, false))
const hsl = computed(() => rgbToHsl(rgb.value))
const cmyk = computed(() => rgbToCmyk(rgb.value))
const rgbaText = computed(() => `rgba(${round(rgb.value.r)}, ${round(rgb.value.g)}, ${round(rgb.value.b)}, ${(alpha.value / 100).toFixed(2)})`)
const rgbText = computed(() => `rgb(${round(rgb.value.r)}, ${round(rgb.value.g)}, ${round(rgb.value.b)})`)
const hslText = computed(() => `hsl(${round(hsl.value.h)}, ${round(hsl.value.s)}%, ${round(hsl.value.l)}%)`)
const hsvText = computed(() => `hsv(${round(hue.value)}, ${round(saturation.value)}%, ${round(value.value)}%)`)
const cmykText = computed(() => `cmyk(${round(cmyk.value.c)}%, ${round(cmyk.value.m)}%, ${round(cmyk.value.y)}%, ${round(cmyk.value.k)}%)`)
const palette = computed(() => generatePalette(rgb.value, scheme.value))
const background = computed(() => parseHex(backgroundHex.value) || { r: 255, g: 255, b: 255, a: 1 })
const effectiveForeground = computed(() => compositeColors(rgb.value, background.value))
const ratio = computed(() => contrastRatio(effectiveForeground.value, background.value))
const contrastResults = computed(() => ({
  aaLarge: ratio.value >= 3,
  aa: ratio.value >= 4.5,
  aaa: ratio.value >= 7,
}))
const paletteCss = computed(() => `:root {\n${palette.value.map((color, index) => `  --palette-${index + 1}: ${color};`).join('\n')}\n}`)

watch(hex, (next) => (hexInput.value = next))

function setHex(input, addRecent = false) {
  const parsed = parseHex(input)
  if (!parsed) {
    error.value = '请输入 3、4、6 或 8 位十六进制颜色'
    hexInput.value = hex.value
    return
  }
  const next = rgbToHsv(parsed)
  hue.value = next.h
  saturation.value = next.s
  value.value = next.v
  alpha.value = round((parsed.a ?? 1) * 100)
  error.value = ''
  if (addRecent) commitColor()
}

function setRgbChannel(channel, input) {
  const nextRgb = { ...rgb.value, [channel]: clamp(Number(input) || 0, 0, 255) }
  const next = rgbToHsv(nextRgb)
  hue.value = next.h
  saturation.value = next.s
  value.value = next.v
  commitColor()
}

function setSaturationValue(event) {
  const rect = saturationArea.value.getBoundingClientRect()
  saturation.value = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100)
  value.value = clamp(100 - ((event.clientY - rect.top) / rect.height) * 100, 0, 100)
}

function startSaturation(event) {
  pointerActive = true
  saturationArea.value.setPointerCapture(event.pointerId)
  setSaturationValue(event)
}

function moveSaturation(event) {
  if (pointerActive) setSaturationValue(event)
}

function stopSaturation() {
  if (!pointerActive) return
  pointerActive = false
  commitColor()
}

function handleSpectrumKey(event) {
  const step = event.shiftKey ? 5 : 1
  if (event.key === 'ArrowLeft') saturation.value = clamp(saturation.value - step, 0, 100)
  else if (event.key === 'ArrowRight') saturation.value = clamp(saturation.value + step, 0, 100)
  else if (event.key === 'ArrowDown') value.value = clamp(value.value - step, 0, 100)
  else if (event.key === 'ArrowUp') value.value = clamp(value.value + step, 0, 100)
  else return
  event.preventDefault()
  commitColor()
}

async function pickFromScreen() {
  if (!canEyedropper) return
  try {
    const result = await new window.EyeDropper().open()
    setHex(result.sRGBHex, true)
    notice.value = '已从屏幕取色'
  } catch (pickerError) {
    if (pickerError.name !== 'AbortError') error.value = '屏幕取色失败，请改用系统颜色选择器'
  }
}

function selectPaletteColor(color) {
  setHex(color, true)
  notice.value = `已应用配色 ${color}`
}

function swapContrastColors() {
  const previousBackground = rgbToHex(background.value, false)
  backgroundHex.value = solidHex.value
  setHex(previousBackground, true)
}

function commitColor() {
  const current = hex.value
  recentColors.value = [current, ...recentColors.value.filter((color) => color !== current)].slice(0, 8)
}

async function copy(value, key) {
  try {
    let successful = false
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value)
        successful = true
      } catch {
        successful = false
      }
    }
    if (!successful) successful = legacyCopy(value)
    if (!successful) throw new Error('copy failed')
    copiedKey.value = key
    notice.value = '已复制到剪贴板'
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => (copiedKey.value = ''), 1400)
  } catch {
    error.value = '复制失败，请手动选择内容复制'
  }
}

function legacyCopy(value) {
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    return document.execCommand('copy')
  } finally {
    textarea.remove()
  }
}

function round(number) {
  return Math.round(number)
}

function clamp(number, min, max) {
  return Math.min(max, Math.max(min, number))
}

onBeforeUnmount(() => clearTimeout(copyTimer))
</script>

<template>
  <div class="color-studio">
    <div class="color-commandbar">
      <div class="color-current-chip" :style="{ background: hex }" />
      <label class="color-hex-field">
        <span>HEX / HEXA</span>
        <input v-model="hexInput" maxlength="9" spellcheck="false" @change="setHex(hexInput, true)" @keydown.enter="$event.target.blur()" />
      </label>
      <button type="button" title="复制 HEX" @click="copy(hex, 'hex')"><Check v-if="copiedKey === 'hex'" :size="15" /><Clipboard v-else :size="15" /> {{ copiedKey === 'hex' ? '已复制' : '复制' }}</button>
      <label class="color-native-picker"><Palette :size="15" /> 系统取色<input type="color" :value="solidHex" @input="setHex($event.target.value, true)" /></label>
      <button v-if="canEyedropper" type="button" @click="pickFromScreen"><Pipette :size="15" /> 屏幕取色</button>
    </div>

    <div class="color-workbench">
      <main class="color-picker-panel">
        <div class="color-preview-band" :style="{ background: hex, color: readableTextColor(rgb) }">
          <span>SELECTED COLOR</span>
          <strong>{{ hex }}</strong>
          <p>{{ hslText }}</p>
        </div>
        <div
          ref="saturationArea"
          class="color-saturation-field"
          :style="{ '--hue-color': `hsl(${hue}, 100%, 50%)` }"
          role="slider"
          aria-label="饱和度和明度"
          :aria-valuetext="`饱和度 ${round(saturation)}%，明度 ${round(value)}%`"
          tabindex="0"
          @pointerdown="startSaturation"
          @pointermove="moveSaturation"
          @pointerup="stopSaturation"
          @pointercancel="stopSaturation"
          @keydown="handleSpectrumKey"
        >
          <i :style="{ left: `${saturation}%`, top: `${100 - value}%` }" />
        </div>
        <div class="color-slider-stack">
          <label>色相 <strong>{{ round(hue) }}°</strong><input v-model.number="hue" class="hue-slider" type="range" min="0" max="359" @change="commitColor" /></label>
          <label>透明度 <strong>{{ alpha }}%</strong><span class="alpha-track"><input v-model.number="alpha" type="range" min="0" max="100" @change="commitColor" /></span></label>
        </div>
        <div class="color-recent">
          <span>最近使用</span>
          <button v-for="color in recentColors" :key="color" type="button" :title="color" :style="{ background: color }" @click="setHex(color, true)" />
        </div>
      </main>

      <aside class="color-values-panel">
        <header><span>COLOR VALUES</span><strong>颜色数值</strong></header>
        <section class="color-rgb-fields">
          <label v-for="channel in ['r', 'g', 'b']" :key="channel">{{ channel.toUpperCase() }}<input :value="round(rgb[channel])" type="number" min="0" max="255" @change="setRgbChannel(channel, $event.target.value)" /></label>
          <label>A<input v-model.number="alpha" type="number" min="0" max="100" @change="alpha = clamp(alpha, 0, 100); commitColor()" /></label>
        </section>
        <div class="color-value-list">
          <button v-for="item in [
            ['rgb', 'RGB', rgbText],
            ['rgba', 'RGBA', rgbaText],
            ['hsl', 'HSL', hslText],
            ['hsv', 'HSV', hsvText],
            ['cmyk', 'CMYK', cmykText],
          ]" :key="item[0]" type="button" @click="copy(item[2], item[0])">
            <span>{{ item[1] }}</span><code>{{ item[2] }}</code><Check v-if="copiedKey === item[0]" :size="13" /><Clipboard v-else :size="13" />
          </button>
        </div>
      </aside>
    </div>

    <section class="color-palette-section">
      <header>
        <div><span>PALETTE GENERATOR</span><strong>配色方案</strong></div>
        <div class="color-scheme-tabs">
          <button v-for="item in [['analogous', '邻近'], ['complementary', '互补'], ['triadic', '三角'], ['tetradic', '四方'], ['monochrome', '单色']]" :key="item[0]" type="button" :class="{ active: scheme === item[0] }" @click="scheme = item[0]">{{ item[1] }}</button>
        </div>
        <button type="button" @click="copy(paletteCss, 'css')"><Check v-if="copiedKey === 'css'" :size="14" /><Clipboard v-else :size="14" /> 复制 CSS</button>
        <button type="button" @click="copy(JSON.stringify(palette, null, 2), 'json')"><Check v-if="copiedKey === 'json'" :size="14" /><Clipboard v-else :size="14" /> JSON</button>
      </header>
      <div class="color-palette-strip">
        <button v-for="(color, index) in palette" :key="`${scheme}-${index}`" type="button" :style="{ background: color, color: readableTextColor(parseHex(color)) }" @click="selectPaletteColor(color)">
          <span>0{{ index + 1 }}</span><strong>{{ color }}</strong>
        </button>
      </div>
    </section>

    <section class="color-contrast-section">
      <div class="color-contrast-preview" :style="{ background: backgroundHex, color: rgbaText }">
        <span>Contrast preview</span>
        <strong>清晰的文字，从对比开始。</strong>
        <p>Accessible color makes every interface easier to read.</p>
      </div>
      <div class="color-contrast-settings">
        <header><span>WCAG CONTRAST</span><strong>对比度检查</strong></header>
        <div class="color-contrast-colors">
          <label>文字<i :style="{ background: hex }" /><code>{{ hex }}</code></label>
          <button type="button" title="交换文字与背景" @click="swapContrastColors"><Swap :size="15" /></button>
          <label>背景<input v-model="backgroundHex" type="color" /><code>{{ backgroundHex.toUpperCase() }}</code></label>
        </div>
        <div class="color-ratio"><strong>{{ ratio.toFixed(2) }}</strong><span>: 1</span></div>
        <div class="color-wcag-results">
          <span :class="{ pass: contrastResults.aaLarge }">大号文本 AA <b>{{ contrastResults.aaLarge ? '通过' : '未通过' }}</b></span>
          <span :class="{ pass: contrastResults.aa }">普通文本 AA <b>{{ contrastResults.aa ? '通过' : '未通过' }}</b></span>
          <span :class="{ pass: contrastResults.aaa }">普通文本 AAA <b>{{ contrastResults.aaa ? '通过' : '未通过' }}</b></span>
        </div>
      </div>
    </section>

    <footer class="color-statusbar">
      <p :class="{ error }">{{ error || notice }}</p>
      <span><ShieldCheck :size="14" /> 颜色计算仅在当前浏览器中进行</span>
    </footer>
  </div>
</template>
