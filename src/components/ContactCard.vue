<template>
  <div class="bg-white p-8 rounded-xl shadow-md text-center card-hover">
    <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <i :class="icon" class="text-secondary text-2xl"></i>
    </div>
    <h3 class="font-bold text-lg text-primary mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>
