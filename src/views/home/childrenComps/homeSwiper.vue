<template>
  <div>
    <mySwiper>
      <div
        v-for='(item, index) in banners'
        :key='index'
      >
        <a :href="item.link">
          <img
            class='img'
            :src="item.image"
            alt=""
          >
        </a>
      </div>
    </mySwiper>
  </div>

</template>

<script>
import mySwiper from 'components/common/swiper/Swiper'
export default {
  name: 'homeSwiper',
  props: {
    banners: {
      // type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    mySwiper
  }
}

</script>
<style scoped>
.img{
  width: 100%;
}
</style>