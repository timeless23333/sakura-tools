<script setup>
import { GitForkIcon as GitFork, HeartIcon as Heart, MoonIcon as Moon, SunIcon as Sun } from '@lucide/vue'
import { onMounted, ref } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('sakura-theme')
  isDark.value = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
})

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('sakura-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <router-link class="brand" to="/" aria-label="Sakura Tools 首页">
        <span class="brand-mark" aria-hidden="true">桜</span>
        <span>
          <strong>Sakura</strong>
          <small>TOOLS / 工具箱</small>
        </span>
      </router-link>
      <nav class="header-actions" aria-label="页面操作">
        <a class="icon-button" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub 仓库">
          <GitFork :size="18" />
        </a>
        <button class="icon-button" type="button" :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'" @click="toggleDark()">
          <Sun v-if="isDark" :size="18" />
          <Moon v-else :size="18" />
        </button>
      </nav>
    </header>

    <main><router-view /></main>

    <footer class="site-footer">
      <p><span class="status-dot" /> 所有基础工具均在浏览器本地运行</p>
      <p>用 <Heart :size="13" fill="currentColor" /> 和 Go 构建</p>
    </footer>
  </div>
</template>
