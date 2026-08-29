<script setup>
import { computed, defineAsyncComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon as ArrowLeft, CloudIcon as Cloud, LockKeyholeIcon as LockKeyhole } from '@lucide/vue'
import { findTool } from '../data/tools'
import JsonTool from '../components/tools/JsonTool.vue'
import Base64Tool from '../components/tools/Base64Tool.vue'
import TimestampTool from '../components/tools/TimestampTool.vue'
import PasswordTool from '../components/tools/PasswordTool.vue'
import PixelBeadsTool from '../components/tools/PixelBeadsTool.vue'
import TranslateTool from '../components/tools/TranslateTool.vue'

const route = useRoute()
const tool = computed(() => findTool(route.params.slug))
const MarkdownTool = defineAsyncComponent(() => import('../components/tools/MarkdownTool.vue'))
const components = { json: JsonTool, base64: Base64Tool, timestamp: TimestampTool, password: PasswordTool, translate: TranslateTool, markdown: MarkdownTool, 'pixel-beads': PixelBeadsTool }
const toolComponent = computed(() => components[route.params.slug])

onMounted(() => {
  fetch('/api/v1/events/tool-opened', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug: route.params.slug }),
  }).catch(() => {})
})
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
