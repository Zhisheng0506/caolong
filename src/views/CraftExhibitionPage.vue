<template>
  <div>
    <AppNavbar />

    <!-- 页面标题横幅 -->
    <section
      class="bg-cover bg-center h-64"
      style="background-image: url('https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875692.jpeg?1080x767')"
    >
      <div class="container mx-auto h-full flex items-center justify-center">
        <h1 class="text-4xl text-white font-bold">草龙制作工艺展</h1>
      </div>
    </section>

    <!-- 制作工艺详细介绍 -->
    <main class="container mx-auto py-16">
      <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-center mb-6 text-primary">
        草龙制作工艺全解析
      </h2>
      <p class="text-lg text-center mb-12 text-[#795548] max-w-3xl mx-auto">
        湖口草龙的制作是一门精湛的传统技艺，凝聚了匠人们的智慧与心血，每一步都蕴含着深厚的文化底蕴。
      </p>

      <!-- 制作步骤 -->
      <div class="space-y-8">
        <!-- 步骤1：选材 -->
        <ScrollReveal :delay="1">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CloudPattern />
            <div class="md:flex">
              <div class="md:w-1/3 p-8 flex items-center justify-center" style="background-color: #8D6E63;">
                <div class="text-white text-center">
                  <div class="text-4xl font-bold mb-2">01</div>
                  <h3 class="text-xl font-bold">选材</h3>
                </div>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700 leading-relaxed">
                  选材是草龙制作的基础，直接影响草龙的质量与保存时间。稻草需选用生长期足、茎秆粗壮且无虫蛀的糯谷草，在稻谷收割后，经晾晒、分拣处理，去除杂质与干瘪的稻草，确保每一根稻草都柔韧且富有光泽。竹材多选用质地坚硬、韧性好的水竹或毛竹，用于制作龙骨架的主干与支撑结构；铁丝则作为辅助材料，用于加固骨架关节，增强整体稳定性。此外，还会准备红绸、彩纸、颜料等装饰材料，为草龙赋予色彩与神韵。
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <!-- 步骤2：扎骨架 -->
        <ScrollReveal :delay="2">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="md:flex">
              <div class="md:w-1/3 p-8 flex items-center justify-center" style="background-color: #A1887F;">
                <div class="text-white text-center">
                  <div class="text-4xl font-bold mb-2">02</div>
                  <h3 class="text-xl font-bold">扎骨架</h3>
                </div>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700 leading-relaxed">
                  扎骨架是赋予草龙形态的关键步骤。匠人们依据传统图谱或设计图纸，先用竹条和铁丝勾勒出龙头、龙身、龙尾的轮廓。龙头造型最为讲究，需雕刻出凸起的龙角、圆睁的双目、张开的龙口，展现龙的威严气势；龙身通常以等距的竹圈为支撑，用铁丝串联固定，形成波浪形的曲线；龙尾则逐渐收窄，呈现飘逸灵动之感。整个骨架需精准测量比例，确保草龙在舞动时既牢固又灵活，一般一条中型草龙的骨架需耗费匠人2-3天时间精心制作。
                </p>
              </div>
            </div>
            <CloudPattern />
          </div>
        </ScrollReveal>

        <!-- 步骤3：编织稻草 -->
        <ScrollReveal :delay="3">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="md:flex">
              <div class="md:w-1/3 p-8 flex items-center justify-center" style="background-color: #BCAAA4;">
                <div class="text-white text-center">
                  <div class="text-4xl font-bold mb-2">03</div>
                  <h3 class="text-xl font-bold">编织稻草</h3>
                </div>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700 leading-relaxed">
                  编织稻草是草龙制作的核心技艺，也是匠人们技艺水平的集中体现。编织前，稻草需经过浸泡软化处理，使其更易塑形。编织过程中，匠人运用"单股编""双股绞""螺旋绕"等技法，从龙头开始，逐步向龙身、龙尾推进。每一片"龙鳞"、每一缕"龙须"都需匠人手工细致编织，一条完整草龙的编织往往需要数周时间。
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <!-- 步骤4：装饰点睛 -->
        <ScrollReveal :delay="4">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="md:flex">
              <div class="md:w-1/3 p-8 flex items-center justify-center" style="background-color: #D7CCC8;">
                <div class="text-white text-center">
                  <div class="text-4xl font-bold mb-2">04</div>
                  <h3 class="text-xl font-bold">装饰点睛</h3>
                </div>
              </div>
              <div class="md:w-2/3 p-8">
                <p class="text-gray-700 leading-relaxed">
                  装饰点睛是让草龙从"物"升华为"灵"的关键环节。龙头的眼睛通常用玻璃球或彩绘木珠制作，通过精细的描绘赋予龙目神采；龙角、龙须用红绸或金色布条装饰，增添华丽感；龙身会点缀彩色鳞片，还会悬挂铜铃、彩带等饰品，使草龙在舞动时发出悦耳声响，增添喜庆氛围。最后，匠人会对草龙进行整体检查与修整，让草龙在节庆活动中成为万众瞩目的焦点。
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <!-- 制作过程图片展示 -->
      <ScrollReveal>
        <div class="flex flex-wrap justify-center mt-8">
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="/LOCAL1707353160249PGI2T1AWJ2.jpg"
              alt="草龙制作过程1"
              class="lightbox-img rounded-md shadow-md w-full h-64 object-cover"
              @click="openLightbox('/LOCAL1707353160249PGI2T1AWJ2.jpg', '草龙制作过程1')"
            />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875683.jpeg?1080x810"
              alt="草龙制作过程2"
              class="lightbox-img rounded-md shadow-md w-full h-64 object-cover"
              @click="openLightbox('https://picture01.52hrttpic.com/image/infoImage/202404/28/ifm2024042821592111875683.jpeg?1080x810', '草龙制作过程2')"
            />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              src="http://k.sinaimg.cn/n/sinakd20200929ac/223/w600h423/20200929/075e-izwfpys5020357.jpg/w700d1q75cms.jpg"
              alt="草龙制作过程3"
              class="lightbox-img rounded-md shadow-md w-full h-64 object-cover"
              @click="openLightbox('http://k.sinaimg.cn/n/sinakd20200929ac/223/w600h423/20200929/075e-izwfpys5020357.jpg/w700d1q75cms.jpg', '草龙制作过程3')"
            />
          </div>
        </div>
      </ScrollReveal>

      <CloudPattern />

      <!-- 匠人访谈视频 -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold mb-4">匠人匠心：听传承人讲述制作故事</h3>
        <iframe
          width="560" height="315"
          src="https://player.bilibili.com/player.html?aid=391018782&bvid=BV1md4y1s7Aa&cid=917700445&page=1"
          title="B站视频"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="mx-auto"
        ></iframe>
      </div>

      <!-- 联系与互动 -->
      <section class="container mx-auto py-16 bg-accent">
        <div class="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-center mb-6 text-primary">
              参与草龙制作体验
            </h2>
            <p class="text-lg text-center mb-12 text-[#795548] max-w-2xl mx-auto">
              想亲手体验草龙制作的乐趣吗？快来报名参加我们的非遗体验活动！让传统文化在您手中焕发新生。
            </p>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div class="grid md:grid-cols-5">
                <!-- 左侧装饰区域 -->
                <div class="md:col-span-2 p-8 flex items-center justify-center hidden md:block" style="background-color: #8D6E63;">
                  <div class="text-white text-center">
                    <i class="fa fa-paint-brush text-5xl mb-4 opacity-80"></i>
                    <h3 class="text-2xl font-bold mb-2">传承匠心</h3>
                    <p class="opacity-90">每一根稻草都承载着千年文化，每一次编织都延续着非遗的温度。</p>
                  </div>
                </div>

                <!-- 右侧表单区域 -->
                <div class="md:col-span-3 p-8 md:p-12">
                  <form @submit.prevent="handleSubmit" class="space-y-6" novalidate>
                    <div class="space-y-2">
                      <label for="name" class="block text-gray-700 font-medium">您的姓名</label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i class="fa fa-user text-gray-400"></i>
                        </div>
                        <input type="text" id="name" v-model="form.name" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D6E63] focus:border-[#8D6E63] transition-all" placeholder="请输入您的姓名">
                      </div>
                    </div>

                    <div class="space-y-2">
                      <label for="email" class="block text-gray-700 font-medium">电子邮箱</label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i class="fa fa-envelope text-gray-400"></i>
                        </div>
                        <input type="email" id="email" v-model="form.email" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D6E63] focus:border-[#8D6E63] transition-all" placeholder="请输入您的电子邮箱">
                      </div>
                    </div>

                    <div class="space-y-2">
                      <label for="phone" class="block text-gray-700 font-medium">联系电话</label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i class="fa fa-phone text-gray-400"></i>
                        </div>
                        <input type="tel" id="phone" v-model="form.phone" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D6E63] focus:border-[#8D6E63] transition-all" placeholder="请输入您的联系电话">
                      </div>
                    </div>

                    <div class="space-y-2">
                      <label for="message" class="block text-gray-700 font-medium">留言内容</label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <i class="fa fa-comment text-gray-400"></i>
                        </div>
                        <textarea id="message" v-model="form.message" rows="4" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8D6E63] focus:border-[#8D6E63] transition-all resize-none" placeholder="请输入您的留言或疑问"></textarea>
                      </div>
                    </div>

                    <div class="pt-2">
                      <button type="submit" :disabled="submitting" class="w-full bg-[#8D6E63] hover:bg-[#795548] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D6E63]" :class="{ 'opacity-70 cursor-not-allowed': submitting }">
                        <i v-if="submitting" class="fa fa-spinner fa-spin mr-2"></i>
                        <i v-else class="fa fa-paper-plane mr-2"></i>
                        {{ submitting ? '提交中...' : '立即报名' }}
                      </button>
                    </div>
                    <div v-if="feedback.show" class="mt-4 p-4 rounded-lg text-center text-sm font-medium" :class="feedback.isError ? 'bg-red-100 text-red-800 border border-red-300' : 'bg-green-100 text-green-800 border border-green-300'">
                      {{ feedback.message }}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- 联系信息 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div class="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div class="flex items-center">
                  <div class="bg-[#8D6E63]/10 p-3 rounded-full mr-4">
                    <i class="fa fa-map-marker text-[#8D6E63]"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">地址</h4>
                    <p class="text-gray-600">江西省九江市湖口县石钟山景区内</p>
                  </div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div class="flex items-center">
                  <div class="bg-[#8D6E63]/10 p-3 rounded-full mr-4">
                    <i class="fa fa-phone text-[#8D6E63]"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">电话</h4>
                    <p class="text-gray-600">0792-6332123</p>
                  </div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div class="flex items-center">
                  <div class="bg-[#8D6E63]/10 p-3 rounded-full mr-4">
                    <i class="fa fa-clock text-[#8D6E63]"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">开放时间</h4>
                    <p class="text-gray-600">周二至周日 9:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
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
import { api } from '@/api'

const lightboxVisible = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')
const submitting = ref(false)

const form = reactive({ name: '', email: '', phone: '', message: '' })
const feedback = reactive({ show: false, message: '', isError: false })

function openLightbox(src, alt) {
  lightboxSrc.value = src
  lightboxAlt.value = alt
  lightboxVisible.value = true
}

async function handleSubmit() {
  feedback.show = false
  const errors = []
  if (!form.name.trim()) errors.push('请填写您的姓名')
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.push('请填写有效的电子邮箱')
  if (!form.phone.trim() || !/^1[3-9]\d{9}$/.test(form.phone)) errors.push('请填写有效的手机号码')

  if (errors.length > 0) {
    feedback.show = true
    feedback.message = errors.join('；')
    feedback.isError = true
    return
  }

  submitting.value = true
  try {
    const data = await api.submitCraftRegistration({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    })
    feedback.show = true
    feedback.message = data.message
    feedback.isError = !data.success
    if (data.success) {
      form.name = ''
      form.email = ''
      form.phone = ''
      form.message = ''
    }
  } catch {
    feedback.show = true
    feedback.message = '网络错误，请检查网络连接后重试。'
    feedback.isError = true
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.lightbox-img { cursor: zoom-in; }
</style>
