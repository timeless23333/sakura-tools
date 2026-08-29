<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon as ArrowLeft, LockKeyholeIcon as LockKeyhole } from '@lucide/vue'
import { findTool } from '../data/tools'
import JsonTool from '../components/tools/JsonTool.vue'
import Base64Tool from '../components/tools/Base64Tool.vue'
import TimestampTool from '../components/tools/TimestampTool.vue'
import PasswordTool from '../components/tools/PasswordTool.vue'
import PixelBeadsTool from '../components/tools/PixelBeadsTool.vue'
import MarkdownTool from '../components/tools/MarkdownTool.vue'

const route = useRoute()
const tool = computed(() => findTool(route.params.slug))
const components = { json: JsonTool, base64: Base64Tool, timestamp: TimestampTool, password: PasswordTool, markdown: MarkdownTool, 'pixel-beads': PixelBeadsTool }
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
      <div class="local-badge"><LockKeyhole :size="14" /> 本地处理</div>
    </header>
    <component :is="toolComponent" />
  </section>
</template>
