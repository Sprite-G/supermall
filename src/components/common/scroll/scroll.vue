<template>
  <div
    class='wrapper'
    ref='wrapper'
  >
    <div class='content'>
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { debounce } from 'common/utils'
export default {
  name: 'scroll',
  props: {
    pullUpLoad: {
      type: Boolean,
      default () {
        return true
      }
    },
    probeType: {  //控制派发事件模式，3为全模式派发
      type: Number,
      default: 3
    }
  },
  created () {
    this.monitorScrollY = debounce(() => {
      this.$emit('scroll', pos.y)
    })
  },
  mounted () {
    // document.querySelector('.wrapper') 获取第一个对应的class元素，当有多个同样的class时不准确
    let scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: this.pullUpLoad,
      click: true  //默认scroll里不可点击
    })
    this.scroll = scroll
    scroll.on('scroll', (pos) => {
      // console.log(pos.y)
      // console.log(scroll.maxScrollY)
      if (Math.abs(pos.y) > Math.abs(scroll.maxScrollY / 2)) {
        this.$emit('backTopCtrl', true, pos.y)
      } else {
        this.$emit('backTopCtrl', false, pos.y)
      }
      if (!this.scrollCount) this.scrollCount = 0
      this.scrollCount += 1
      if (this.scrollCount == 10) {
        this.scrollCount = 0
        this.$emit('scroll', pos)
      }
    })
    scroll.on('pullingUp', () => {
      console.log('加载更多')
      this.$emit('pullingUp')
      setTimeout(() => {
        scroll.finishPullUp()
      }, 2000)
    })
  },
  methods: {
    scrollToTop () {
      this.scroll && this.scroll.scrollTo(0, -60, 300)
    },
    refresh () {
      console.log('refresh')
      this.scroll && this.scroll.refresh()
    }
  }
}

</script>
<style scoped>
</style>