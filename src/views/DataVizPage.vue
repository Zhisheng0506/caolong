<template>
  <div>
    <AppNavbar />

    <main class="w-[90%] max-w-[1200px] mx-auto">
      <!-- Hero 区域 -->
      <section class="section-padding relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 class="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 text-shadow">
              草龙文化数据可视化
            </h1>
            <p class="text-xl text-gray-800 max-w-3xl mx-auto px-4 py-6 bg-white/50 backdrop-blur-md rounded-lg shadow-sm">
              通过交互式图表与数据分析，从多维度探索湖口草龙文化遗产的独特价值。本页面使用 ECharts 技术，将草龙制作工艺、文化价值评估以及全国龙文化对比等数据以直观的可视化形式呈现。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CloudPattern />

      <!-- 柱状图：制作工艺投入对比 -->
      <section class="section-padding bg-white/60 backdrop-blur-sm">
        <div class="container mx-auto px-4">
          <ScrollReveal>
            <div class="text-center mb-8">
              <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary mb-4 text-shadow">草龙制作工艺投入对比</h2>
              <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                草龙制作包含选材、扎骨架、编织稻草、装饰点睛四道核心工序。下图从耗时、人力投入和复杂度三个维度对各工序进行量化对比。
              </p>
            </div>
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div ref="barChart" style="width:100%; height:450px;"></div>
            </div>
            <div class="mt-6 bg-accent/50 border-l-4 border-secondary rounded-r-lg p-4">
              <p class="text-gray-700"><i class="fa fa-lightbulb text-secondary mr-2"></i><strong>数据洞察：</strong>编织稻草环节耗时占整个制作流程的 <span class="text-secondary font-bold">65% 以上</span>，且需要最多的熟练工匠协同作业。</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CloudPattern />

      <!-- 雷达图：文化价值综合评估 -->
      <section class="section-padding bg-white/60 backdrop-blur-sm">
        <div class="container mx-auto px-4">
          <ScrollReveal>
            <div class="text-center mb-8">
              <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary mb-4 text-shadow">草龙文化遗产综合价值评估</h2>
              <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                从历史传承、艺术审美、工艺技术、社会民俗、经济开发、教育研究六个维度，对湖口草龙文化进行全方位的价值评估。
              </p>
            </div>
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div ref="radarChart" style="width:100%; height:500px;"></div>
            </div>
            <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <i class="fa fa-star text-green-600 text-2xl mb-2"></i>
                <p class="text-sm text-gray-700"><strong>优势领域</strong><br>历史传承价值（95分）和工艺技术价值（92分）得分最高。</p>
              </div>
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                <i class="fa fa-balance-scale text-yellow-600 text-2xl mb-2"></i>
                <p class="text-sm text-gray-700"><strong>稳定领域</strong><br>社会民俗价值（85分）和艺术审美价值（80分）表现良好。</p>
              </div>
              <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <i class="fa fa-exclamation-triangle text-red-600 text-2xl mb-2"></i>
                <p class="text-sm text-gray-700"><strong>待提升领域</strong><br>经济开发价值（55分）得分最低，是未来发展的重点方向。</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CloudPattern />

      <!-- 3D 柱状图 -->
      <section class="section-padding bg-white/60 backdrop-blur-sm">
        <div class="container mx-auto px-4">
          <ScrollReveal>
            <div class="text-center mb-8">
              <h2 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary mb-4 text-shadow">中国龙文化非遗项目对比分析</h2>
              <p class="text-lg text-gray-700 max-w-3xl mx-auto">
                将湖口草龙置于全国龙文化非物质文化遗产的大背景中，选取铜梁龙舞、埔寨火龙、泸州雨坛彩龙、湛江人龙舞四个代表性项目进行多维度对比。
              </p>
            </div>
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div ref="chart3D" style="width:100%; height:550px;"></div>
            </div>
            <div class="mt-4 text-center text-sm text-gray-500">
              <i class="fa fa-mouse-pointer mr-1"></i> 鼠标拖拽可旋转 3D 视图，滚动滚轮可缩放
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CloudPattern />

      <!-- 数据来源说明 -->
      <section class="section-padding">
        <div class="container mx-auto px-4">
          <ScrollReveal>
            <div class="max-w-3xl mx-auto bg-white/70 rounded-2xl shadow-md p-8">
              <h2 class="text-2xl font-bold text-primary mb-4 text-center">数据来源与说明</h2>
              <div class="space-y-3 text-gray-700 text-sm leading-relaxed">
                <p><i class="fa fa-database text-secondary mr-2"></i><strong>制作工艺数据：</strong>基于博物馆现有资料中的工序描述，耗时与人力数据为根据工匠访谈和文献资料推算的估算值。</p>
                <p><i class="fa fa-database text-secondary mr-2"></i><strong>文化价值评估：</strong>从历史传承、艺术审美、工艺技术、社会民俗、经济开发、教育研究六个维度综合评分。</p>
                <p><i class="fa fa-database text-secondary mr-2"></i><strong>全国龙文化对比：</strong>参考中国非物质文化遗产网公布的各级非遗名录数据。</p>
                <p class="text-gray-500 italic mt-4"><i class="fa fa-info-circle mr-1"></i>本页面的虚拟数据主要用于课程作业展示（ECharts 数据可视化技术实践），部分评分为基于公开资料的综合估算，仅供学习和参考使用。</p>
              </div>
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
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import CloudPattern from '@/components/CloudPattern.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'

