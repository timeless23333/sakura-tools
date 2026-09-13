import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ToolView from './views/ToolView.vue'
import AdminAnalyticsView from './views/AdminAnalyticsView.vue'
import { trackPageView } from './analytics'
import './styles/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/tools/:slug', component: ToolView },
    { path: '/admin/analytics', component: AdminAnalyticsView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

// 路由切换自动记录 page_view（/admin/* 不计入站点统计）。
router.afterEach((to) => {
  trackPageView(to.path)
})

createApp(App).use(router).mount('#app')
