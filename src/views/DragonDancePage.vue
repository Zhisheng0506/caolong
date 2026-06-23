<template>
  <div>
    <AppNavbar />

    <main class="w-[90%] max-w-[1200px] mx-auto">
      <!-- Hero 区域 -->
      <section class="section-padding relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 class="text-[clamp(3.5rem,8vw,6rem)] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 text-shadow">
              欢迎来到龙舞时空馆
            </h1>
            <p class="text-xl text-gray-800 max-w-3xl mx-auto px-4 py-6 bg-white/50 backdrop-blur-md rounded-lg shadow-sm">
              龙舞时空馆是湖口草龙博物馆的核心展区之一，致力于通过先进的技术手段，为您全方位呈现湖口草龙这一国家级非物质文化遗产的独特魅力。在这里，您可以深入了解草龙的历史渊源、制作工艺以及精彩的表演瞬间。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CloudPattern />

      <!-- 3D 建模区域 -->
      <section class="section-padding">
        <div class="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 class="text-[clamp(2.5rem,6vw,4rem)] font-bold text-primary mb-8 text-shadow">展馆 3D 建模</h2>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              点击下方的 3D 模型，您可以全方位、多角度地探索龙舞时空馆的内部结构和布局。仿佛身临其境，感受草龙文化的浓厚氛围。通过 3D 建模，您可以清晰地看到展馆的每一个角落，了解展品的分布和场馆的设计理念。
            </p>
            <div class="model-container mx-auto max-w-7xl">
              <div class="sketchfab-embed-wrapper">
                <iframe
                  title="zhanguan"
                  frameborder="0"
                  allowfullscreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  execution-while-out-of-viewport
                  execution-while-not-rendered
                  web-share
                  src="https://sketchfab.com/models/7a8479ffbfae48f6afd84cdd5aa0fab7/embed"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- 分割线 -->
      <div class="border-t-4 border-secondary my-16 opacity-50"></div>

      <!-- 板块间介绍 -->
      <section class="section-padding">
        <div class="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary mb-6 text-shadow">深入探索龙舞时空</h2>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">
              当您沉浸于 3D 建模带来的场馆探索体验后，不妨将目光转向我们精心制作的宣传视频。宣传视频将以动态的画面、生动的音乐和专业的解说，为您呈现龙舞时空馆背后的故事。从草龙的历史起源到现代传承，从制作工艺的精湛到表演现场的震撼，视频将全方位、多角度地展示湖口草龙文化的魅力。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CloudPattern />

      <!-- 宣传视频区域 -->
      <section class="section-padding">
        <div class="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 class="text-[clamp(2.5rem,6vw,4rem)] font-bold text-primary mb-8 text-shadow">展馆宣传视频</h2>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              观看我们精心制作的展馆宣传视频，通过精彩的画面和生动的解说，快速了解龙舞时空馆的亮点和特色。视频将带领您穿越时空，感受草龙文化的千年传承。
            </p>
            <div class="video-container mx-auto max-w-7xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import CloudPattern from '@/components/CloudPattern.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
</script>

<style scoped>
.model-container {
  height: 800px;
  border: 4px solid #d32f2f;
  border-radius: 20px;
  margin: 2rem 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.video-container {
  height: 800px;
  border: 4px solid #d32f2f;
  border-radius: 20px;
  margin: 2rem 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.model-container iframe,
.video-container iframe {
  width: 100%;
  height: 100%;
  border-radius: 16px;
}
.sketchfab-embed-wrapper {
  width: 100%;
  height: 100%;
}
</style>
