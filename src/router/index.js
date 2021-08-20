import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home')
const FuncBar = () => import('views/FuncBar')
const Timeline = () => import('views/Timeline')
const HomePage = () => import('views/HomePage')
const About = () => import('views/About')
const Archive = () => import('views/Archive')
const FriendLink = () => import('views/FriendLink')
// const HomePage = () => import('components/homepage/HomePage')
// const Navbar = () => import('components/header/Navbar')

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: Home,
    // 子路由
    children: [
      {
        path: '',
        component: FuncBar,
        children: [
          { path: '', components: HomePage },
          { path: '/timeline', components: Timeline },
          { path: '/about', components: About },
          { path: '/archive', components: Archive },
          { path: '/friendlink', components: FriendLink },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
