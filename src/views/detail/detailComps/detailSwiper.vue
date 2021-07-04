<template>
  <div class='swiper'>
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for='(item, index) in imgs'
        :key='index'
      >
        <img
          class='swiper-img'
          :src="item"
          alt=""
          @load='imgLoad'
        >
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'detailSwiper',
  props: {
    imgs: {
      // type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        effect: 'flip',
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
    }
  },
  mounted () {
    // console.log('mounted', this.banners)
  },
  methods: {
    imgLoad () {
      if (!this.isImgLoad) {
        this.$emit('offsetImg')
        this.isImgLoad = true
      }
    }
  }
}

</script>
<style scoped>
.swiper {
  overflow: hidden;
  width: 100%;
  height: 300px;
  padding-bottom: 0%;
}
.swiper-img {
  width: 100%;
  /* height: 300px; */
}
.swiper-pagination {
  position: fixed;
  bottom: 270px;
}
</style>