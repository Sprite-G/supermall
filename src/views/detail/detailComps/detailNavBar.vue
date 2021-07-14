<template>
  <div>
    <navBar>
      <div slot = 'left' class = 'left-back' @click= 'back'>
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div
        slot='center'
        class='bar-center'
      >
        <div
          v-for='(item,index) in barItem'
          :key=index
          class='bar-center-item'
          :class='{itemActive:index===currentIndex}'
          @click="itemClick(index)"
        >
          {{item}}
        </div>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
export default {
  name: 'detailNavBar',
  data () {
    return {
      barItem: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    navBar
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    back(){
      this.$router.back()
    }
  }
}

</script>
<style scoped>
.bar-center {
  display: flex;
}
.bar-center-item {
  flex: 1;
}
.itemActive {
  color: var(--color-high-text);
}
.left-back img{
  margin-top: 10px;
}
</style>