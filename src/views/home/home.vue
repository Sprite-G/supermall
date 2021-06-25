<template>
  <div id='home'>
    <navBar class='home-nav'>
      <div slot='center'> 购物街 </div>
    </navBar>
    <awesomeSwiper :banners='banners'></awesomeSwiper>
    <recommendView :recommends='recommend'></recommendView>
    <featureView></featureView>
  </div>
</template>

<script>
import { getHomeMultidata } from 'network/home'
import navBar from 'components/common/navbar/navBar'
// import homeSwiper from './childrenComps/homeSwiper'
import awesomeSwiper from 'components/common/swiper-awesome/awesomeSwiper'
// import mySwiper from 'components/common/mySwiper/mySwiper'
import RecommendView from './childrenComps/RecommendView.vue'
import featureView from './childrenComps/featureView.vue'
export default {
  name: 'home',
  data () {
    return {
      banners: {
        type: Array,
        default () {
          return ['nonething']
        }
      },
      recommend: null
    }
  },
  components: {
    navBar,
    // homeSwiper,
    awesomeSwiper,
    // mySwiper,
    RecommendView,
    featureView
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
      console.log('getHomeMultidata', this.banners)
    })
  }
}

</script>
<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>