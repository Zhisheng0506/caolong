<template>
  <div class="bg-accent text-primary min-h-screen">
    <!-- 导航栏 -->
    <nav class="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <router-link to="/" class="text-white text-xl font-bold tracking-wider hover:text-yellow-300 transition-colors no-underline">
            <i class="fa fa-dragon mr-2 text-secondary"></i>湖口草龙博物馆
          </router-link>
          <div class="flex items-center gap-4">
            <span class="text-white/70 text-sm hidden sm:inline">后台管理</span>
            <router-link to="/" class="text-white hover:text-yellow-300 transition-colors text-sm no-underline">
              <i class="fa fa-home mr-1"></i>回到首页
            </router-link>
            <button class="text-white hover:text-yellow-300 transition-colors" @click="loadData" title="刷新数据">
              <i class="fa fa-refresh" :class="{ 'fa-spin': refreshing }"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-8">
      <!-- 页面标题 -->
      <div class="text-center mb-8">
        <h1 class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-primary mb-2">
          <i class="fa fa-database text-secondary mr-3"></i>数据管理后台
        </h1>
        <p class="text-gray-600">查看前端表单提交的所有报名和预约数据</p>
      </div>

      <!-- 统计卡片 -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        <div class="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg">
          <div class="text-4xl font-bold text-secondary mb-1">{{ craftData.length }}</div>
          <div class="text-gray-600 text-sm">工艺体验报名</div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg">
          <div class="text-4xl font-bold text-secondary mb-1">{{ bookingData.length }}</div>
          <div class="text-gray-600 text-sm">展览参观预约</div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg">
          <div class="text-4xl font-bold text-secondary mb-1">{{ orderData.length }}</div>
          <div class="text-gray-600 text-sm">文创订单</div>
        </div>
      </div>

      <!-- 标签切换 -->
      <div class="flex justify-center mb-6">
        <div class="inline-flex bg-white rounded-lg shadow-md p-1">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="px-6 py-2 rounded-md font-medium text-sm transition-all"
            :class="currentTab === tab.key ? 'bg-secondary text-white' : ''"
            @click="currentTab = tab.key"
          >
            <i :class="tab.icon" class="mr-1"></i>{{ tab.label }}
          </button>
        </div>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="text-center py-12">
        <i class="fa fa-spinner fa-spin text-3xl text-primary/40"></i>
        <p class="text-gray-500 mt-3">加载中...</p>
      </div>

      <!-- 错误状态 -->
      <div v-else-if="error" class="text-center py-12">
        <i class="fa fa-exclamation-triangle text-3xl text-red-400"></i>
        <p class="text-red-600 mt-3">{{ error }}</p>
        <button class="mt-4 bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary/90 transition-colors" @click="loadData">
          <i class="fa fa-refresh mr-1"></i>重试
        </button>
      </div>

      <!-- 数据表格 -->
      <template v-else>
        <!-- 工艺报名 -->
        <div v-show="currentTab === 'craft'" class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-primary text-white text-sm">
                <tr>
                  <th class="px-4 py-3">#</th>
                  <th class="px-4 py-3">姓名</th>
                  <th class="px-4 py-3">邮箱</th>
                  <th class="px-4 py-3">手机号</th>
                  <th class="px-4 py-3">留言内容</th>
                  <th class="px-4 py-3">提交时间</th>
                  <th class="px-4 py-3 w-16">操作</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 text-sm">
                <tr v-for="(row, i) in craftData" :key="row.id" class="hover:bg-gray-50 transition-colors">
                  <td class="px-4 py-3 text-gray-400">{{ craftData.length - i }}</td>
                  <td class="px-4 py-3 font-medium">{{ row.name }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.email }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.phone }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.message || '-' }}</td>
                  <td class="px-4 py-3 text-gray-500 text-xs">{{ row.created_at }}</td>
                  <td class="px-4 py-3">
                    <button class="text-red-500 hover:text-red-700 hover:bg-red-50 rounded p-1 transition-colors" @click="deleteRow('craft', row.id)" title="删除">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="craftData.length === 0">
                  <td colspan="7" class="text-center py-12 text-gray-400">
                    <i class="fa fa-inbox text-4xl mb-2 block"></i>暂无数据
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 展览预约 -->
        <div v-show="currentTab === 'booking'" class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-primary text-white text-sm">
                <tr>
                  <th class="px-4 py-3">#</th>
                  <th class="px-4 py-3">姓名</th>
                  <th class="px-4 py-3">手机号</th>
                  <th class="px-4 py-3">参观日期</th>
                  <th class="px-4 py-3">参观人数</th>
                  <th class="px-4 py-3">提交时间</th>
                  <th class="px-4 py-3 w-16">操作</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 text-sm">
                <tr v-for="(row, i) in bookingData" :key="row.id" class="hover:bg-gray-50 transition-colors">
                  <td class="px-4 py-3 text-gray-400">{{ bookingData.length - i }}</td>
                  <td class="px-4 py-3 font-medium">{{ row.name }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.phone }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.visit_date }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.number_of_people }} 人</td>
                  <td class="px-4 py-3 text-gray-500 text-xs">{{ row.created_at }}</td>
                  <td class="px-4 py-3">
                    <button class="text-red-500 hover:text-red-700 hover:bg-red-50 rounded p-1 transition-colors" @click="deleteRow('booking', row.id)" title="删除">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="bookingData.length === 0">
                  <td colspan="7" class="text-center py-12 text-gray-400">
                    <i class="fa fa-inbox text-4xl mb-2 block"></i>暂无数据
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 文创订单 -->
        <div v-show="currentTab === 'order'" class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-primary text-white text-sm">
                <tr>
                  <th class="px-4 py-3">#</th>
                  <th class="px-4 py-3">商品</th>
                  <th class="px-4 py-3">单价</th>
                  <th class="px-4 py-3">数量</th>
                  <th class="px-4 py-3">收货人</th>
                  <th class="px-4 py-3">手机号</th>
                  <th class="px-4 py-3">地址</th>
                  <th class="px-4 py-3">时间</th>
                  <th class="px-4 py-3 w-16">操作</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 text-sm">
                <tr v-for="(row, i) in orderData" :key="row.id" class="hover:bg-gray-50 transition-colors">
                  <td class="px-4 py-3 text-gray-400">{{ orderData.length - i }}</td>
                  <td class="px-4 py-3 font-medium">{{ row.product_name }}</td>
                  <td class="px-4 py-3 text-secondary font-medium">¥{{ row.price }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.quantity }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.customer_name }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.phone }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.address }}</td>
                  <td class="px-4 py-3 text-gray-500 text-xs">{{ row.created_at }}</td>
                  <td class="px-4 py-3">
                    <button class="text-red-500 hover:text-red-700 hover:bg-red-50 rounded p-1 transition-colors" @click="deleteRow('order', row.id)" title="删除">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="orderData.length === 0">
                  <td colspan="9" class="text-center py-12 text-gray-400">
                    <i class="fa fa-inbox text-4xl mb-2 block"></i>暂无订单
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </main>

    <footer class="bg-primary text-white/60 text-center py-4 text-sm mt-12">
      <p>&copy; 2025 湖口草龙博物馆. 后台管理系统</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '@/api'

