<template>
  <div class='cart'>
    <navBar class='nav-bar'>
      <div slot='center'>购物车({{cartListLength}})</div>
    </navBar>
    <cartList :list='cartList'>
    </cartList>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'  //导入并使用辅助函数将store中的getter映射到局部计算属性

import navBar from 'components/common/navbar/navBar'

import cartList from './childComps/cartList'

export default {
  name: 'cart',
  components: {
    navBar,
    cartList,
  },
  computed: {
    ...mapGetters([
      'cartListLength',
      'cartList'
    ])
  }

}

</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: aliceblue;
}
</style>