<script setup>
import { ref } from 'vue'
import { CheckIcon as Check, ClipboardIcon as Clipboard, Minimize2Icon as Minimize2, WandSparklesIcon as WandSparkles } from '@lucide/vue'

const input = ref('{\n  "project": "sakura-tools",\n  "status": "growing",\n  "private": true\n}')
const error = ref('')
const copied = ref(false)

function transform(compact = false) {
  try {
    input.value = JSON.stringify(JSON.parse(input.value), null, compact ? 0 : 2)
    error.value = ''
  } catch (err) {
    error.value = `第 ${getErrorLine(err.message)} 行附近：${err.message}`
  }
}

function getErrorLine(message) {
  const position = Number(message.match(/position (\d+)/)?.[1] || 0)
  return input.value.slice(0, position).split('\n').length
}

async function copy() {
  await navigator.clipboard.writeText(input.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 1400)
}
</script>

<template>
  <div class="tool-panel">
    <div class="tool-bar">
      <div class="action-group">
        <button class="primary-button" type="button" @click="transform(false)"><WandSparkles :size="16" /> 格式化</button>
        <button class="secondary-button" type="button" @click="transform(true)"><Minimize2 :size="16" /> 压缩</button>
      </div>
      <button class="secondary-button" type="button" @click="copy"><Check v-if="copied" :size="16" /><Clipboard v-else :size="16" /> {{ copied ? '已复制' : '复制' }}</button>
    </div>
    <label class="editor-label" for="json-input">JSON INPUT</label>
    <textarea id="json-input" v-model="input" class="code-editor" spellcheck="false" @input="error = ''" />
    <p v-if="error" class="error-message">{{ error }}</p>
    <p v-else class="success-message"><Check :size="14" /> 输入内容仅在当前浏览器中处理</p>
  </div>
</template>
