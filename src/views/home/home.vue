<template>
  <div id='home'>
    <navBar class='home-nav'>
      <div slot='center'> 购物街 </div>
    </navBar>
    <!-- 控制显示或隐藏另一个tabControl来实现吸顶效果 -->
    <tabControl
      :titles="titles"
      class='tab-control-show'
      @tabClick='tabClick'
      ref='tabControl2'
      v-show='isTabFixed'
    ></tabControl>
    <scroll
      class='content'
      @backTopCtrl='backTopCtrl(arguments)'
      ref='scroll'
      :pullUpLoad='true'
      @pullingUp='loadMore'
    >
      <awesomeSwiper
        :banners='banners'
        @offsetImg='offsetImg'
      ></awesomeSwiper>
      <recommendView :recommends='recommend'></recommendView>
      <featureView></featureView>
      <tabControl
        :titles="titles"
        @tabClick='tabClick'
        ref='tabControl'
      ></tabControl>
      <goodsList
        :goods='showGoods'
        test='test'
      ></goodsList>
      <!-- 父组件向子组件传值时传字符串之类简单的值不需要bind，变量才需要 -->
    </scroll>
    <!-- 组件无法直接监听点击，需要click.native -->
    <backTop
      v-show='backTopShow'
      class='back-top'
      @click.native='backTop'
    ></backTop>
  </div>
</template>

<script>
import {
  getHomeMultidata, getHomeGoods
} from 'network/home'

// import { debounce } from 'common/utils'
import { itemListenerMixin } from 'common/mixin'

import navBar from 'components/common/navbar/navBar'
import tabControl from 'components/content/tabControl/tabControl'
import homeSwiper from './childrenComps/homeSwiper'
import awesomeSwiper from 'components/common/swiper-awesome/awesomeSwiper'
import goodsList from 'components/content/goods/goodsList'
import scroll from 'components/common/scroll/scroll'

import backTop from 'components/content/backTop/backTop'

import RecommendView from './childrenComps/RecommendView.vue'
import featureView from './childrenComps/featureView.vue'

export default {
  name: 'home',
  mixins:[itemListenerMixin],
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
      goodsKey: 'pop',
      backTopShow: false,
      tabControlOffsetTop: null,
      isTabFixed: false,
      scrollY: 0
    }
  },
  components: {
    navBar,
    tabControl,
    homeSwiper,
    awesomeSwiper,
    goodsList,
    scroll,

    backTop,

    RecommendView,
    featureView
  },
  created () {  //不在created里写代码的具体组织方式
    this.getHomeMultidata_M()
    this.getHomeGoods_M('pop')
    this.getHomeGoods_M('new')
    this.getHomeGoods_M('sell')


  },
  mounted () {

  },
  //被包含在 keep-alive 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated
  //用两个生命周期钩子保存状态以实现滚动进度的保存
  activated () {
    // const refresh = debounce(this.$refs.scroll.refresh, 500)
    // this.itemImgListener = () => {  //使用事件总线监听数据的变化
    //   refresh()                    //对监听的事件进行命名以准确停止监听该事件
    // }
    // this.$bus.$on('itemImgLoad', this.itemImgListener)

    this.$refs.scroll.scroll.scrollTo(0, this.scrollY, 0)
  },
  deactivated () {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
    this.scrollY = this.$refs.scroll.scroll.y
  },
  computed: {
    showGoods () {
      return this.goods[this.goodsKey].list
    }
  },
  methods: {
    //所有组件都有一个$el属性来获取组件中的根元素
    //获取组件元素的offsetTop属性
    offsetImg () {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    // debounce (func, delay) {
    //   let timer
    //   return function (...args) {
    //     if (timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // },
    backTopCtrl (val) {
      this.backTopShow = val[0]
      //tabControl吸顶控制
      if (this.tabControlOffsetTop && this.tabControlOffsetTop < Math.abs(val[1])) {
        this.isTabFixed = true
      } else {
        this.isTabFixed = false
      }
    },
    backTop () {
      // this.$refs.scroll.scroll.scrollTo(0, -60, 300) 通过$refs获取scroll元素便可调用其方法
      this.$refs.scroll.scrollToTop()  //对方法进行封装
    },
    loadMore () {
      this.getHomeGoods_M(this.goodsKey)
    },
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
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
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
        this.goods[type].page += 1
      })
    }
  }
}

</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  /* 设置高度为100%屏幕 */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  /* 下面这些属性用于控制原生滚动的显示 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control-show {
  /* 设定层级需要配合position属性才可使用 */
  position: relative;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>