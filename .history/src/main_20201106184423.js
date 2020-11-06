import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
// 编辑器引入
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//引用excel
import JsonExcel from 'vue-json-excel'

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.component('downloadExcel', JsonExcel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
