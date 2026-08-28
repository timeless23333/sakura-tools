<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowUpRightIcon as ArrowUpRight, SearchIcon as Search, SparklesIcon as Sparkles } from '@lucide/vue'
import { categories, tools } from '../data/tools'

const query = ref('')
const activeCategory = ref('全部')
const searchInput = ref(null)

const filteredTools = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return tools.filter((tool) => {
    const matchesCategory = activeCategory.value === '全部' || tool.category === activeCategory.value
    const matchesQuery = !keyword || `${tool.name} ${tool.summary} ${tool.category}`.toLowerCase().includes(keyword)
    return matchesCategory && matchesQuery
  })
})

function focusSearch(event) {
  if (event.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
    event.preventDefault()
    nextTick(() => searchInput.value?.focus())
  }
}

onMounted(() => window.addEventListener('keydown', focusSearch))
onBeforeUnmount(() => window.removeEventListener('keydown', focusSearch))
</script>

<template>
  <section class="home-intro">
    <div class="eyebrow"><span /> SAKURA WORKBENCH · 2026</div>
    <div class="intro-grid">
      <div>
        <h1>需要什么，<br /><em>拿来即用。</em></h1>
      </div>
      <div class="intro-copy">
        <p>一组简洁、快速、尊重隐私的在线工具。常用处理尽可能留在你的浏览器里完成。</p>
        <div class="privacy-note"><span class="status-dot" /> 无需登录 · 本地优先</div>
      </div>
    </div>
  </section>

  <section class="tool-index" aria-labelledby="tool-index-heading">
    <div class="section-heading">
      <div>
        <p class="section-kicker">TOOL INDEX</p>
        <h2 id="tool-index-heading">工具索引</h2>
      </div>
      <p class="tool-count">{{ String(filteredTools.length).padStart(2, '0') }} / {{ tools.length }}</p>
    </div>

    <div class="tool-controls">
      <label class="search-box">
        <Search :size="19" />
        <input ref="searchInput" v-model="query" type="search" placeholder="搜索工具，例如 JSON、图片…" />
        <kbd>/</kbd>
      </label>
      <div class="category-tabs" aria-label="工具分类">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="{ active: activeCategory === category }"
          @click="activeCategory = category"
        >{{ category }}</button>
      </div>
    </div>

    <div v-if="filteredTools.length" class="tool-grid">
      <component
        :is="tool.ready ? 'router-link' : 'article'"
        v-for="tool in filteredTools"
        :key="tool.slug"
        :to="tool.ready ? `/tools/${tool.slug}` : undefined"
        class="tool-card"
        :class="[`tone-${tool.color}`, { upcoming: !tool.ready, featured: tool.color === 'special' }]"
      >
        <div class="card-topline">
          <span class="tool-number">{{ tool.index }}</span>
          <span v-if="!tool.ready" class="soon-label">筹备中</span>
          <ArrowUpRight v-else :size="18" />
        </div>
        <div class="tool-symbol"><component :is="tool.icon" :size="25" :stroke-width="1.8" /></div>
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.summary }}</p>
        <span class="category-label">{{ tool.category }}</span>
        <Sparkles v-if="tool.color === 'special'" class="special-mark" :size="17" />
      </component>
    </div>
    <div v-else class="empty-state">
      <p>没有找到“{{ query }}”</p>
      <button type="button" @click="query = ''; activeCategory = '全部'">清除筛选</button>
    </div>
  </section>
</template>
