<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import { CheckIcon as Check, ClipboardIcon as Clipboard, RefreshCwIcon as RefreshCw } from '@lucide/vue'

const length = ref(20)
const options = ref({ upper: true, lower: true, numbers: true, symbols: true })
const password = ref('')
const copied = ref(false)
const copyError = ref('')
let copyTimer

const strength = computed(() => {
  const groups = Object.values(options.value).filter(Boolean).length
  const bits = length.value * Math.log2(Math.max(groups * 18, 2))
  return bits > 110 ? '很强' : bits > 75 ? '强' : bits > 45 ? '一般' : '较弱'
})

function generate() {
  const sets = []
  if (options.value.upper) sets.push('ABCDEFGHJKLMNPQRSTUVWXYZ')
  if (options.value.lower) sets.push('abcdefghijkmnopqrstuvwxyz')
  if (options.value.numbers) sets.push('23456789')
  if (options.value.symbols) sets.push('!@#$%&*+-=?')
  const chars = sets.join('') || 'abcdefghijkmnopqrstuvwxyz'
  const values = crypto.getRandomValues(new Uint32Array(length.value))
  password.value = Array.from(values, (value) => chars[value % chars.length]).join('')
}

function legacyCopy(text) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  textarea.style.pointerEvents = 'none'
  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)

  try {
    return document.execCommand('copy')
  } finally {
    textarea.remove()
  }
}

async function copy() {
  if (!password.value) return

  copyError.value = ''
  try {
    let copiedToClipboard = false
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(password.value)
        copiedToClipboard = true
      } catch {
        copiedToClipboard = false
      }
    }
    if (!copiedToClipboard && !legacyCopy(password.value)) {
      throw new Error('copy failed')
    }

    copied.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => (copied.value = false), 1400)
  } catch {
    copied.value = false
    copyError.value = '复制失败，请长按或选中密码手动复制。'
  }
}

onBeforeUnmount(() => clearTimeout(copyTimer))

generate()
</script>

<template>
  <div class="tool-panel password-panel">
    <div class="password-output">
      <code>{{ password }}</code>
      <button type="button" :aria-label="copied ? '密码已复制' : '复制密码'" @click="copy"><Check v-if="copied" :size="18" /><Clipboard v-else :size="18" /><span>{{ copied ? '已复制' : '复制' }}</span></button>
    </div>
    <p v-if="copyError" class="error-message" role="status">{{ copyError }}</p>
    <div class="password-options">
      <label class="length-control">密码长度 <strong>{{ length }}</strong><input v-model.number="length" type="range" min="8" max="64" @input="generate" /></label>
      <div class="check-grid">
        <label><input v-model="options.upper" type="checkbox" @change="generate" /> 大写字母</label>
        <label><input v-model="options.lower" type="checkbox" @change="generate" /> 小写字母</label>
        <label><input v-model="options.numbers" type="checkbox" @change="generate" /> 数字</label>
        <label><input v-model="options.symbols" type="checkbox" @change="generate" /> 特殊符号</label>
      </div>
    </div>
    <div class="password-footer"><span>强度：<strong>{{ strength }}</strong></span><button class="primary-button" type="button" @click="generate"><RefreshCw :size="16" /> 重新生成</button></div>
  </div>
</template>
