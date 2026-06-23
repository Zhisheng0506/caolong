<template>
  <div
    class="timeline-item mb-16 relative"
    :class="{ expanded }"
    @click="$emit('toggle')"
  >
    <div
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 cursor-pointer"
      :style="{ animation: `dotPulse 2.5s infinite`, animationDelay: `${index * 0.6}s` }"
    ></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Text content (alternates sides) -->
      <div
        :class="item.direction === 'right' ? 'md:order-2 md:pl-12' : 'md:text-right md:pr-12'"
      >
        <h3 class="text-2xl font-bold text-primary mb-3">{{ item.title }}</h3>
        <p class="text-gray-700 leading-relaxed">{{ item.shortText }}</p>
        <div class="timeline-detail">
          <p class="text-sm text-gray-500 bg-primary/5 p-3 rounded-lg">
            <i class="fa fa-info-circle text-secondary mr-1"></i>
            {{ item.detailText }}
          </p>
        </div>
        <span class="expand-hint"><i class="fa fa-chevron-down"></i> 点击展开详情</span>
      </div>

      <!-- Image -->
      <div :class="item.direction === 'right' ? 'md:order-1 md:text-right md:pr-12' : 'md:pl-12'">
        <div class="rounded-xl overflow-hidden shadow-lg">
          <img :src="item.imgSrc" :alt="item.imgAlt" class="lightbox-img w-full h-auto md:h-96 object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
  index: { type: Number, required: true },
  expanded: { type: Boolean, default: false },
})
defineEmits(['toggle'])
</script>

<style scoped>
.timeline-item { cursor: pointer; }
.timeline-item .timeline-dot {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.timeline-item:hover [class*="rounded-full"] {
  transform: translate(-50%, -50%) scale(1.3);
  box-shadow: 0 0 20px rgba(211, 47, 47, 0.4);
}
.timeline-detail {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease, margin-top 0.3s ease;
  opacity: 0;
  margin-top: 0;
}
.timeline-item.expanded .timeline-detail {
  max-height: 200px;
  opacity: 1;
  margin-top: 1rem;
}
.expand-hint {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  color: #d32f2f;
  margin-top: 0.5rem;
  transition: opacity 0.3s;
}
.timeline-item.expanded .expand-hint {
  opacity: 0;
}
@keyframes dotPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.3); }
  50% { box-shadow: 0 0 0 10px rgba(211, 47, 47, 0); }
}
.lightbox-img { cursor: zoom-in; }
</style>
