<template>
  <div id="app">
    <router-view/>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer"
export default {
  name: 'App',
  components:{
    Footer
  },
}
</script>

<style scoped lang="stylus">
  .footer
    position fixed
    bottom 0
</style>
