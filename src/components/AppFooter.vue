<template>
  <footer class="bg-primary text-white/80 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Museum Info -->
        <div>
          <h3 class="text-white text-lg font-bold mb-4 flex items-center gap-2">
            <i class="fa fa-dragon"></i> 湖口草龙博物馆
          </h3>
          <p class="text-sm leading-relaxed">
            致力于传承和弘扬国家级非物质文化遗产——湖口草龙，让千年技艺在数字时代焕发新生。
          </p>
          <div class="flex gap-3 mt-4">
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary transition-colors text-white no-underline">
              <i class="fa-brands fa-weixin"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary transition-colors text-white no-underline">
              <i class="fa-brands fa-weibo"></i>
            </a>
            <a href="#" class="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary transition-colors text-white no-underline">
              <i class="fa-brands fa-bilibili"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white text-lg font-bold mb-4">快速链接</h3>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <router-link to="/" class="text-white/60 hover:text-white transition-colors no-underline">首页</router-link>
            <router-link to="/introduction" class="text-white/60 hover:text-white transition-colors no-underline">草龙介绍</router-link>
            <router-link to="/craft-exhibition" class="text-white/60 hover:text-white transition-colors no-underline">制作工艺</router-link>
            <router-link to="/history" class="text-white/60 hover:text-white transition-colors no-underline">历史传承</router-link>
            <router-link to="/data-visualization" class="text-white/60 hover:text-white transition-colors no-underline">数据可视化</router-link>
            <router-link to="/dragon-dance" class="text-white/60 hover:text-white transition-colors no-underline">龙舞时空馆</router-link>
            <a href="/草龙设计室.html" class="text-white/60 hover:text-white transition-colors no-underline">草龙设计室</a>
            <router-link to="/admin" class="text-white/60 hover:text-white transition-colors no-underline">后台管理</router-link>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white text-lg font-bold mb-4">联系我们</h3>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <i class="fa fa-location-dot mt-1 text-secondary"></i>
              <span>江西省九江市湖口县草龙博物馆</span>
            </div>
            <div class="flex items-start gap-3">
              <i class="fa fa-phone mt-1 text-secondary"></i>
              <span>0792-6332777</span>
            </div>
            <div class="flex items-start gap-3">
              <i class="fa fa-clock mt-1 text-secondary"></i>
              <span>周二至周日 9:00-17:00（周一闭馆）</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/40">
        © {{ year }} 湖口草龙博物馆 — 保留所有权利
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