const barChart = ref(null)
const radarChart = ref(null)
const chart3D = ref(null)
let barInstance = null
let radarInstance = null
let d3Instance = null

function initBarChart() {
  if (!barChart.value) return
  barInstance = echarts.init(barChart.value)
  barInstance.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['耗时(天)', '人力(人)', '复杂度(1-10分)'], top: 0, textStyle: { color: '#5d4037' } },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category', data: ['选材', '扎骨架', '编织稻草', '装饰点睛'],
      axisLabel: { color: '#5d4037', fontSize: 14 },
      axisLine: { lineStyle: { color: '#5d4037' } },
    },
    yAxis: {
      type: 'value', name: '数值',
      nameTextStyle: { color: '#5d4037' },
      axisLabel: { color: '#5d4037' },
    },
    series: [
      { name: '耗时(天)', type: 'bar', data: [3, 3, 21, 5], itemStyle: { color: '#5d4037', borderRadius: [4,4,0,0] }, label: { show: true, position: 'top', color: '#5d4037', fontWeight: 'bold' } },
      { name: '人力(人)', type: 'bar', data: [2, 3, 5, 3], itemStyle: { color: '#d32f2f', borderRadius: [4,4,0,0] }, label: { show: true, position: 'top', color: '#d32f2f', fontWeight: 'bold' } },
      { name: '复杂度(1-10分)', type: 'bar', data: [4, 7, 9, 8], itemStyle: { color: '#8b6b60', borderRadius: [4,4,0,0] }, label: { show: true, position: 'top', color: '#8b6b60', fontWeight: 'bold' } },
    ],
  })
}

function initRadarChart() {
  if (!radarChart.value) return
  radarInstance = echarts.init(radarChart.value)
  radarInstance.setOption({
    tooltip: { trigger: 'item' },
    legend: { data: ['湖口草龙文化价值'], bottom: 0, textStyle: { color: '#5d4037' } },
    radar: {
      center: ['50%', '50%'], radius: '65%',
      indicator: [
        { name: '历史传承价值', max: 100 }, { name: '艺术审美价值', max: 100 },
        { name: '工艺技术价值', max: 100 }, { name: '社会民俗价值', max: 100 },
        { name: '经济开发价值', max: 100 }, { name: '教育研究价值', max: 100 },
      ],
      axisName: { color: '#5d4037', fontSize: 12 },
      splitArea: { areaStyle: { color: ['rgba(93,64,55,0.05)', 'rgba(93,64,55,0.1)', 'rgba(93,64,55,0.05)', 'rgba(93,64,55,0.1)', 'rgba(93,64,55,0.05)'] } },
      splitLine: { lineStyle: { color: 'rgba(93,64,55,0.2)' } },
      axisLine: { lineStyle: { color: 'rgba(93,64,55,0.3)' } },
    },
    series: [{ name: '湖口草龙文化价值', type: 'radar', data: [{ value: [95, 80, 92, 85, 55, 78], name: '湖口草龙文化价值', areaStyle: { color: 'rgba(211,47,47,0.25)' }, lineStyle: { color: '#d32f2f', width: 2 }, itemStyle: { color: '#d32f2f' } }], symbol: 'circle', symbolSize: 8 }],
  })
}

