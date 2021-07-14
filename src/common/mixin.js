import { debounce } from "./utils";

export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  activated () {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = ()=>{
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    console.log('我是mixin');
  }
}