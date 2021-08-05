<template>
  <div
    class='toast'
    v-show="isShow"
  >
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message = '添加至购物车', duration = 1000) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, duration)
    }
  }
}

</script>
<style scoped>
.toast {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 50%;
  left: 50%;
  color: white;
  padding: 5px, 8px;
  transform: translate(-50%, -50%);
  z-index: 99;
}
</style>