function init3DChart() {
  if (!chart3D.value) return
  d3Instance = echarts.init(chart3D.value)
  const data = [
    [0, 0, 8.0], [0, 1, 6.0], [0, 2, 3.0], [0, 3, 4.0], [0, 4, 5.0],
    [1, 0, 2], [1, 1, 15], [1, 2, 5], [1, 3, 4], [1, 4, 3],
    [2, 0, 6.5], [2, 1, 9.5], [2, 2, 8.0], [2, 3, 7.0], [2, 4, 6.0],
    [3, 0, 4], [3, 1, 4], [3, 2, 4], [3, 3, 4], [3, 4, 3],
  ]
  d3Instance.setOption({
    tooltip: { formatter: (params) => {
      const dims = ['历史年限', '传承人数', '知名度', '遗产级别']
      const items = ['湖口草龙', '铜梁龙舞', '埔寨火龙', '泸州雨坛彩龙', '湛江人龙舞']
      return items[params.value[1]] + '<br/>' + dims[params.value[0]] + ': ' + params.value[2]
    }},
    visualMap: { max: 15, inRange: { color: ['#f8f0e3', '#e57373', '#d32f2f', '#5d4037'] }, textStyle: { color: '#5d4037' } },
    grid3D: { viewControl: { projection: 'orthographic', autoRotate: true, autoRotateSpeed: 3, distance: 180, alpha: 25, beta: 45 }, boxWidth: 100, boxHeight: 40, boxDepth: 80 },
    xAxis3D: { type: 'category', name: '对比维度', data: ['历史年限', '传承人数', '知名度', '遗产级别'], nameTextStyle: { color: '#5d4037', fontSize: 14 }, axisLabel: { color: '#5d4037', fontSize: 11 } },
    yAxis3D: { type: 'category', name: '非遗项目', data: ['湖口草龙', '铜梁龙舞', '埔寨火龙', '泸州雨坛彩龙', '湛江人龙舞'], nameTextStyle: { color: '#5d4037', fontSize: 14 }, axisLabel: { color: '#5d4037', fontSize: 11 } },
    zAxis3D: { type: 'value', name: '数值', nameTextStyle: { color: '#5d4037' }, axisLabel: { color: '#5d4037' } },
    series: [{ type: 'bar3D', data, shading: 'lambert', label: { show: true, fontSize: 10, distance: 2 }, emphasis: { label: { fontSize: 14 }, itemStyle: { color: '#ff9800' } } }],
  })
  // Mobile: disable auto-rotate
  if (window.innerWidth < 768) {
    d3Instance.setOption({ grid3D: { viewControl: { autoRotate: false } } })
  }
}

function handleResize() {
  barInstance?.resize()
  radarInstance?.resize()
  d3Instance?.resize()
  if (d3Instance && window.innerWidth < 768) {
    d3Instance.setOption({ grid3D: { viewControl: { autoRotate: false } } })
  } else if (d3Instance) {
    d3Instance.setOption({ grid3D: { viewControl: { autoRotate: true } } })
  }
}

onMounted(() => {
  initBarChart()
  initRadarChart()
  init3DChart()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  barInstance?.dispose()
  radarInstance?.dispose()
  d3Instance?.dispose()
})
</script>
