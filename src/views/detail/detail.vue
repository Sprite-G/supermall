<template>
  <div id='detail'>
    <detailNavBar></detailNavBar>
    <detailSwiper :imgs='topImgs'></detailSwiper>
  </div>
</template>

<script>
import { getDetail } from 'network/detail.js'

import detailNavBar from './detailComps/detailNavBar.vue'

import detailSwiper from './detailComps/detailSwiper'

export default {
  name: 'detail',
  data () {
    return {
      iid: null,
      topImgs: null
    }
  },
  components: {
    detailNavBar,
    detailSwiper
  },
  created () {
    // this.id = this.$route.params.id
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      this.topImgs = res.result.itemInfo.topImages
      console.log(this.topImgs)
    })
  },
  mounted () {

  }
}

</script>
<style scoped>
</style>