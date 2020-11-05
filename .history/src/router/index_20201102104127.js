import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

//配置路由
//每一个路由是一个对象
//3个基础属性 path:路径 name：名字 compoment：渲染的组件
const routes = [
  {
    // /代表根路径 没有任何的路径
    // 都代表首页
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    // 除了首页 其他路由的component都用路由懒加载的方式
    component:() =>import('../views/home/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
