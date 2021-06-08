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
    <div>
      <slot name='text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barItem',
  props: {
  },
  methods: {
    itemClick () {

    }
  },
  computed: {
    isActive () {
      return true
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