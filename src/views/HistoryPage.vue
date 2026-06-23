<template>
  <div class="bg-neutral">
    <AppNavbar />

    <!-- 英雄区 -->
    <header class="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875683.jpeg?1080x810" alt="草龙文化历史" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-primary/60"></div>
      </div>
      <div class="container mx-auto px-4 z-10 text-center">
        <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-shadow mb-4">草龙文化历史展</h1>
        <p class="text-[clamp(1rem,2vw,1.25rem)] text-white max-w-2xl mx-auto mb-8">
          追溯湖口草龙的千年历史，见证这一非遗瑰宝的传承与发展
        </p>
        <a href="#history" class="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg no-underline">
          探索历史 <i class="fa fa-arrow-down ml-2"></i>
        </a>
      </div>
    </header>

    <CloudPattern />

    <main class="container mx-auto px-4 py-16">
      <!-- 历史时间线 -->
      <section id="history" class="mb-20">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-primary text-center mb-12">草龙的历史沿革</h2>

        <div class="relative">
          <!-- 时间线中心轴 -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

          <template v-for="(item, index) in timelineItems" :key="index">
            <ScrollReveal :direction="item.direction">
              <TimelineItem
                :item="item"
                :index="index"
                :expanded="expandedIndex === index"
                @toggle="toggleTimeline(index)"
              />
            </ScrollReveal>
          </template>
        </div>
      </section>

      <CloudPattern />

      <!-- 文化价值 -->
      <section class="mb-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-primary text-center mb-12">文化价值与传承</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal :delay="1">
            <div class="bg-neutral p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fa fa-history text-2xl text-primary"></i>
              </div>
              <h3 class="text-xl font-bold text-primary text-center mb-3">历史见证</h3>
              <p class="text-gray-700 text-center">湖口草龙承载了当地千年的历史记忆，是研究江南地区民俗文化和农耕文明的重要实物资料。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="2">
            <div class="bg-neutral p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fa fa-users text-2xl text-primary"></i>
              </div>
              <h3 class="text-xl font-bold text-primary text-center mb-3">民俗文化</h3>
              <p class="text-gray-700 text-center">草龙表演融合了舞蹈、音乐和工艺，是当地节庆活动中不可或缺的一部分，体现了民众的精神信仰和审美情趣。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="3">
            <div class="bg-neutral p-6 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fa fa-handshake text-2xl text-primary"></i>
              </div>
              <h3 class="text-xl font-bold text-primary text-center mb-3">技艺传承</h3>
              <p class="text-gray-700 text-center">草龙制作技艺代代相传，凝聚了民间艺人的智慧和创造力，是中华民族非物质文化遗产的重要组成部分。</p>
            </div>
          </ScrollReveal>
        </div>

        <!-- 代表性传承人 -->
        <div class="mt-12">
          <h3 class="text-2xl font-bold text-primary text-center mb-6">代表性传承人</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <div class="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <img src="https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875692.jpeg?1080x767" alt="传承人1" class="lightbox-img w-full h-64 object-cover" @click="openLightbox('https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875692.jpeg?1080x767', '喻芳泽')">
                <div class="p-6">
                  <h4 class="text-xl font-bold text-primary mb-2">喻芳泽</h4>
                  <p class="text-gray-600 mb-3">喻芳泽，男，1944年6月12日出生，江西湖口人。第一批国家级非物质文化遗产项目草编（湖口草龙）代表性传承人</p>
                  <div class="flex space-x-2">
                    <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">传统制作技艺</span>
                    <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">第三代传人</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div class="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <img src="/LOCAL1733964284399T2WQ3PYQZ3.jpg" alt="传承人2" class="lightbox-img w-full h-64 object-cover" @click="openLightbox('/LOCAL1733964284399T2WQ3PYQZ3.jpg', '喻远莉')">
                <div class="p-6">
                  <h4 class="text-xl font-bold text-primary mb-2">喻远莉</h4>
                  <p class="text-gray-600 mb-3">喻远莉，国家级非物质文化遗产项目湖口草龙的省级代表性传承人，2021年度江西省级非物质文化遗产代表性传承人传承活动评估为（优秀）。</p>
                  <div class="flex space-x-2">
                    <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">技艺创新</span>
                    <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">第四代传人</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CloudPattern />

      <!-- 历史纪录片 -->
      <section class="mb-20">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-primary text-center mb-12">历史纪录片</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal :delay="1">
            <div class="bg-white rounded-xl overflow-hidden shadow-lg">
              <div class="relative h-64">
                <iframe width="100%" height="100%" src="https://player.bilibili.com/player.html?aid=853973611&bvid=BV1LL4y1F72E&cid=715612153&page=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-primary mb-2">湖口草龙：千年传承</h3>
                <p class="text-gray-600">这部纪录片深入记录了湖口草龙的历史渊源、制作工艺和文化内涵，展现了这一非遗项目的独特魅力。</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="2">
            <div class="bg-white rounded-xl overflow-hidden shadow-lg">
              <div class="relative h-64">
                <iframe width="100%" height="100%" src="https://player.bilibili.com/player.html?aid=391018782&bvid=BV1md4y1s7Aa&cid=917700445&page=1" allowfullscreen></iframe>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-primary mb-2">草龙传承人的故事</h3>
                <p class="text-gray-600">跟随镜头走进草龙传承人的生活，了解他们如何坚守传统，将这门古老技艺代代相传。</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CloudPattern />

      <!-- 参观信息 -->
      <section class="bg-primary text-white rounded-2xl overflow-hidden shadow-xl">
        <ScrollReveal>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">参观草龙文化历史展</h2>
              <p class="mb-6 text-white/90">欢迎来到湖口草龙博物馆，亲身感受这一千年非遗的独特魅力。通过实物展示、互动体验和专业讲解，深入了解草龙文化的历史与传承。</p>
              <div class="space-y-4">
                <div class="flex items-start"><i class="fa fa-map-marker text-secondary mt-1 mr-3"></i><span>江西省九江市湖口县石钟山景区内</span></div>
                <div class="flex items-start"><i class="fa fa-clock text-secondary mt-1 mr-3"></i><span>开放时间：周二至周日 9:00-17:00（周一闭馆）</span></div>
                <div class="flex items-start"><i class="fa fa-ticket text-secondary mt-1 mr-3"></i><span>门票：30元/人，学生票15元/人</span></div>
              </div>
              <div class="mt-8">
                <form @submit.prevent="handleBooking" class="space-y-4" novalidate>
                  <div>
                    <label class="block text-white/90 text-sm mb-1">姓名</label>
                    <input type="text" v-model="booking.name" class="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="请输入您的姓名">
                  </div>
                  <div>
                    <label class="block text-white/90 text-sm mb-1">手机号码</label>
                    <input type="tel" v-model="booking.phone" class="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="请输入您的手机号码">
                  </div>
                  <div>
                    <label class="block text-white/90 text-sm mb-1">参观日期</label>
                    <input type="date" v-model="booking.visit_date" class="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary">
                  </div>
                  <div>
                    <label class="block text-white/90 text-sm mb-1">参观人数</label>
                    <input type="number" v-model.number="booking.number_of_people" min="1" max="100" class="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary">
                  </div>
                  <button type="submit" :disabled="bookingSubmitting" class="w-full bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" :class="{ 'opacity-70 cursor-not-allowed': bookingSubmitting }">
                    <i v-if="bookingSubmitting" class="fa fa-spinner fa-spin mr-2"></i>
                    <i v-else class="fa fa-calendar-check mr-2"></i>
                    {{ bookingSubmitting ? '提交中...' : '预约参观' }}
                  </button>
                  <div v-if="bookingFeedback.show" class="mt-3 p-3 rounded-lg text-center text-sm font-medium" :class="bookingFeedback.isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'">
                    {{ bookingFeedback.message }}
                  </div>
                </form>
              </div>
            </div>
            <div class="h-80 md:h-auto relative">
              <img src="/微信图片_20250508125827.png" alt="博物馆外观" class="w-full h-full object-cover">
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>

    <AppFooter />
    <BackToTop />
    <AppLightbox :src="lightboxSrc" :alt="lightboxAlt" :show="lightboxVisible" @close="lightboxVisible = false" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import CloudPattern from '@/components/CloudPattern.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import AppLightbox from '@/components/AppLightbox.vue'
