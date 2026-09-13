<script setup>
import { ref } from 'vue'
import { ArrowDownUpIcon as ArrowDownUp, ClipboardIcon as Clipboard } from '@lucide/vue'
import { trackToolUse } from '../../analytics'

const plain = ref('你好，Sakura Tools!')
const encoded = ref('')
const error = ref('')

function encode(track = true) {
  encoded.value = btoa(String.fromCharCode(...new TextEncoder().encode(plain.value)))
  error.value = ''
  if (track) trackToolUse('base64')
}

function decode() {
  try {
    plain.value = new TextDecoder().decode(Uint8Array.from(atob(encoded.value.trim()), (char) => char.charCodeAt(0)))
    error.value = ''
    trackToolUse('base64')
  } catch {
    error.value = '这不是有效的 Base64 内容，请检查后重试。'
  }
}

async function copy(value) {
  await navigator.clipboard.writeText(value)
}

encode(false)
</script>

<template>
  <div class="tool-panel split-editor">
    <section>
      <div class="editor-heading"><label for="plain-text">原始文本</label><button type="button" @click="copy(plain)"><Clipboard :size="15" />复制</button></div>
      <textarea id="plain-text" v-model="plain" spellcheck="false" />
      <button class="primary-button full-button" type="button" @click="encode()">编码为 Base64</button>
    </section>
    <div class="swap-mark"><ArrowDownUp :size="18" /></div>
    <section>
      <div class="editor-heading"><label for="encoded-text">Base64</label><button type="button" @click="copy(encoded)"><Clipboard :size="15" />复制</button></div>
      <textarea id="encoded-text" v-model="encoded" spellcheck="false" />
      <button class="secondary-button full-button" type="button" @click="decode">解码为文本</button>
    </section>
    <p v-if="error" class="error-message wide-message">{{ error }}</p>
  </div>
</template>
