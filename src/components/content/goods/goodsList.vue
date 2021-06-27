<template>
  <div class='goods'>
    <goodsListItem
      v-for="(item,index) in goods"
      :key='index'
      :item='item'
    ></goodsListItem>

    <!-- ul>li{商品列表$}*100 -->
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  name: 'goodsList',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    goodsListItem
  }
}

</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>