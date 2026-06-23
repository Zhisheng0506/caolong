<template>
  <div>
    <AppNavbar />

    <!-- Hero 区域 -->
    <section id="hero" class="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0 hero-parallax" ref="heroParallax">
        <img src="/微信图片_20250508125827.png" alt="湖口草龙" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-primary/40"></div>
      </div>
      <div class="container mx-auto px-4 z-10 text-center">
        <h1 class="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white text-shadow mb-6">湖口草龙博物馆</h1>
        <p class="text-[clamp(1rem,3vw,1.5rem)] text-white text-shadow mb-10 max-w-3xl mx-auto">
          探索国家级非物质文化遗产，感受千年草龙艺术的独特魅力
        </p>
        <a href="#grass-dragon-introduction" class="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg no-underline">
          了解更多 <i class="fa fa-arrow-down ml-2 animate-bounce"></i>
        </a>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-accent to-transparent"></div>
    </section>

    <CloudPattern />

    <!-- 草龙介绍 -->
    <section id="grass-dragon-introduction" class="section-padding">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <ScrollReveal>
            <h2 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-primary mb-4">草龙介绍</h2>
            <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">湖口草龙是江西湖口民间游艺习俗中的一种独具特色的艺术形式，以稻草为主要材料扎制而成。</p>
          </ScrollReveal>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div class="relative">
              <img src="http://jx.people.com.cn/NMediaFile/2024/0208/LOCAL1707353160249PGI2T1AWJ2.jpg" alt="湖口草龙" class="lightbox-img rounded-lg shadow-xl w-full h-auto object-cover" @click="openLightbox('http://jx.people.com.cn/NMediaFile/2024/0208/LOCAL1707353160249PGI2T1AWJ2.jpg', '湖口草龙')">
              <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p class="text-primary font-bold text-lg">国家级非物质文化遗产</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div class="space-y-6">
              <p class="text-lg leading-relaxed text-gray-700">湖口草龙历史悠久，蕴含着丰富的文化内涵和民间智慧，是中华民族传统文化的瑰宝之一。它起源于古代农耕社会，是当地百姓庆祝丰收、祈求平安的重要民俗活动。</p>
              <p class="text-lg leading-relaxed text-gray-700">草龙制作工艺复杂精细，需使用数万根稻草，采用编、插、织、嵌等多种技法，历时数周才能完成。每条草龙不仅是一件艺术品，更是民间艺人智慧和汗水的结晶。</p>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div v-for="(stat, i) in stats" :key="i" class="bg-white p-6 rounded-lg shadow-md text-center" :data-reveal-delay="i+1">
                  <div class="text-3xl font-bold text-secondary">
                    <AnimatedCounter :target="stat.target" :suffix="stat.suffix" />
                  </div>
                  <p class="text-sm text-gray-600 mt-1">{{ stat.label }}</p>
                </div>
              </div>

              <router-link to="/introduction" class="inline-block mt-6 bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md no-underline">
                阅读更多 <i class="fa fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <CloudPattern />

    <!-- 展览展示 -->
    <section id="exhibition" class="section-padding bg-neutral bg-texture">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <ScrollReveal>
            <h2 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-primary mb-4">展览展示</h2>
            <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">探索湖口草龙的历史渊源、制作工艺和文化传承，感受这一传统艺术的独特魅力。</p>
          </ScrollReveal>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div class="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div class="h-64 overflow-hidden">
                <img src="https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875692.jpeg?1080x767" alt="草龙制作工艺展" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-primary mb-3">草龙制作工艺展</h3>
                <p class="text-gray-600 mb-4">详细展示湖口草龙的制作流程和工艺技巧，从选料到成品，全方位呈现这一传统手工艺的精湛技艺。</p>
                <router-link to="/craft-exhibition" class="text-secondary font-medium hover:underline flex items-center no-underline">了解详情 <i class="fa fa-long-arrow-right ml-2"></i></router-link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div class="h-64 overflow-hidden">
                <img src="https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875683.jpeg?1080x810" alt="草龙文化历史展" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-primary mb-3">草龙文化历史展</h3>
                <p class="text-gray-600 mb-4">追溯湖口草龙的历史渊源和文化传承，通过珍贵的历史图片和文献，展现这一非遗项目的发展历程。</p>
                <router-link to="/history" class="text-secondary font-medium hover:underline flex items-center no-underline">了解详情 <i class="fa fa-long-arrow-right ml-2"></i></router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <CloudPattern />

    <!-- 草龙设计室引导 -->
    <section class="section-padding bg-white relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <ScrollReveal>
            <h2 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-primary mb-4">草龙设计室</h2>
            <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">发挥创意，拖拽龙体部件，自由绘画，设计属于你的独特草龙！</p>
          </ScrollReveal>
        </div>
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <ScrollReveal direction="left">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fa fa-puzzle-piece text-2xl text-primary"></i></div>
              <h4 class="font-bold text-lg text-primary mb-2">拖拽拼装</h4>
              <p class="text-gray-600 text-sm">丰富的龙体部件素材，自由组合拼接</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div class="text-center">
              <div class="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <i class="fa fa-paint-brush text-3xl text-secondary"></i>
                <div class="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"><i class="fa fa-star text-white text-xs"></i></div>
              </div>
              <h4 class="font-bold text-lg text-primary mb-2">自由绘画</h4>
              <p class="text-gray-600 text-sm">画笔工具随心创作，多色选择</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fa fa-download text-2xl text-primary"></i></div>
              <h4 class="font-bold text-lg text-primary mb-2">导出分享</h4>
              <p class="text-gray-600 text-sm">一键导出PNG图片，保存你的作品</p>
            </div>
          </ScrollReveal>
        </div>
        <div class="text-center mt-10">
          <ScrollReveal>
            <a href="/草龙设计室.html" class="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg no-underline">
              <i class="fa fa-magic mr-3"></i> 进入设计室 <i class="fa fa-arrow-right ml-3"></i>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <CloudPattern />

    <!-- 龙舞时空馆 -->
    <section id="dragon-dance" class="section-padding relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-5">
        <img src="/LOCAL1707353160249PGI2T1AWJ2.jpg" alt="" class="w-full h-full object-cover">
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <ScrollReveal><h2 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-primary mb-4">龙舞时空馆</h2></ScrollReveal>
          <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">欢迎来到龙舞时空馆，在这里您将身临其境地感受湖口草龙的魅力。</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">沉浸式体验草龙文化</h3>
            <p class="text-lg leading-relaxed text-gray-700">通过先进的虚拟现实和多媒体技术，我们为您呈现草龙舞动的精彩瞬间，仿佛将您带入了草龙的奇幻世界。</p>
            <div class="space-y-4 mt-8">
              <div v-for="(feat, i) in features" :key="i" class="flex items-start" :data-reveal-delay="i+1">
                <div class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"><i :class="feat.icon" class="text-secondary"></i></div>
                <div><h4 class="font-bold text-lg">{{ feat.title }}</h4><p class="text-gray-600">{{ feat.desc }}</p></div>
              </div>
            </div>
            <router-link to="/dragon-dance" class="inline-block mt-8 bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md no-underline">
              立即体验 <i class="fa fa-arrow-right ml-2"></i>
            </router-link>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-xl overflow-hidden shadow-lg transform translate-y-8">
              <img src="/设计非遗网站板块封面.png" alt="龙舞时空馆1" class="lightbox-img w-full h-full object-cover" @click="openLightbox('/设计非遗网站板块封面.png', '龙舞时空馆1')">
            </div>
            <div class="rounded-xl overflow-hidden shadow-lg">
              <img src="/LOCAL1707353160323UM6OS10BA6.jpg" alt="龙舞时空馆2" class="lightbox-img w-full h-full object-cover" @click="openLightbox('/LOCAL1707353160323UM6OS10BA6.jpg', '龙舞时空馆2')">
            </div>
          </div>
        </div>
      </div>
    </section>

    <CloudPattern />

    <!-- 周边文创 -->
    <section id="merchandise" class="section-padding bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-primary mb-4">周边文创</h2>
          <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">湖口草龙文化衍生产品，将传统工艺与现代设计相结合，让非遗文化走进生活。</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="(product, i) in products" :key="i" class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group" :data-reveal-delay="i+1">
            <div class="relative overflow-hidden">
              <img :src="product.img" :alt="product.name" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button class="bg-secondary text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" @click="openPurchase(product)">
                  <i class="fa fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg text-primary mb-1">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ product.desc }}</p>
              <div class="flex justify-between items-center">
                <span class="text-secondary font-bold">¥{{ product.price }}</span>
                <div class="text-yellow-400 text-sm">
                  <i v-for="n in 5" :key="n" :class="n <= product.stars ? 'fa fa-star' : n - 0.5 <= product.stars ? 'fa fa-star-half-o' : 'fa fa-star-o'"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CloudPattern />

    <!-- 联系我们 -->
    <section id="contact" class="section-padding">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-primary mb-4">联系我们</h2>
          <div class="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">欢迎来到湖口草龙博物馆，我们期待与您共同守护这一珍贵的文化遗产。</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ScrollReveal :delay="1"><ContactCard icon="fa fa-map-marker" title="地址" text="江西省九江市湖口县石钟山景区内" /></ScrollReveal>
          <ScrollReveal :delay="2"><ContactCard icon="fa fa-phone" title="电话" text="0792-6332123" /></ScrollReveal>
          <ScrollReveal :delay="3"><ContactCard icon="fa fa-clock" title="开放时间" text="周二至周日 9:00-17:00" /></ScrollReveal>
        </div>
      </div>
    </section>

    <AppFooter />
    <BackToTop />
    <AppLightbox :src="lightboxSrc" :alt="lightboxAlt" :show="lightboxVisible" @close="lightboxVisible = false" />

    <!-- 购买弹窗 -->
    <Teleport to="body">
      <div class="purchase-overlay" :class="{ active: purchaseVisible }" @click.self="purchaseVisible = false">
        <div class="purchase-dialog">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-primary">确认订单</h3>
            <button class="text-gray-400 hover:text-gray-600 text-2xl leading-none border-none bg-transparent cursor-pointer" @click="purchaseVisible = false">&times;</button>
          </div>
          <div class="bg-accent rounded-lg p-4 mb-4">
            <div class="flex justify-between items-center">
              <span class="font-medium text-primary">{{ selectedProduct.name || '-' }}</span>
              <span class="text-secondary font-bold">¥{{ selectedProduct.price }}</span>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <label class="text-sm text-gray-600">数量</label>
              <input type="number" v-model.number="orderQuantity" min="1" max="99" class="w-20 text-center border border-gray-300 rounded-lg p-1">
            </div>
            <div class="text-right text-sm text-gray-500 mt-1">合计：<span class="text-secondary font-bold">¥{{ selectedProduct.price * orderQuantity }}</span></div>
          </div>
          <div class="space-y-3">
            <input type="text" v-model="orderName" placeholder="收货人姓名">
            <input type="tel" v-model="orderPhone" placeholder="手机号码">
            <input type="text" v-model="orderAddress" placeholder="收货地址">
          </div>
          <div v-if="purchaseFeedback.show" class="mt-3 p-3 rounded-lg text-center text-sm font-medium" :class="purchaseFeedback.isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'">
            {{ purchaseFeedback.message }}
          </div>
          <button :disabled="purchaseSubmitting" class="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white font-medium py-3 rounded-lg transition-all duration-300 border-none cursor-pointer" :class="{ 'opacity-70 cursor-not-allowed': purchaseSubmitting }" @click="submitOrder">
            <i v-if="purchaseSubmitting" class="fa fa-spinner fa-spin mr-2"></i>
            <i v-else class="fa fa-check mr-2"></i>
            {{ purchaseSubmitting ? '提交中...' : '确认下单' }}
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import CloudPattern from '@/components/CloudPattern.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import AppLightbox from '@/components/AppLightbox.vue'
import AnimatedCounter from '@/components/AnimatedCounter.vue'
import ContactCard from '@/components/ContactCard.vue'
import { api } from '@/api'

