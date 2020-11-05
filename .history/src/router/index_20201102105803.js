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
    name: 'Login', //这是登录页面
    component: Login
  },
  {
    path: '/home', 
    name: 'home', //这是登录后的首页
    // 除了首页 其他路由的component都用路由懒加载的方式
    component:() =>import('../views/home/Home.vue')
  },
  {
    path: '/publish', 
    name: 'publish', //这是已发布页面
    component:() =>import('../views/publish/Publish.vue')
  },
  {
    path: '/statistics', 
    name: 'statistics', //这是统计页面
    component:() =>import('../views/statistics/Statistics.vue')
  },
  {
    path: '/article', 
    name: 'article', //这是发表文章页面
    component:() =>import('../views/article/Article.vue')
  },
  {
    path: '/tab', 
    name: 'tab', //这是标签页面
    component:() =>import('../views/tab/Tab.vue')
  },
  {
    path: '/excel', 
    name: 'excle', //这是导出excel页面
    component:() =>import('../views/excel/Excel.vue')
  },
  {
    path: '/home', 
    name: 'home', //这是登录后的首页
    component:() =>import('../views/home/Home.vue')
  },
  {
    path: '/home', 
    name: 'home', //这是登录后的首页
    component:() =>import('../views/home/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
