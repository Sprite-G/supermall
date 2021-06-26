<template>
  <div class='tab-control'>
    <div
      v-for='(item,index) in titles'
      :key='index'
      class='tab-control-item'
      :class="{active:index === currentIndex}"
      @click='click(index)'
    >
      <span>{{item}}</span>
    </div>
    <!-- <span
      v-for='(item,index) in titles'
      :key='index'
    >
      {{item}}
    </span> -->
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    click (index) {
      this.currentIndex = index
    }
  }
}

</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
/* .tab-control span {
  flex: 1;
} */
.tab-control-item span{
  padding: 5px;
}
.active {
  color: red;
}
.active span{
  border-bottom: 3px solid red;
}
</style>