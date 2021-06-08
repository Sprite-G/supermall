<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
    <button @click='test'>btn</button>
  </div>
</template>

<script>
import mainTabbar from './components/content/mainTabbar'
export default {
  name: 'App',
  components: {
    mainTabbar
  },
  methods: {
    test () {
      console.log(this.$route)
    }
  },
  computed: {

  }
}

</script>

<style>
@import 'assets/css/base.css';
</style>
