//构建自定义插件

import toast from './toast' // 将toast组件导入进来，好添加组件中的元素
const obj = {}
obj.install = function (Vue) {  //初始化时自动传入参数Vue
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(toast)
  // 2.用new的方式，根据组件构造器，可以创建一个组件对象
  const toastObj = new toastConstructor()
  // 3.创建一个元素（div）将组件对象手动地挂载到元素上
  toastObj.$mount(document.createElement('div'))
  // 4.挂载完之后，toastObj.$el对应的就是div
  // appendChild() 方法向节点添加最后一个子节点
  document.body.appendChild(toastObj.$el)

  // 将toast组件对象放在vue原型上，使得其他任意组件都可使用$toast方法使用toast组件对象
  Vue.prototype.$toast = toastObj
}

export default obj