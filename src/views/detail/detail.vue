<template>
  <div id='detail'>
    <detailNavBar></detailNavBar>
    <detailSwiper :imgs='topImgs'></detailSwiper>
    <detailBaseInfo :goods='goods'></detailBaseInfo>
    <detailShopInfo :shop='shop'></detailShopInfo>
  </div>
</template>

<script>
import { getDetail, Goods, shop } from 'network/detail.js'

import detailNavBar from './detailComps/detailNavBar.vue'
import detailSwiper from './detailComps/detailSwiper'
import detailBaseInfo from './detailComps/detailBaseInfo'
import detailShopInfo from './detailComps/detailShopInfo'
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
    detailShopInfo
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

  }
}

</script>
<style scoped>
</style>