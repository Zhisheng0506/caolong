<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-3">
      <i v-if="icon" :class="icon" class="mr-3 text-secondary"></i>
      <slot />
    </h2>
    <p v-if="subtitle" class="text-primary/60 max-w-2xl mx-auto">{{ subtitle }}</p>
    <div class="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
    <slot name="after" />
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '' },
  subtitle: { type: String, default: '' },
})
</script>