const heroParallax = ref(null)
const lightboxVisible = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')

const stats = [
  { target: 800, suffix: '+', label: '年传承历史' },
  { target: 30000, suffix: '+', label: '根稻草精编' },
  { target: 2008, suffix: '', label: '年列入国家级非遗' },
  { target: 15, suffix: '道', label: '核心制作工序' },
]

const features = [
  { icon: 'fa fa-vr-cardboard', title: 'VR沉浸体验', desc: '利用虚拟现实技术，让您亲身感受草龙舞动的震撼，仿佛置身于表演现场。' },
  { icon: 'fa fa-film', title: '4K高清影像', desc: '通过4K高清影像，全方位展示草龙的制作工艺和表演细节。' },
  { icon: 'fa fa-headphones', title: '专业讲解', desc: '由非遗传承人亲自讲解草龙的历史渊源和文化内涵。' },
]

const products = [
  { name: '草龙主题丝巾', desc: '传统纹样，丝绸材质', price: 198, stars: 4.5, img: 'https://picsum.photos/seed/grassdragon1/800/600' },
  { name: '草龙造型摆件', desc: '手工制作，精美逼真', price: 298, stars: 4, img: 'https://picsum.photos/seed/grassdragon2/800/600' },
  { name: '草龙文化书签套装', desc: '5枚套装，工艺精美', price: 58, stars: 5, img: 'https://picsum.photos/seed/grassdragon3/800/600' },
  { name: '草龙主题帆布袋', desc: '环保材质，结实耐用', price: 68, stars: 3.5, img: 'https://picsum.photos/seed/grassdragon4/800/600' },
]