const tabs = [
  { key: 'craft', label: '工艺体验报名', icon: 'fa fa-paint-brush' },
  { key: 'booking', label: '展览参观预约', icon: 'fa fa-calendar-check' },
  { key: 'order', label: '文创订单', icon: 'fa fa-shopping-cart' },
]

const currentTab = ref('craft')
const loading = ref(true)
const error = ref('')
const refreshing = ref(false)
const craftData = ref([])
const bookingData = ref([])
const orderData = ref([])

async function loadData() {
  loading.value = true
  error.value = ''
  try {
    const [craftRes, bookingRes, orderRes] = await Promise.all([
      api.getCraftRegistrations(),
      api.getExhibitionBookings(),
      api.getOrders(),
    ])
    craftData.value = craftRes.data
    bookingData.value = bookingRes.data
    orderData.value = orderRes.data
  } catch (err) {
    error.value = '网络错误，请确认服务器已启动。'
    console.error('Fetch error:', err)
  } finally {
    loading.value = false
    refreshing.value = false
  }
}

async function deleteRow(type, id) {
  if (!confirm('确定要删除这条记录吗？此操作不可撤销。')) return
  try {
    const apiMap = {
      craft: api.deleteCraftRegistration,
      booking: api.deleteExhibitionBooking,
      order: api.deleteOrder,
    }
    await apiMap[type](id)
    await loadData()
  } catch (err) {
    alert('删除失败')
    console.error('Delete error:', err)
  }
}

onMounted(loadData)
</script>
