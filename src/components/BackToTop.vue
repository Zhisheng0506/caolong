<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-secondary text-white shadow-lg hover:bg-red-700 transition-all duration-300 border-none cursor-pointer"
    :class="{ 'opacity-0 pointer-events-none': !visible }"
    aria-label="回到顶部"
    title="回到顶部"
  >
    <i class="fa fa-arrow-up text-sm"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
