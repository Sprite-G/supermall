<template>
  <div class='swiper'>
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for='(item, index) in banners'
        :key='index'
      >
        <a :href="item.link">
          <img
            class='swiper-img'
            :src="item.image"
            alt=""
            @load='imgLoad'
          >
        </a>
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'awesomeSwiper',
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
  height: 100%;
  padding-bottom: 0%;
}
.swiper-img {
  width: 100%;
}
/* .swiper-pagination {
  padding-bottom: 0px;
} */
</style>