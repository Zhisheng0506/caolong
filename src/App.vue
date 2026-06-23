<template>
  <div id="app-root">
    <!-- Loading Screen -->
    <Transition name="loading-fade">
      <div
        v-if="loading"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style="background-color: #5d4037;"
      >
        <div class="text-center">
          <div class="loading-spinner mx-auto mb-6"></div>
          <i class="fa fa-dragon text-white text-3xl mb-4 block"></i>
          <h2 class="text-white text-2xl font-bold tracking-widest">湖口草龙博物馆</h2>
          <p class="text-white/60 text-sm mt-2">千年非遗 · 薪火相传</p>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})
</script>

<style>
.loading-fade-leave-active {
  transition: opacity 0.7s ease;
}
.loading-fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from {
  opacity: 0;
}
.page-leave-to {
  opacity: 0;
}
</style>
