import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomePage.vue') },
  { path: '/introduction', name: 'introduction', component: () => import('@/views/IntroductionPage.vue') },
  { path: '/craft-exhibition', name: 'craft', component: () => import('@/views/CraftExhibitionPage.vue') },
  { path: '/history', name: 'history', component: () => import('@/views/HistoryPage.vue') },
  { path: '/data-visualization', name: 'dataviz', component: () => import('@/views/DataVizPage.vue') },
  { path: '/dragon-dance', name: 'dragon', component: () => import('@/views/DragonDancePage.vue') },
  { path: '/admin', name: 'admin', component: () => import('@/views/AdminPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
