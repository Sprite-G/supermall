<template>
  <div
    class='bar-item'
    @click='itemClick'
  >
    <div v-if='!isActive'>
      <slot name='icon'></slot>
    </div>
    <div v-else>
      <slot name='icon-active'></slot>
    </div>
    <div :style=activeStyle>
      <slot name='text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },

  methods: {
    itemClick () {
      if (this.$route.path != this.path)
        this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}

</script>
<style scoped>
.bar-item {
  text-align: center;
  flex: 1;
  height: 49px;
}
.bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>