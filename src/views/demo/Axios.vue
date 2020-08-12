<template>
  <div id="axios">
    <h2>Axios</h2>
  </div>
</template>

<script>
// 局部启用
import '../../mock/demo/axios'

export default {
  name: "Axios",
  created() {
    this.$axios.post('/mock/demo/axios',{
      t: new Date().getTime()
    }).then((resp) => {
      console.log(resp)
    }).catch((resp) => {
      console.error(resp)
    })
  }
}
</script>

<style lang="scss">

</style>

<style scoped>

</style>