import TimelineItem from '@/components/TimelineItem.vue'
import { api } from '@/api'

const lightboxVisible = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')
const expandedIndex = ref(-1)

const timelineItems = [
  {
    title: '起源传说',
    shortText: '湖口草龙起源可追溯至南宋时期，传说当地遭遇大旱，百姓祈求龙王降雨，以稻草扎龙祭祀，终得甘霖。此后，扎草龙祈雨便成为当地习俗，历经数百年传承至今。',
    detailText: '草龙祈雨习俗源于南宋，是当地百姓最原始的信仰表达形式。据传，扎制草龙祭祀后，天降甘霖，从此草龙成为湖口地区最神圣的民间艺术。',
    imgSrc: '/起源.png',
    imgAlt: '起源传说',
    direction: 'left',
  },
  {
    title: '明清时期的发展',
    shortText: '明清时期，湖口草龙制作工艺逐渐成熟，不仅用于祈雨，还成为元宵节等节日的重要表演形式。草龙造型更加精致，舞动技巧也日益丰富，形成了独特的地域文化特色。',
    detailText: '明清两代是湖口草龙发展的黄金时期，每逢元宵佳节，数十条草龙同时起舞，场面蔚为壮观，吸引了周边数县百姓前来观赏。',
    imgSrc: '/起源2.png',
    imgAlt: '明清时期',
    direction: 'right',
  },
  {
    title: '近现代传承',
    shortText: '20世纪，湖口草龙经历了社会变革的考验，但在当地政府和民间艺人的努力下，这一传统技艺得以保留。1996年，湖口县被文化部命名为"中国民间艺术（草龙）之乡"。',
    detailText: '在文化大革命期间，草龙制作一度中断。改革开放后，在喻芳泽等老艺人的努力下，湖口草龙重获新生，并逐渐走向全国舞台。',
    imgSrc: 'http://k.sinaimg.cn/n/sinakd20200929ac/223/w600h423/20200929/075e-izwfpys5020357.jpg/w700d1q75cms.jpg',
    imgAlt: '近现代传承',
    direction: 'left',
  },
  {
    title: '现代保护与发展',
    shortText: '2008年，湖口草龙被列入国家级非物质文化遗产名录。如今，通过学校教育、文化节展演和旅游开发等多种方式，湖口草龙不仅在本地得到传承，还走向全国，成为江西文化的重要名片。',
    detailText: '如今，湖口草龙已多次亮相中央电视台和各大文化节，成为江西省对外文化交流的重要名片，新一代传承人正在用创新方式让草龙焕发新的生命力。',
    imgSrc: '/微信图片_20250508124513.png',
    imgAlt: '现代保护',
    direction: 'right',
  },
]

