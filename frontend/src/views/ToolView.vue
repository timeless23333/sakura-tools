<script setup>
import { computed, defineAsyncComponent, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeftIcon as ArrowLeft, CloudIcon as Cloud, LockKeyholeIcon as LockKeyhole } from '@lucide/vue'
import { findTool } from '../data/tools'
import JsonTool from '../components/tools/JsonTool.vue'
import Base64Tool from '../components/tools/Base64Tool.vue'
import TimestampTool from '../components/tools/TimestampTool.vue'
import PasswordTool from '../components/tools/PasswordTool.vue'
import PixelBeadsTool from '../components/tools/PixelBeadsTool.vue'
import TranslateTool from '../components/tools/TranslateTool.vue'
import ImageTool from '../components/tools/ImageTool.vue'

const route = useRoute()
const router = useRouter()
const tool = computed(() => findTool(route.params.slug))
// 未上线的工具直接跳回首页（例如暂时关闭的 PDF 转 Markdown）。
watchEffect(() => {
  if (tool.value && tool.value.ready === false) router.replace('/')
})
const MarkdownTool = defineAsyncComponent(() => import('../components/tools/MarkdownTool.vue'))
const PdfTool = defineAsyncComponent(() => import('../components/tools/PdfTool.vue'))
const ColorTool = defineAsyncComponent(() => import('../components/tools/ColorTool.vue'))
const PdfMarkdownTool = defineAsyncComponent(() => import('../components/tools/PdfMarkdownTool.vue'))
const components = { json: JsonTool, base64: Base64Tool, timestamp: TimestampTool, password: PasswordTool, translate: TranslateTool, markdown: MarkdownTool, image: ImageTool, pdf: PdfTool, color: ColorTool, 'pdf-markdown': PdfMarkdownTool, 'pixel-beads': PixelBeadsTool }
const toolComponent = computed(() => components[route.params.slug])
</script>

<template>
  <section v-if="tool && toolComponent" class="workspace">
    <router-link class="back-link" to="/"><ArrowLeft :size="16" /> 返回工具索引</router-link>
    <header class="workspace-header">
      <div class="workspace-icon" :class="`tone-${tool.color}`"><component :is="tool.icon" :size="28" /></div>
      <div>
        <p>{{ tool.index }} / {{ tool.category }}</p>
        <h1>{{ tool.name }}</h1>
        <span>{{ tool.summary }}</span>
      </div>
      <div class="local-badge" :class="{ online: tool.slug === 'translate' }">
        <Cloud v-if="tool.slug === 'translate'" :size="14" />
        <LockKeyhole v-else :size="14" />
        {{ tool.slug === 'translate' ? '云端翻译' : '本地处理' }}
      </div>
    </header>
    <component :is="toolComponent" />
  </section>
</template>
