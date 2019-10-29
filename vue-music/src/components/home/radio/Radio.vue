<template>
  <div class="contentRadio">
    <scroll class="wrapper">
      <div class="radioContent">
        <!-- 轮播图模块 -->
        <div class="slider-wrapper">
          <!-- <div class="background-half"></div> -->
          <Slider class="slider"></Slider>
        </div>
        <!-- 分类模块 -->
        <div class="radio-classify">
          <div class="fm" style="margin:0">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>电台分类</p>
          </div>
          <router-link tag="div" to="/singer" class="fm">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>电台排行</p>
          </router-link>
          <div class="fm">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>付费精品</p>
          </div>
          <router-link to="/rank" tag="div" class="fm">
            <img src="./img/song-list.png" alt="" class="fm-img">
            <p>音乐课堂</p>
          </router-link>
        </div>
        <p class="radio-title">今日优选 <span style="font-size:0.7rem">></span></p>
        <!-- 今日优选 -->
        <div class="radioRecommend">
          <ul>
            <li class="radio-li" v-for="item of radioList" :key="item.id">
              <div class="radio-recommendContent">
                <img v-lazy="item.picUrl" alt="" class="radio-img">
                <div class="content-title">
                  <p style="font-size:0.4rem;font-weight:bold;margin-bottom:0.15rem">{{item.copywriter}}</p>
                  <p style="font-size:0.3rem;color:#7d7e7e">收听人数: {{item.subCount}}</p>
                  <p style="font-size:0.3rem;color:#7d7e7e">{{item.rcmdtext}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 精品推荐 -->
        <div class="perfectRecommend">
          <div class="perfectTitle">
            <p style="font-size:0.4rem;font-weight:bold">精品推荐</p>
            <p style="font-size:0.3rem;color:#a89d90">你值得拥有的优质内容</p>
          </div>
          <div class="perfectContent">
            <ul class="perfectListFather">
              <li class="perfectList" v-for="item of perfectList" :key="item.id">
                <div class="perfectRecommendContent">
                  <div class="perfectLogo">
                    <p style="font-size:0.3rem">付费精品</p>
                  </div>
                  <img v-lazy="item.picUrl" alt="" class="perfect-img">
                  <div class="content-title">
                    <p class="title-name">{{item.name}}</p>
                    <p class="title-price"><span style="color:red">&yen;</span>{{item.originalPrice}}</p>

                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="perfectBottom">
            <p>全部精品电台 <span style="color:#a89d90">></span></p>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
//导入轮播图模块
import Slider from '../../../base/slider/radioSlider'
//导入电台优选名单
import {getRadioList,getPerfectList} from '../../../api/radio'
//导入滚动模块
import Scroll from '../../../base/scroll/scroll'

export default {
  name:"radio",
  data(){
    return {
      radioList:[],
      perfectList:[]
    }
  },
  components:{
    Slider,Scroll
  },
  created(){
      this._getRadioList()
      this._getPerfectList()
  },
  methods:{
    _getRadioList(){
      getRadioList().then(res => {
        // console.log(res);
        this.radioList = res.data.djRadios.slice(0,4)
      })
    },
    _getPerfectList(){
      getPerfectList().then(res=>{
        this.perfectList = res.data.data.list.slice(0,3)
      })
    }
  }

}
</script>

<style lang="stylus" scoped>
@import "../../../common/stylus/variable"
  *
    margin 0
    padding 0
  .contentRadio
    position fixed
    width 100%
    top 2.7rem
    bottom 0
    z-index -999
  .wrapper 
    position absolute
    width 100%
    height 100%
    overflow hidden
    // margin-top 1.4rem
  .radioContent
    height 32.5rem
    overflow hidden
    position relative
    top -1rem
      .slider-wrapper
        width 100% 
        border-radius 0.1rem
        padding-top 0.1rem
    // 分类页css
    .radio-classify
      font-size 0.35rem
      display flex
      justify-content space-around
      width 100%
      height 2.5rem
      margin-top 0.3rem
      margin-left -0.1rem
      border-bottom 0.01rem solid #e2e3e4
      .fm
        width 1rem
        height 2rem
        display inline-block
        .fm-img
          width 1.4rem 
          height 1.4rem
          border-radius 50%
          background-color #e15b4a
        p 
          font-size 0.35rem
          width 2rem
          margin-top 0.23rem
          margin-left -0.27rem
    // 优选电台css
    .radio-title
      font-size 0.5rem
      font-weight bold
      text-align left
      margin-top 0.5rem 
      margin-left 0.3rem
    // 优先电台内容css
    .radioRecommend
      display flex
      justify-content space-around
      .radio-li
        list-style none
        width 100%
        margin 0.2rem
        margin-left 0.3rem
        text-align left
        .radio-recommendContent
          width 100%
          position relative
          .radio-img  
            width 30%
            height 30%
            border-radius 0.2rem
          .content-title
            width 100%
            position absolute
            top 10%
            left 33%
            line-height 0.7rem  
            padding-bottom 0.5rem
            border-bottom 1px solid #e2e3e4
          

    //精品推荐css
    .perfectRecommend
      background url(./img/background.png) repeat center
      color white
      margin-top 0.4rem
      padding-bottom 0.4rem
      .perfectTitle
        padding-top 0.3rem
        padding-bottom 0.4rem
      .perfectContent
        .perfectListFather
          display flex
          justify-content space-around
          .perfectList
            list-style none
            .perfectRecommendContent
              position relative
              .perfectLogo
                color:white
                position absolute 
                top 0
                left 0
                background-color $color-theme
                width 1.5rem
                height 0.5rem
                border-top-left-radius 0.15rem
                border-bottom-right-radius 0.15rem
                
              .perfect-img
                width 3rem
                height 3rem
                border-top-left-radius 0.15rem
                border-top-right-radius 0.15rem
              .content-title
                border-bottom-left-radius 0.15rem
                border-bottom-right-radius 0.15rem
                background-color white
                color black
                font-size 0.3rem
                width 3rem
                height 1.5rem
                text-align left
                font-family "苹方"
                padding 0.1rem
                position relative
                .title-name
                  line-height 0.4rem
                .title-price
                  position absolute
                  bottom 0.05rem
                  left 0.1rem                
      .perfectBottom
        border-radius 0.9rem
        border 1px solid white
        font-size 0.3rem
        margin 0 auto
        margin-top 0.5rem
        width 30%
        height 0.8rem
        line-height 0.8rem
        font-family "苹方"

            

</style>