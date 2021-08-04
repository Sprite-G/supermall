
export default {
  addCart (context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count += 1 这样写也可以，但是无法在devtools中监视到状态变化
        // 将数量加1的情况分发到一个特定的方法中
        context.commit('addCount', oldProduct) // commit 提交到store中mutations里的方法addCounter中去
        resolve('当前商品数量+1')
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        // 将添加商品的情况分发到另一个特定的方法中，使得mutations中的方法只对应一种改变
        context.commit('addToCart', payload)
        resolve('添加新的商品')
      }
    })

  }
}