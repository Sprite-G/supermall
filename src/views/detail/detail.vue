<template>
  <div id='detail'>
    <detailNavBar></detailNavBar>
    <scroll
      class='content'
      @backTopCtrl='backTopCtrl(arguments)'
      @pullingUp='loadMore'
    >
      <detailSwiper :imgs='topImgs'></detailSwiper>
      <detailBaseInfo :goods='goods'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
    </scroll>

  </div>
</template>

<script>
import { getDetail, Goods, shop } from 'network/detail.js'

import detailNavBar from './detailComps/detailNavBar.vue'
import detailSwiper from './detailComps/detailSwiper'
import detailBaseInfo from './detailComps/detailBaseInfo'
import detailShopInfo from './detailComps/detailShopInfo'

import scroll from 'components/common/scroll/scroll'

export default {
  name: 'detail',
  data () {
    return {
      iid: null,
      topImgs: null,
      goods: {},
      shop: {}
    }
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,

    scroll
  },
  created () {
    // this.id = this.$route.params.id
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      let data = res.result
      this.topImgs = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new shop(data.shopInfo)
      console.log(this.shop);
    })
  },
  mounted () {
    
  },
  methods:{
    loadMore(){ 
      
    },
    backTopCtrl(){

    }
  }
}

</script>
<style scoped>
#detail {
  position: relative;
  /* 跟位置有关的设置都必须先设置position */
  z-index: 9;
  background-color: white;
}
.content {
  overflow: hidden;
  /* position: absolute; */
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: calc(100% - 44px - 44px); */
  /* overflow: hidden; */
}
</style>