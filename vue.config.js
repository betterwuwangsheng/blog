module.exports = {
  transpileDependencies: ['vuetify'],
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
        plugins: '@/plugins',
        styles: '@/styles',
        router: '@/router',
        store: '@/store',
      },
    },
  },
}
