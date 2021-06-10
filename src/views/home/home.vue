<template>
  <div id='home'>
    <navBar class='home-nav'>
      <div
        slot='center'
        class='home-nav'
      >
        购物街
      </div>
    </navBar>

  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import { getHomeMultidata } from 'network/home'
export default {
  name: 'home',
  data () {
    return {
      banner: null,
      recommend:null
    }
  },
  components: {
    navBar
  },
  created () {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}

</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>