<template>
  <div class="content">
    <div class="footer row">
      <router-link to="/recommend" tag="div" class="col-md-3 col-sm-3">
        <span class="iconfont icon-bulb"></span>
        <p>发现</p>
      </router-link>
      <div class="col-md-3 col-sm-3">
        <span class="iconfont icon-customerservice"></span>
        <p>我的</p>
      </div>
      <div class="col-md-3 col-sm-3">
        <router-link to="/rank" class="iconfont icon-team" tag="span"></router-link>
        <p>排行榜</p>
      </div>
      <div class="col-md-3 col-sm-3">
          <router-link to="/login" class="iconfont icon-user" tag="span"></router-link>
          <p>帐号</p>
      </div>
    </div>
  </div>

  
</template>

<script>

export default {
  name: 'Footer',
  components:{

  }
}
</script>


<style lang="stylus" scoped>  
@import "../../common/stylus/variable"
  .footer
    color black
    background-color #f7f7f7
    width 100%
    height 1.4rem
    text-align center
    opacity 0.95
    margin-left 0.01rem
    z-index 99
    .col-md-3
      display inline-block
      width 25%
      height 100%
    p
      font-size 0.3rem
      line-height 0.3rem
    span
      font-size 0.6rem


</style>