function toggleTimeline(index) {
  expandedIndex.value = expandedIndex.value === index ? -1 : index
}

function openLightbox(src, alt) {
  lightboxSrc.value = src
  lightboxAlt.value = alt
  lightboxVisible.value = true
}

// Booking form
const booking = reactive({ name: '', phone: '', visit_date: '', number_of_people: 1 })
const bookingSubmitting = ref(false)
const bookingFeedback = reactive({ show: false, message: '', isError: false })

async function handleBooking() {
  bookingFeedback.show = false
  const errors = []
  if (!booking.name.trim()) errors.push('请填写您的姓名')
  if (!booking.phone.trim() || !/^1[3-9]\d{9}$/.test(booking.phone)) errors.push('请填写有效的手机号码')
  if (!booking.visit_date) errors.push('请选择参观日期')
  const people = parseInt(booking.number_of_people, 10)
  if (!booking.number_of_people || isNaN(people) || people < 1 || people > 100) errors.push('参观人数须在1-100之间')

  if (errors.length > 0) {
    bookingFeedback.show = true
    bookingFeedback.message = errors.join('；')
    bookingFeedback.isError = true
    return
  }

  bookingSubmitting.value = true
  try {
    const data = await api.submitExhibitionBooking({
      name: booking.name.trim(),
      phone: booking.phone.trim(),
      visit_date: booking.visit_date,
      number_of_people: people,
    })
    bookingFeedback.show = true
    bookingFeedback.message = data.message
    bookingFeedback.isError = !data.success
    if (data.success) {
      booking.name = ''
      booking.phone = ''
      booking.visit_date = ''
      booking.number_of_people = 1
    }
  } catch {
    bookingFeedback.show = true
    bookingFeedback.message = '网络错误，请检查网络连接后重试。'
    bookingFeedback.isError = true
  } finally {
    bookingSubmitting.value = false
  }
}
</script>

<style scoped>
.lightbox-img { cursor: zoom-in; }
</style>
