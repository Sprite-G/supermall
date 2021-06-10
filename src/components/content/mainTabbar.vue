<template>
  <tabbar>
    <barItem path='/home'>
      <img
        slot='icon'
        src='~assets/img/tabbar/cc-home.png'
      >
      <img
        slot='icon-active'
        src='~assets/img/tabbar/cc-home (1).png'
      >
      <div slot='text'>首页</div>
    </barItem>
    <barItem path='/category'>
      <img
        slot='icon'
        src='~assets/img/tabbar/category.png'
      >
      <img
        slot='icon-active'
        src='~assets/img/tabbar/category (1).png'
      >
      <div slot='text'>分类</div>
    </barItem>
    <barItem path='/cart'>
      <img
        slot='icon'
        src='~assets/img/tabbar/shop-cart-1.png'
      >
      <img
        slot='icon-active'
        src='~assets/img/tabbar/shop-cart-1 (1).png'
      >
      <div slot='text'>购物车</div>
    </barItem>
    <barItem path='/profile'>
      <img
        slot='icon'
        src='~assets/img/tabbar/profile.png'
      >
      <img
        slot='icon-active'
        src='~assets/img/tabbar/profile (1).png'
      >
      <div slot='text'>我的</div>
    </barItem>
  </tabbar>
</template>

<script>
import barItem from 'components/common/barItem'
import tabbar from 'components/common/tabbar'
export default {
  name: 'mainTabbar',
  components: {
    barItem,
    tabbar
  }
}

</script>
<style scoped>
</style>