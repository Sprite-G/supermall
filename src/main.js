import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import store from './store'
import toast from 'components/common/toast' //1.引入插件
// 2.安装插件,就相当于调用了toast的install函数方法
Vue.use(toast)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

