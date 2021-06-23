<template>
  <div id='home'>
    <navBar class='home-nav'>
      <div slot='center'> 购物街 </div>
    </navBar>
    <!-- <homeSwiper :banners='banners'></homeSwiper> -->
    <!-- <awesomeSwiper :banners='banners'></awesomeSwiper> -->
    <mySwiper :banners='banners'></mySwiper>
  </div>
</template>

<script>
import { getHomeMultidata } from 'network/home'
import navBar from 'components/common/navbar/navBar'
import homeSwiper from './childrenComps/homeSwiper'
import awesomeSwiper from 'components/common/swiper-awesome/awesomeSwiper'
import mySwiper from 'components/common/mySwiper/mySwiper'
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
    homeSwiper,
    awesomeSwiper,
    mySwiper
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
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>