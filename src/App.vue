<template>
  <div id="app">
    <!-- 使用keep-alive使页面不需要重复加载,可指定排除项exclude -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <mainTabbar></mainTabbar>
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

  },
  computed: {

  }
}

</script>

<style>
@import 'assets/css/base.css';
</style>
