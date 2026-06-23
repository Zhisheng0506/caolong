<template>
  <span ref="el">0{{ suffix }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  target: { type: Number, required: true },
  suffix: { type: String, default: '' },
})

const el = ref(null)
let animated = false

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true
        animate()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  if (el.value) observer.observe(el.value)
})

function animate() {
  const duration = 2000
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(eased * props.target)
    if (el.value) el.value.textContent = current.toLocaleString() + props.suffix
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      if (el.value) el.value.textContent = props.target.toLocaleString() + props.suffix
    }
  }
  requestAnimationFrame(update)
}
</script>
