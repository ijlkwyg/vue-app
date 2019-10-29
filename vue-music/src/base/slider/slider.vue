// RecommendBanner-Slider
<template>
  <div class="slider">
    <swiper :options="swiperOption" ref="mySwiper" v-if="bannerList.length">
      <!-- slides -->
      <swiper-slide v-for="item of bannerList" :key="item.id">
        <img :src="item.imageUrl" alt="" class="slider-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {getBanner} from "../../api/recommend"
  import {ERR_OK} from "../../common/js/config";

  export default {
    name: "slider",
    data() {
      return {
        bannerList: [],
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    created() {
      this._getBanner()
    },
    methods: {
      _getBanner() {
        getBanner().then((res) => {
          if (res.status === ERR_OK) {
            this.bannerList = res.data.banners.slice(4)
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable"
  .slider >>> .swiper-pagination-bullet
    background-color $color-background
    opacity 0.8
  .slider >>> .swiper-pagination-bullet-active
    width 8px
    border-radius 5px 
    background-color $color-theme

  .slider
    width:9.8rem;
    height:5rem;
    border-radius 5px
    margin 3px
    // margin-top 20px

    .slider-img
      width:9.8rem;
      height:5rem;
      border-radius 5px
</style>
