<template>
  <v-app>
    <!-- 首页 -->
    <Home></Home>
  </v-app>
</template>

<script>
// 导入 Home 页面
const Home = () => import('views/Home')

export default {
  name: 'App',
  components: {
    // 注册组件
    Home,
  },
}
</script>
