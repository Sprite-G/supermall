import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

