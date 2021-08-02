<template>
  <div id='detail'>
    <detailNavBar
      @titleClick='titleClick'
      ref='navbar'
    ></detailNavBar>
    <scroll
      class='content'
      ref='scroll'
      :pullUpLoad='true'
      @scroll='contentScroll'
      @backTopCtrl='backTopCtrl(arguments)'
    >

      <detailSwiper :imgs='topImgs'></detailSwiper>
      <detailBaseInfo :goods='goods'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
      <detailGoodsInfo
        :detailInfo='detailInfo'
        @imgLoad='imgLoad'
      ></detailGoodsInfo>
      <detailParamInfo
        ref='paramInfo'
        :paramInfo='paramInfo'
      ></detailParamInfo>
      <detailCommentInfo
        ref='commentInfo'
        :commentInfo='commentInfo'
      ></detailCommentInfo>
      <goodsList
        ref='recommends'
        :goods='recommends'
      />
    </scroll>
    <detailBottomBar @addCart='addToCart'></detailBottomBar>
    <backTop
      v-show='backTopShow'
      @click.native='backTop'
    ></backTop>
  </div>
</template>

<script>
import { getDetail, Goods, shop, goodsParam, getRecommend } from 'network/detail.js'

import { itemListenerMixin, backTopMixin } from 'common/mixin'

import { debounce } from 'common/utils'

import detailNavBar from './detailComps/detailNavBar'
import detailSwiper from './detailComps/detailSwiper'
import detailBaseInfo from './detailComps/detailBaseInfo'
import detailShopInfo from './detailComps/detailShopInfo'
import detailGoodsInfo from './detailComps/detailGoodsInfo'
import detailParamInfo from './detailComps/detailParamInfo'
import detailCommentInfo from './detailComps/detailCommentInfo'
import detailBottomBar from './detailComps/detailBottomBar'

import goodsList from 'components/content/goods/goodsList'

import scroll from 'components/common/scroll/scroll'

export default {
  name: 'detail',
  mixins: [itemListenerMixin, backTopMixin],
  data () {
    return {
      iid: null,
      topImgs: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopY: [0, 1000, 2000, 3000],
      getThemeTopY: null
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
    detailBottomBar,

    goodsList,

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
    })
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    this.getThemeTopY = debounce(() => {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.paramInfo.$el.offsetTop)
      this.themeTopY.push(this.$refs.commentInfo.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
      console.log('getThemeTopY', this.themeTopY);
    }, 100)
  },
  mounted () {

  },
  methods: {
    addToCart () {
      const product = {}
      product.image = this.topImgs[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart', product)
    },
    loadMore () {

    },
    backTopCtrl (val) {
      this.backTopShow = val[0]
    },
    imgLoad () {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick (index) {
      console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopY[index], 500)
    },
    contentScroll (pos) {
      let posY = -pos.y
      let length = this.themeTopY.length

      for (let i in this.themeTopY) {
        // console.log('scroll',i + 1,posY,this.themeTopY[i],this.themeTopY[i + 1]);
        // console.log(posY >= this.themeTopY[i] && posY < this.themeTopY[i + 1] );
        if (this.currentIndex != i &&
          ((i < length && posY >= this.themeTopY[i] && posY < this.themeTopY[i - (-1)]) ||
            (i == length - 1 && posY >= this.themeTopY[i])
          )
        ) {
          this.currentIndex = i
          this.$refs.navbar.currentIndex = Number(i)
        }
      }
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