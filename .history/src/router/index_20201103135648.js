import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/layout/home/Home.vue'
import layout from '../views/layout/Layout'
Vue.use(VueRouter)

//配置路由
//每一个路由是一个对象
//3个基础属性 path:路径 name：名字 compoment：渲染的组件
const routes = [{
    // /代表根路径 没有任何的路径
    // 都代表首页
    path: '',
    component: layout,
    children:[
      {
        path: '/', 
        name: 'home', //这是登录后的首页
        // 除了首页 其他路由的component都用路由懒加载的方式
        component:home,
        meta:{
          title:'首页'
        }
      },
      {
        path: '/publish', 
        name: 'publish', //这是已发布页面
        component:() =>import('../views/layout/publish/Publish.vue'),
        meta:{
          title:'已发布'
        }
      },
      {
        path: '/statistics', 
        name: 'statistics', //这是统计页面
        component:() =>import('../views/layout/statistics/Statistics.vue'),
        meta:{
          title:'统计页面'
        }
      },
      {
        path: '/article', 
        name: 'article', //这是发表文章页面
        component:() =>import('../views/layout/article/Article.vue'),
        meta:{
          title:'发表文章'
        }
      },
      {
        path: '/tab', 
        name: 'tab', //这是标签页面
        component:() =>import('../views/layout//tab//Tab.vue'),
        meta:{
          title:'标签页'
        }
      },
      {
        path: '/excel', 
        name: 'excel', //这是导出excel页面
        component:() =>import('../views/layout/excel/Excel.vue'),
        meta:{
          title:'导出excel'
        }
      },
      {
        path: '/picture', 
        name: 'picture', //这是图片上传页面
        component:() =>import('../views/layout/picture/Picture.vue'),
        meta:{
          title:'图片上传'
        }
      },
      {
        path: '/out', 
        name: 'out', //这是退出系统页面
        component:() =>import('../views/layout/out/Out.vue'),
        meta:{
          title:'退出'
        }
      },
    ]
  },
  {
    path: '/login', 
    name: 'login', //这是登录页面
    component:() =>import('../views/login/Login.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/register', 
    name: 'register', //这是注册页面
    component:() =>import('../views/register/Register.vue'),
    meta:{
      title:'注册'
    }
  },
  //所有路由之后最后 配置一个错误路由
  {
    path:"*",//如果我之前的都没有匹配到,就会匹配到这个*的路由
    component:() =>import('../views/404/404.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,form,next) =>{
  document.title = to.meta.title
  next()
})









export default router
