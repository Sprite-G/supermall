<template>
  <div
    class='swiper'
    :style="sizeStyle"
  >
    <div
      :style="scrollStyle"
      class='page'
      v-for='(item ,index) in banners'
      :key='index'
    >
      <a href="item.link">
        <img
          src="item.image"
          alt=""
        >
      </a>
    </div>
    <div :style="scrollStyle">
      <a :href="firstItem.link">
        <img
          :src="firstItem.path"
          :alt="firstItem.title"
          :style="sizeStyle"
        >
      </a>
    </div>
  </div>
</template>

<script>
let timer, transtionTimer
export default {
  name: "mySwiper",
  props: {
    banners: {
      // type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      width: 300,
      height: 200,
      currentIndex: 1,
      scrollStyle: { transform: "translateX(0px)" }
    }
  },
  mounted () {
    this.begin()
  },
  computed: {
    firstItem () {
      return this.banners[0];
    },
    sizeStyle () {
      return { width: this.width + "px", height: this.height + "px" };
    }
  },
  methods: {
    begin () {
      timer = setInterval(() => {
        if (transtionTimer) {
          return;
        }
        this.scroll();
      }, 2000);
    },
    scroll () {
      let start = -(((this.currentIndex - 1) % this.number) * this.width);
      let end = -(this.currentIndex % this.number) * this.width;
      if (end == 0) {
        start = 0;
        end = -this.width;
      }
      this.move(start, end);
    },
    move (start, end) {
      let offset = this.width / 20;
      //定时器，实现平移效果
      transtionTimer = setInterval(() => {
        start = start - offset;
        if (start <= end) {
          clearInterval(transtionTimer);
          transtionTimer = null;
          start = end;
          if (this.currentIndex % this.number == 0) {
            this.currentIndex = 1;
          } else {
            this.currentIndex++;
            // 过渡效果：移动到最后一张图后（我们在最后加的第一张图片），把偏移量设置为0，自动切换成第一图
            if (this.currentIndex == this.number) {
              this.currentIndex = 1;
              start = 0;
            }
          }
        }
        this.scrollStyle = {
          transform: "translateX(" + start + "px)"
        };
      }, 20);
    }
  },
  destroyed () {
    clearInterval(timer);
    timer = null;
    clearInterval(transtionTimer);
    transtionTimer = null;
  }
}
</script>

<style scoped>
.swiper {
  display: flex;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>
