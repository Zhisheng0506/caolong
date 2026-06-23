<template>
  <Teleport to="body">
    <div
      class="lightbox-overlay"
      :class="{ active: visible }"
      @click="close"
    >
      <button class="lightbox-close" @click="close" aria-label="关闭">
        <i class="fa fa-times"></i>
      </button>
      <img :src="src" :alt="alt" @click.stop />
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  src: String,
  alt: { type: String, default: '' },
  show: Boolean,
})

const emit = defineEmits(['close'])
const visible = ref(false)

watch(() => props.show, (val) => {
  visible.value = val
})

function close() {
  visible.value = false
  emit('close')
}
</script>
