<template>
  <div id='detail'>
    <detailNavBar></detailNavBar>
    <scroll
      class='content'
      ref='scroll'
      :pullUpLoad='true'
    >

      <detailSwiper :imgs='topImgs'></detailSwiper>
      <detailBaseInfo :goods='goods'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
      <detailGoodsInfo
        :detailInfo='detailInfo'
        @imgLoad='imgLoad'
      ></detailGoodsInfo>
      <detailParamInfo :paramInfo='paramInfo'></detailParamInfo>
      <detailCommentInfo :commentInfo='commentInfo'></detailCommentInfo>
    </scroll>

  </div>
</template>

<script>
import { getDetail, Goods, shop, goodsParam } from 'network/detail.js'

import detailNavBar from './detailComps/detailNavBar.vue'
import detailSwiper from './detailComps/detailSwiper'
import detailBaseInfo from './detailComps/detailBaseInfo'
import detailShopInfo from './detailComps/detailShopInfo'
import detailGoodsInfo from './detailComps/detailGoodsInfo'
import detailParamInfo from './detailComps/detailParamInfo'
import detailCommentInfo from './detailComps/detailCommentInfo'


import scroll from 'components/common/scroll/scroll'

export default {
  name: 'detail',
  data () {
    return {
      iid: null,
      topImgs: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {}

    }
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,

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
      this.detailInfo = data.detailInfo
      this.paramInfo = new goodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.cRare != 0) {
        this.commentInfo = data.rate.list[0]
      }
      console.log(data.rate);
    })
  },
  mounted () {

  },
  methods: {
    loadMore () {

    },
    backTopCtrl () {

    },
    imgLoad () {
      this.$refs.scroll.refresh()
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
  height: 100vh;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: calc(100% - 44px - 44px); */
}
</style>