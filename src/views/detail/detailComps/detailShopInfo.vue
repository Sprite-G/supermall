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
    <div class='shop-bottom'>
      <div class="enter-shop">进店逛逛</div>
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
.info-sells {
  margin-top: -3.5px;
}

.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right {
  display: flex;
  justify-content: space-evenly;
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.score {
  color: #5ea732;
}
.score-better {
  color: var(--color-high-text);
}
.better span {
  background-color: #5ea732;
  color: white;
}
.better-more span {
  background-color: var(--color-high-text);
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>