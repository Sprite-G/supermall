import { debounce } from "./utils";
import backTop from 'components/content/backTop/backTop'

export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  activated () {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    console.log('我是mixin');
  }
}

export const backTopMixin = {
  data(){
    return{
      backTopShow:false
    }
  },
  components: {
    backTop
  },
  methods:{
    backTop(){
      console.log('backTop');
      this.$refs.scroll.scrollToTop() 
    }
  }
}