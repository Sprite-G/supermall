<template>
  <div
    v-if="Object.keys(goods).length !==0"
    class='base-info'
  >
    <div class='info-title'>{{goods.title}}</div>
    <div class='info-price'>
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span
        class="discount"
        v-if="goods.discount"
      >{{goods.discount}}</span>
    </div>
    <div class='info-other'>
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class='info-service'>
      <span
        class='info-service-item'
        v-for="index in goods.services.length"
        :key='index'
      >
        <img
          :src="goods.services[index-1].icon"
          alt=""
        >
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBaseInfo',
  props: {
    goods: {
      default () {
        return {}
      }
    }
  }
}

</script>
<style scoped>
.base-info {
  padding: 10px 10px 10px 10px;
}
.info-title {
  margin-bottom: 10px;
  color: #000;
  font-weight: 500;
}
.info-price {
  margin-bottom: 10px;
}
.n-price {
  /* flex: 1; */
  color: var(--color-high-text);
  margin-right: 5px;
  font-size: 20px;
}
.o-price {
  /* flex: 1; */
  font-size: 12px;
  margin-right: 5px;
  text-decoration: line-through;
}
.discount {
  /* flex: 1; */
  position: relative;
  color: white;
  background-color: var(--color-high-text);
  border-radius: 9px;
  font-size: 13px;
  padding: 3px;
  top: -5px;
  left: 5px;
}
.info-other {
  margin-bottom: 10px;
  font-size: 12px;
  display: flex;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-other span {
  flex: 1;
  text-align: center;
}
.info-service {
  display: flex;
}
.info-service span {
  flex: 1;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>