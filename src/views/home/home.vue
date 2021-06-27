<template>
  <div id='home'>
    <navBar class='home-nav'>
      <div slot='center'> 购物街 </div>
    </navBar>
    <awesomeSwiper :banners='banners'></awesomeSwiper>
    <recommendView :recommends='recommend'></recommendView>
    <featureView></featureView>
    <tabControl
      :titles="titles"
      class='tab-control'
      @tabClick='tabClick'
    ></tabControl>
    <goodsList :goods='showGoods'></goodsList>
  </div>
</template>

<script>
import {
  getHomeMultidata, getHomeGoods
} from 'network/home'

import navBar from 'components/common/navbar/navBar'
import tabControl from 'components/content/tabControl/tabControl'
// import homeSwiper from './childrenComps/homeSwiper'
import awesomeSwiper from 'components/common/swiper-awesome/awesomeSwiper'
// import mySwiper from 'components/common/mySwiper/mySwiper'
import goodsList from 'components/content/goods/goodsList'

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
      recommend: null,
      titles: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsKey: 'pop'
    }
  },
  components: {
    navBar,
    tabControl,
    // homeSwiper,
    awesomeSwiper,
    // mySwiper,
    goodsList,

    RecommendView,
    featureView
  },
  created () {  //不在created里写代码的具体组织方式
    this.getHomeMultidata_M()
    this.getHomeGoods_M('pop')
    this.getHomeGoods_M('new')
    this.getHomeGoods_M('sell')
  },
  computed: {
    showGoods () {
      return this.goods[this.goodsKey].list
    }
  },
  methods: {
    /**
     * 时间监听相关
     */
    tabClick (index) {
      switch (index) {
        case 0:
          this.goodsKey = 'pop';
          break
        case 1:
          this.goodsKey = 'new';
          break
        case 2:
          this.goodsKey = 'sell';
          break
      }
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata_M () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
        // console.log('getHomeMultidata', this.banners)
      })
    },
    getHomeGoods_M (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list)
      })
    }
  }
}

</script>
<style scoped>
#home {
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
.tab-control {
  position: sticky;
  top: 44px;
}
</style>