<template>
  <div class="home">
    <v-card>
      <v-row justify="center" align="center">
        <v-col>
          <!-- App bar -->
          <v-toolbar color="deep-purple" height="64" dark shaped>
            <!-- 展开与折叠 -->
            <!-- <v-app-bar-nav-icon
              class="menubtn"
              @click="showNavIcon"
              expand-on-hover
              style="margin-left: 0"
            ></v-app-bar-nav-icon> -->
            <v-icon
              large
              @click="showNavIcon"
              expand-on-hover
              style="margin-left: 0"
              class="ml-6 mr-13"
            >
              {{ menuStyle }}
            </v-icon>

            <!-- title -->
            <v-toolbar-title>
              <v-btn text @click="toHomePage">
                <v-icon>mdi-home</v-icon>
                <span class="btn">小王子的狗窝</span>
              </v-btn>
            </v-toolbar-title>

            <!-- 自动填充空格 -->
            <v-spacer />

            <v-btn text>
              <v-icon class="btn mr-2">mdi-timeline-outline</v-icon>
              <span>时间轴</span>
            </v-btn>
            <v-btn text large>
              <v-icon class="btn mr-2">mdi-archive-outline</v-icon>
              <span class="btn">归档</span>
            </v-btn>
            <v-btn text large>
              <v-icon class="btn mr-2">mdi-link-variant</v-icon>
              <span class="btn">友链</span>
            </v-btn>
            <v-btn text large>
              <v-icon class="btn mr-2">mdi-information-outline</v-icon>
              <span class="btn">关于</span>
            </v-btn>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>

    <!-- 左侧导航栏 -->
    <v-card height="100vh">
      <v-row>
        <v-col class="pt-1">
          <v-navigation-drawer
            mini-variant-width="80"
            dark
            :expand-on-hover="isShowNavIcon"
            v-model="isShowNavIcon"
          >
            <v-list shaped>
              <v-list-item>
                <!-- 头像 -->
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <!-- 分割线 -->
              <v-divider class="pd-2"></v-divider>

              <!-- 内容 -->
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">小王子</v-list-item-title>
                  <v-divider class="mt-2 mb-4"></v-divider>
                  <v-list-item-subtitle>349807102@qq.com</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <!-- 分割线 -->
            <v-divider></v-divider>

            <!-- 导航 -->
            <v-list nav dense shaped v-for="item in menu" :key="item.id">
              <v-list-item link :to="item.path">
                <!--  图标 -->
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <!-- 标题 -->
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <!-- 右侧占位符(显示子路由) -->
          <router-view></router-view>
        </v-col>

        <v-col col="2" class="d-lg-flex d-none"></v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FuncBar',
  data() {
    return {
      // 控制展开与折叠(默认-折叠)
      isShowNavIcon: true,
      mini: true,
      // 菜单数据
      menu: [
        { title: '首页', icon: 'mdi-home-outline', id: 1, path: '/', action: 'home' },
        {
          title: '时间轴',
          icon: 'mdi-timeline-outline',
          id: 6,
          path: '/timeline',
          action: 'timeline',
        },
        { title: '归档', icon: 'mdi-archive-outline', id: 7, path: '/archive', action: 'archive' },
        {
          title: '友链',
          icon: 'mdi-link-variant',
          id: 8,
          path: '/friendlink',
          action: 'friendlink',
        },
        { title: '关于', icon: 'mdi-information-outline', id: 2, path: '/about', action: 'about' },
      ],
    }
  },
  watch: {
    // 获取屏幕宽度
    screenWidth(val) {
      this.screenWidth = val
      let self = this
      if (this.screenWidth <= 767) {
        self.peen = false
        self.seen = true
      } else {
        self.peen = true
        self.seen = false
      }
    },
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },

  methods: {
    // 控制展开与折叠
    showNavIcon() {
      console.log(this.isShowNavIcon)
      this.isShowNavIcon = !this.isShowNavIcon
    },
    toHomePage() {
      this.$router.push('/')
    },
  },
  computed: {
    // 设置菜单展开或折叠图标样式
    menuStyle() {
      return !this.isShowNavIcon ? 'mdi-menu' : 'mdi-menu-open'
    },
  },
}
</script>

<style lang="scss">
//移动端配置
@media (max-width: 768px) {
  .home {
    background: url(https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg);
    background-attachment: fixed;
  }
}
//PC端
@media (min-width: 768px) {
  .home {
    background: url(https://blog.ri-co.cn/wp-content/uploads/2020/04/lightblue.jpg);
    background-attachment: fixed;
  }
}
.home {
  background-size: 100% 100%;
}
.menubtn {
  margin-right: 2rem;
}
.btn {
  font-size: 1rem;
  // font-family: 'Segoe UI';
}
.rightbtn {
  margin-top: 2rem;
}
.drawer {
  z-index: 3;
}
</style>
