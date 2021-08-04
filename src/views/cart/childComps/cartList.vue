<template>
  <div class='cart-list'>
    <scroll
      class='content'
      ref="scroll"
    >
      <cartItem
        v-for='(item,index) in list'
        :key='index'
        :itemInfo='item'
      ></cartItem>
    </scroll>
  </div>
</template>

<script>
import scroll from 'components/common/scroll/scroll'
import cartItem from './cartItem'
export default {
  name: 'cartList',
  props: {
    list: null
  },
  components: {
    scroll,
    cartItem
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}

</script>
<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px);
}
.content {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>