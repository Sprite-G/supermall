import Vue from "vue";
import Vuex from "vuex"

import actions from "./actions"
import mutations from "./mutations"


//安装插件
Vue.use(Vuex)
//创建store对象
const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

//挂载到vue实例
export default store