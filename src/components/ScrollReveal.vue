<template>
  <div
    ref="el"
    :data-reveal="direction"
    :data-reveal-delay="delay"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  direction: { type: String, default: '' },  // '' | 'left' | 'right' | 'scale'
  delay: { type: [String, Number], default: '' }, // 1-4
})

const el = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
