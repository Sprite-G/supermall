<template>
  <div class='swiper'>
    <div
      :style="scrollStyle"
      class='page'
      v-for='(item ,index) in banners'
      :key='index'
    >
      <a href="item.url">
        <img
          src="item.image"
          alt=""
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "mySwiper",
  props: {
    banners: {
      type: Array,
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
  methods: {
    begin () {
      setInterval(() => {
        this.move()
      }, 2000)
    },
    move () {

    }
  },
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
