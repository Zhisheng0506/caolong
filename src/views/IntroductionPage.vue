<template>
  <div>
    <AppNavbar />

    <!-- 草龙介绍主体 -->
    <main class="container mx-auto py-16">
      <SectionTitle icon="fa fa-info-circle">湖口草龙详细介绍</SectionTitle>

      <!-- 历史渊源与文化背景 -->
      <ScrollReveal :delay="1">
        <div class="mb-12 custom-card">
          <h2 class="text-3xl font-bold mb-4">历史渊源与文化背景</h2>
          <p class="text-lg leading-relaxed">
            湖口草龙是一种古老而精巧的民间艺术，其发源地——江西省湖口县，是一片有着光荣革命传统的红色土地。无数革命先烈的光辉事迹至今依然鼓舞着一代代湖口人民接续奋斗。在"两个一百年"奋斗目标历史交汇的关键节点，湖口坚持将历史、现实、未来相贯通，着力用活红色资源、讲好红色故事、传承红色基因，全力发展有关草龙的红色民俗文化。
          </p>
        </div>
      </ScrollReveal>

      <CloudPattern />

      <!-- 制作工艺 -->
      <ScrollReveal :delay="2">
        <div class="mb-12 custom-card">
          <h2 class="text-3xl font-bold mb-4">制作工艺</h2>
          <p class="text-lg leading-relaxed">
            湖口草龙的制作工艺极为复杂，需使用稻草、竹木、铁丝等材料，采用编、插、织、嵌、镶、绕、缠、悬、挂、空、别、剔、镂、透等多种工艺技巧。制作一条草龙通常需要数万根稻草，包括龙头的精细编制、龙身的连绵起伏，以及龙尾的独特设计，每一处细节都展现出工匠们的精湛技艺和智慧。
          </p>
          <div class="flex flex-wrap -mx-4 mt-6">
            <div class="w-full md:w-1/3 px-4 mb-4">
              <img
                src="/LOCAL1733964283342J300OEB99T.jpg"
                alt="草龙制作工艺1"
                class="lightbox-img rounded-md shadow-md w-full h-80 object-cover"
                @click="openLightbox('/LOCAL1733964283342J300OEB99T.jpg', '草龙制作工艺1')"
              />
            </div>
            <div class="w-full md:w-1/3 px-4 mb-4">
              <img
                src="/LOCAL1733964283358TLUVEHLSA1.jpg"
                alt="草龙制作工艺2"
                class="lightbox-img rounded-md shadow-md w-full h-80 object-cover"
                @click="openLightbox('/LOCAL1733964283358TLUVEHLSA1.jpg', '草龙制作工艺2')"
              />
            </div>
            <div class="w-full md:w-1/3 px-4 mb-4">
              <img
                src="/LOCAL1733964284399T2WQ3PYQZ3.jpg"
                alt="草龙制作工艺3"
                class="lightbox-img rounded-md shadow-md w-full h-80 object-cover"
                @click="openLightbox('/LOCAL1733964284399T2WQ3PYQZ3.jpg', '草龙制作工艺3')"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <CloudPattern />

      <!-- 国家级非遗荣誉 -->
      <ScrollReveal :delay="3">
        <div class="mb-12 custom-card">
          <h2 class="text-3xl font-bold mb-4">国家级非遗荣誉</h2>
          <p class="text-lg leading-relaxed">
            湖口草龙已被列为国家级非物质文化遗产。2023年10月31日，《国家级非物质文化遗产代表性项目保护单位名单》公布，草编（湖口草龙）项目保护单位湖口县非物质文化遗产保护研究会评估合格。在国家政策的大力支持下，湖口草龙深植于红色革命老区，发扬红色革命精神，进一步发挥振兴乡村、造福人民的作用。
          </p>
          <div class="w-full md:w-2/3 px-4 mb-4 mx-auto">
            <img
              src="/微信图片_20250508124513.png"
              alt="草龙非遗荣誉"
              class="lightbox-img rounded-md shadow-md w-full"
              @click="openLightbox('/微信图片_20250508124513.png', '草龙非遗荣誉')"
            />
          </div>
        </div>
      </ScrollReveal>

      <CloudPattern />

      <!-- 发展面临的困境 -->
      <ScrollReveal :delay="4">
        <div class="mb-12 custom-card">
          <h2 class="text-3xl font-bold mb-4">发展面临的困境</h2>
          <p class="text-lg leading-relaxed">
            非物质文化遗产往往与所处的自然环境紧密相关，湖口草龙的发源地地处较为偏僻的乡镇地区，经济发展一般，其影响力受到地理区域的局限。同时，湖口草龙作为我国传统农业社会发展下劳动人民智慧的结晶，与农业、农村、农民紧密相连。但随着我国进入城镇化和工业化阶段，产业转型使得更多的青壮年离开本土，从事二三产业工作，造成了草龙传承人的缺失。
          </p>
        </div>
      </ScrollReveal>

      <CloudPattern />

      <!-- 数字草龙解决方案 -->
      <ScrollReveal :delay="5">
        <div class="custom-card">
          <h2 class="text-3xl font-bold mb-4">数字草龙的创新发展</h2>
          <p class="text-lg leading-relaxed">
            随着现代高新技术的发展和互联网的成熟稳定，数字化越来越多地被应用于非物质文化遗产的保护和传承事业中。本团队计划推出数字草龙产品，以虚拟现实技术为依托，建构起数字草龙文化馆，充分展现湖口草龙的形态和舞蹈动作，以此再次点燃草龙的生命力，打破草龙的地理区域局限性和传承主体缺失性。
          </p>
        </div>
      </ScrollReveal>
    </main>

    <AppFooter />
    <BackToTop />
    <AppLightbox :src="lightboxSrc" :alt="lightboxAlt" :show="lightboxVisible" @close="lightboxVisible = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import CloudPattern from '@/components/CloudPattern.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import AppLightbox from '@/components/AppLightbox.vue'

const lightboxVisible = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')

function openLightbox(src, alt) {
  lightboxSrc.value = src
  lightboxAlt.value = alt
  lightboxVisible.value = true
}
</script>

<style scoped>
.custom-card {
  background-color: #fffaf0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  transition: all 0.3s ease;
}
.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.lightbox-img {
  cursor: zoom-in;
}
</style>
