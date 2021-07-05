<template>
  <div id='detail'>
    <detailNavBar></detailNavBar>
    <detailSwiper :imgs='topImgs'></detailSwiper>
    <detailBaseInfo :goods='goods'></detailBaseInfo>
  </div>
</template>

<script>
import { getDetail, Goods } from 'network/detail.js'

import detailNavBar from './detailComps/detailNavBar.vue'
import detailSwiper from './detailComps/detailSwiper'
import detailBaseInfo from './detailComps/detailBaseInfo'

export default {
  name: 'detail',
  data () {
    return {
      iid: null,
      topImgs: null,
      goods: {}
    }
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo
  },
  created () {
    // this.id = this.$route.params.id
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      let data = res.result
      this.topImgs = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      console.log(this.goods);
    })
  },
  mounted () {

  }
}

</script>
<style scoped>
</style>