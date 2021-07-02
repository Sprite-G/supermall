<template>
  <div>
    详情页{{id}}
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      id: null
    }
  },
  created(){
    // this.id = this.$route.params.id
    this.id = this.$route.query.id
    console.log(this.$route.query)
  }
}

</script>
<style scoped>
</style>