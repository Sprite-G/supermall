<template>
  <div class='shop-info'>
    <div class='shop-top'>
      <img
        :src="shop.logo"
        alt=""
      >
      <span>{{shop.name}}</span>
    </div>
    <div class='shop-middle'>
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            5.8万
            <!-- {{shop.sells}} 无数据-->
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr
            v-for="(item,index) in shop.score"
            :key="index"
          >
            <td>{{item.name}}</td>
            <td
              class="score"
              :class="{'score-better':item.isBetter}"
            >{{item.score}}</td>
            <td
              class="better"
              :class="{'better-more':item.isBetter}"
            >
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailShopInfo',
  props: {
    shop: {
      default () {
        return {}
      }
    }
  }
}

</script>
<style scoped>
.shop-info {
  padding: 10px 10px;
}
.shop-top {
  padding-bottom: 15px;
}
.shop-top img {
  width: 60px;
}
.shop-top span {
  position: relative;
  top: -25px;
  left: 10px;
}
.shop-middle {
  display: flex;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count,
.goods-count {
  font-size: 18px;
}
.info-sells{
  margin-top: -3.5px;
}

.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right {
}
</style>