// Purchase modal
const purchaseVisible = ref(false)
const purchaseSubmitting = ref(false)
const selectedProduct = reactive({ name: '', price: 0 })
const orderQuantity = ref(1)
const orderName = ref('')
const orderPhone = ref('')
const orderAddress = ref('')
const purchaseFeedback = reactive({ show: false, message: '', isError: false })

function openLightbox(src, alt) {
  lightboxSrc.value = src
  lightboxAlt.value = alt
  lightboxVisible.value = true
}

function openPurchase(product) {
  selectedProduct.name = product.name
  selectedProduct.price = product.price
  orderQuantity.value = 1
  orderName.value = ''
  orderPhone.value = ''
  orderAddress.value = ''
  purchaseFeedback.show = false
  purchaseVisible.value = true
}

async function submitOrder() {
  purchaseFeedback.show = false
  const errors = []
  if (!orderName.value.trim()) errors.push('请填写收货人姓名')
  if (!orderPhone.value.trim() || !/^1[3-9]\d{9}$/.test(orderPhone.value)) errors.push('请填写有效的手机号码')
  if (!orderAddress.value.trim()) errors.push('请填写收货地址')

  if (errors.length > 0) {
    purchaseFeedback.show = true; purchaseFeedback.message = errors.join('；'); purchaseFeedback.isError = true; return
  }

  purchaseSubmitting.value = true
  try {
    const data = await api.submitOrder({
      product_name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: orderQuantity.value,
      customer_name: orderName.value.trim(),
      phone: orderPhone.value.trim(),
      address: orderAddress.value.trim(),
    })
    purchaseFeedback.show = true
    purchaseFeedback.message = data.message
    purchaseFeedback.isError = !data.success
    if (data.success) { orderName.value = ''; orderPhone.value = ''; orderAddress.value = ''; orderQuantity.value = 1 }
  } catch {
    purchaseFeedback.show = true; purchaseFeedback.message = '网络错误，请检查网络连接后重试。'; purchaseFeedback.isError = true
  } finally {
    purchaseSubmitting.value = false
  }
}

// Parallax effect
function handleParallax() {
  if (!heroParallax.value || window.innerWidth <= 768) return
  heroParallax.value.style.transform = `translateY(${window.pageYOffset * 0.4}px)`
}

onMounted(() => window.addEventListener('scroll', handleParallax, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleParallax))
</script>

<style scoped>
.lightbox-img { cursor: zoom-in; }
</style>
