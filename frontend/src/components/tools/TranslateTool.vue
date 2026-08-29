<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import {
  ArrowLeftRightIcon as ArrowLeftRight,
  ClipboardPasteIcon as Paste,
  CopyIcon as Copy,
  LanguagesIcon as Languages,
  LoaderCircleIcon as Loader,
  ShieldCheckIcon as ShieldCheck,
  Trash2Icon as Trash,
} from '@lucide/vue'

const languages = [
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁体中文' },
  { code: 'en', name: '英语' },
  { code: 'ja', name: '日语' },
  { code: 'ko', name: '韩语' },
  { code: 'fr', name: '法语' },
  { code: 'de', name: '德语' },
  { code: 'es', name: '西班牙语' },
  { code: 'ru', name: '俄语' },
  { code: 'it', name: '意大利语' },
  { code: 'pt', name: '葡萄牙语' },
  { code: 'ar', name: '阿拉伯语' },
  { code: 'nl', name: '荷兰语' },
  { code: 'pl', name: '波兰语' },
]

const sourceLang = ref('auto')
const targetLang = ref('zh-CN')
const sourceText = ref('')
const translatedText = ref('')
const detectedSource = ref('')
const provider = ref('')
const busy = ref(false)
const error = ref('')
const notice = ref('输入文本后按 Ctrl + Enter 翻译')
let requestController = null

const sourceLength = computed(() => Array.from(sourceText.value).length)
const detectedName = computed(() => languages.find((item) => item.code.toLowerCase() === detectedSource.value.toLowerCase())?.name || detectedSource.value.toUpperCase())

function languageName(code) {
  return languages.find((item) => item.code === code)?.name || code
}

async function translate() {
  const text = sourceText.value.trim()
  if (!text || busy.value) return
  error.value = ''
  notice.value = ''
  busy.value = true
  requestController?.abort()
  requestController = new AbortController()
  const timeout = setTimeout(() => requestController?.abort(), 15000)
  try {
    const response = await fetch('/api/v1/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, source_lang: sourceLang.value, target_lang: targetLang.value }),
      signal: requestController.signal,
    })
    const body = await response.json().catch(() => ({}))
    if (!response.ok) {
      if (response.status === 413) throw new Error('内容过长，请缩短文本后分段翻译')
      if (response.status === 429) throw new Error('请求较频繁，请稍后再试')
      throw new Error('翻译服务暂时不可用，请稍后重试')
    }
    translatedText.value = body.text || ''
    detectedSource.value = body.detected_source || ''
    provider.value = body.provider || ''
    notice.value = `${provider.value} · ${sourceLength.value} 字符`
  } catch (requestError) {
    error.value = requestError.name === 'AbortError' ? '翻译请求超时，请检查网络后重试' : requestError.message
  } finally {
    clearTimeout(timeout)
    busy.value = false
  }
}

function swapLanguages() {
  const source = sourceLang.value === 'auto' ? (detectedSource.value || 'en') : sourceLang.value
  sourceLang.value = targetLang.value
  targetLang.value = languages.some((item) => item.code === source) ? source : 'en'
  if (translatedText.value) {
    const previousSource = sourceText.value
    sourceText.value = translatedText.value
    translatedText.value = previousSource
  }
  detectedSource.value = ''
  provider.value = ''
}

async function pasteText() {
  try {
    sourceText.value = await navigator.clipboard.readText()
    notice.value = '已从剪贴板粘贴'
  } catch {
    error.value = '浏览器没有授予剪贴板读取权限'
  }
}

async function copyTranslation() {
  if (!translatedText.value) return
  try {
    await navigator.clipboard.writeText(translatedText.value)
    notice.value = '译文已复制'
  } catch {
    error.value = '复制失败，请手动选择译文'
  }
}

function clearAll() {
  requestController?.abort()
  sourceText.value = ''
  translatedText.value = ''
  detectedSource.value = ''
  provider.value = ''
  error.value = ''
  notice.value = '已清空'
}

function handleShortcut(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    event.preventDefault()
    translate()
  }
}

onBeforeUnmount(() => requestController?.abort())
</script>

<template>
  <div class="translation-studio">
    <div class="translation-languagebar">
      <label>
        <span>源语言</span>
        <select v-model="sourceLang">
          <option value="auto">自动检测</option>
          <option v-for="language in languages" :key="language.code" :value="language.code">{{ language.name }}</option>
        </select>
      </label>
      <button class="translation-swap" type="button" title="交换语言和文本" @click="swapLanguages"><ArrowLeftRight :size="17" /></button>
      <label>
        <span>目标语言</span>
        <select v-model="targetLang">
          <option v-for="language in languages" :key="language.code" :value="language.code">{{ language.name }}</option>
        </select>
      </label>
      <button class="translation-primary" type="button" :disabled="busy || !sourceText.trim() || sourceLength > 5000" @click="translate">
        <Loader v-if="busy" class="spin" :size="15" />
        <Languages v-else :size="15" />
        {{ busy ? '翻译中…' : '翻译' }}
      </button>
    </div>

    <div class="translation-workbench">
      <section class="translation-pane source-pane">
        <div class="translation-pane-heading">
          <span>{{ sourceLang === 'auto' ? (detectedSource ? `检测为 ${detectedName}` : '自动检测语言') : languageName(sourceLang) }}</span>
          <div>
            <button type="button" title="从剪贴板粘贴" @click="pasteText"><Paste :size="14" /> 粘贴</button>
            <button type="button" title="清空" @click="clearAll"><Trash :size="14" /></button>
          </div>
        </div>
        <textarea
          v-model="sourceText"
          maxlength="5000"
          aria-label="需要翻译的文本"
          placeholder="输入或粘贴需要翻译的内容…"
          spellcheck="true"
          @keydown="handleShortcut"
        />
        <footer><span>Ctrl + Enter</span><strong :class="{ over: sourceLength > 5000 }">{{ sourceLength }} / 5000</strong></footer>
      </section>

      <section class="translation-pane result-pane">
        <div class="translation-pane-heading">
          <span>{{ languageName(targetLang) }}</span>
          <button type="button" :disabled="!translatedText" title="复制译文" @click="copyTranslation"><Copy :size="14" /> 复制</button>
        </div>
        <textarea
          :value="translatedText"
          readonly
          aria-label="翻译结果"
          :placeholder="busy ? '正在等待翻译服务…' : '译文会显示在这里'"
        />
        <footer><span>{{ provider || '等待翻译' }}</span><strong>{{ Array.from(translatedText).length }} 字符</strong></footer>
      </section>
    </div>

    <div class="translation-footer">
      <p :class="{ error }">{{ error || notice }}</p>
      <span><ShieldCheck :size="14" /> 文本经本站后端发送给 {{ provider || '第三方翻译服务' }}，不会写入数据库</span>
    </div>
  </div>
</template>
