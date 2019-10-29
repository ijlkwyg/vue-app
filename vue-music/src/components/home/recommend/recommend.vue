<template>
  <div class="recommend">
    <scroll class="recommend-content" >
      <div class="wrapper" >
        <!-- 轮播图模块 -->
        <div class="slider-wrapper">
          <!-- <div class="background-half"></div> -->
          <Slider class="slider"></Slider>
        </div>
        <!-- 分类模块 -->
        <div class="recommend-classify">
          <div class="fm" style="margin:0">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>私人FM</p>
          </div>
          <router-link tag="div" to="/singer" class="fm">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>每日推荐</p>
          </router-link>
          <div class="fm">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>歌单</p>
          </div>
          <router-link to="/rank" tag="div" class="fm">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>排行榜</p>
          </router-link>
        </div>
        <!-- 推荐歌单模块 -->
        <div class="recomend-list">
            <p class="list-title">推荐歌单 <span>></span></p>
            <ul>
              <li @click="seachItem(item)" class="item" v-for="item of recommendList" :key="item.id">
                <div class="icon">
                  <img v-lazy="item.picUrl" alt="">
                  <p class="count">
                    <!-- <i></i> -->
                    <img src="./img/mic.png" alt="">
                    <i v-if="Math.floor(item.playCount/10000)<=10000">
                      {{Math.floor(item.playCount/10000)}}万
                    </i>
                    <i v-if="Math.floor(item.playCount/10000)>10000">
                      {{(item.playCount/100000000).toFixed(1)}}亿
                    </i>
                  </p>
                  <div class="text">
                    <p class="name">{{item.name}}</p>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <div class="recomend-list" style="margin-top:4rem">
            <p class="list-title" style="margin-top:11rem">最新音乐 <span>></span></p>
            <ul>
              <li class="item" v-for="item of recommendList" :key="item.id">
                <div class="icon">
                  <img v-lazy="item.picUrl" alt="">
                  <p class="count">
                    <!-- <i></i> -->
                    <img src="./img/mic.png" alt="">
                    <i v-if="Math.floor(item.playCount/10000)<=10000">
                      {{Math.floor(item.playCount/10000)}}万
                    </i>
                    <i v-if="Math.floor(item.playCount/10000)>10000">
                      {{(item.playCount/100000000).toFixed(1)}}亿
                    </i>
                  </p>
                  <div class="text">
                    <p class="name">{{item.name}}</p>
                  </div>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <div class="loading-content" v-if="!recommendList.length">
        <loading class="loading-png"></loading>
      </div>
      <router-view></router-view>
    </scroll>
  </div>
</template>

<script>
//导入轮播图模块
import Slider from '../../../base/slider/slider'
//导入歌单
import {getRecommendList} from '../../../api/recommend'
//导入正确的res.status
import { ERR_OK } from '../../../common/js/config';
//导入滚动模块
import Scroll from '../../../base/scroll/scroll'
//导入Loading模块
import loading from '../../../base/loading/loading'
//导入歌单子路由
import RecommendDetail from './recommend-detail/recommend-detail'
export default {
  name: 'Recommend',
  data(){
    return {
      recommendList:[]
    }
  },
  components:{
    Slider,Scroll,loading,RecommendDetail
  },
  created(){
    this._getRecommendList()
  },
  methods:{
    _getRecommendList(){
        getRecommendList().then(res =>{
          if(res.status === ERR_OK){
            this.recommendList = res.data.result.slice(0,6)
          }
        })
    },
    seachItem(item){
      this.$store.state.recommend.id = item.id
      this.$router.push({
        path:`/recommend-detail/${item.id}`
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../../common/stylus/variable"
.recommend
    position fixed
    width 100%
    top 1rem
    bottom 0
    z-index -999

    .recommend-content
      position absolute
      width 100%
      height 100%
      overflow hidden
      margin-top 1.4rem
      .wrapper
        height 32rem

      .slider-wrapper
        width 100% 
        border-radius 0.1rem
        padding-top 0.1rem


      .recommend-classify
        width 100%
        height 2rem
        position relative 
        top 0.4rem
        left -0.2rem
        font-size 0.35rem

        .fm
          height 2rem
          width 1rem
          display inline-block
          margin-left 1.6rem

          .fm-img
            background-color #e15b4a
            border-radius 50%
            height 1.4rem
            width 1.4rem
            display inline-block
          
          p 
            width 2rem
            margin-top 0.2rem
            margin-left -0.25rem

      .recomend-list
        width 100%
        height 7rem

        .list-title
          font-size 0.5rem
          font-weight bold
          height 2rem
          position absolute
          left 0.2rem
          top 8.1rem


        .item
          display inline-block
          position relative
          box-sizing border-box
          width 33%
          top 2rem
          padding 0 1%
          height 100%

          .icon
            display inline-block
            width 100%
            margin-bottom 0.1rem

            img
              width 100%
              height 100%
              border-radius 0.1rem
              
            .count
              position absolute
              top 0.15rem
              font-size 0.2rem
              color $color-text-l
              right 0.25rem
              
              img
                height 0.3rem
                width 0.3rem
                display inline-block

            .text 
              float left
              height 0.9rem
              line-height 0.5rem
              text-align left 
              margin-bottom 0.3rem
              font-size 0.3rem
              overflow hidden
    .loading-content
      position relative
      width 100%
      height 100%
      // top 50%
      // transform translateY(-50%)        
      background-color black
      opacity 0.3
      .loading-png
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)




</style>
