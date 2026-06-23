<template>
  <nav
    class="sticky top-0 z-50 backdrop-blur-sm transition-all duration-300"
    :class="[scrolled ? 'py-2 shadow-lg' : 'py-3']"
    style="background-color: rgba(93, 64, 55, 0.95);"
  >
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 text-white hover:text-accent transition-colors no-underline">
        <i class="fa fa-dragon text-xl"></i>
        <span class="font-bold text-lg tracking-wide">湖口草龙博物馆</span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm transition-all no-underline"
          :class="{ 'bg-white/20 text-white': isActive(item.path) }"
        >
          {{ item.label }}
        </router-link>
        <!-- 草龙设计室 - links to original HTML -->
        <a
          href="/草龙设计室.html"
          class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm transition-all no-underline"
        >
          草龙设计室
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        class="lg:hidden text-white text-xl p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="菜单"
      >
        <i :class="mobileOpen ? 'fa fa-times' : 'fa fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      class="lg:hidden overflow-hidden transition-all duration-300"
      :class="mobileOpen ? 'max-h-96' : 'max-h-0'"
      style="background-color: rgba(93, 64, 55, 0.98);"
    >
      <div class="px-4 py-3 flex flex-col gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm transition-all no-underline"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </router-link>
        <a
          href="/草龙设计室.html"
          class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm transition-all no-underline"
        >
          草龙设计室
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { label: '首页', path: '/' },
  { label: '草龙介绍', path: '/introduction' },
  { label: '展览展示', path: '/craft-exhibition' },
  { label: '历史传承', path: '/history' },
  { label: '数据可视化', path: '/data-visualization' },
  { label: '龙舞时空馆', path: '/dragon-dance' },
  { label: '文创产品', path: '/#merchandise' },
  { label: '联系我们', path: '/#contact' },
]

function isActive(path) {
  return route.path === path
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
