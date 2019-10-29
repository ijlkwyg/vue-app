<template>
    <transition>
        <div class="muscilist" >
            <div class="listheader">
                <span class="back" @click="back">&#60;</span>
                <span class="text">歌单</span>
                <img class="nowPlay" src="../../rank/ph.png" >
            </div>
            <Scroll class="listContent" v-if="showList">
                <div class="wrap">
                    <!-- 头部 -->
                    <div class="contentHeader" :style="bgStyle" >
                        <div class="bg"></div>
                        <div class="contentHeaderImg">
                            <img :src="musiclist.coverImgUrl" alt="" class="contentHeader-img">
                        </div>
                        <div class="contentHeader-text">
                            <p>{{musiclist.name}}</p>
                            <img :src="userImg" alt="">
                            <span>{{userName}}</span>
                        </div>
                        <div class="contentHeader-menu">
                            <button>
                                <span class="iconfont icon-xiaoxizhongxin"></span>
                            </button>
                            <button>
                                <span class="iconfont icon-icon-test"></span>
                            </button>
                            <button>
                                <span class="iconfont icon-bulb"></span>
                            </button>
                            <button>
                                <span class="iconfont icon-bangzhu"></span>
                            </button>
                        </div>

                    </div>
                    <!-- 下方列表 -->
                    <div class="songlist">
                        <ul>
                            <li class="songlistContent" v-for="(item,index) of songlist" :key="index">
                                <span class="listNum">{{index+1}}</span> 
                                <div class="listContent">
                                    <span class="listTitle">{{item.al.name}}</span>
                                    <span class="listAuthor">{{item.ar[0].name}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Scroll>
            <div class="loading-content" v-if="!showList">
                <loading class="loading-png"></loading>
            </div>

        </div>
    </transition>
</template>
<script>
import {getRecommendDetail} from '../../../../api/recommend'
//导入Loading模块
import loading from '../../../../base/loading/loading'
//导入滚动模块
import Scroll from '../../../../base/scroll/scroll'
export default {
    data(){
        return {
            musiclist:{},
            showList:false,
            bgImg:'',
            userImg:'',
            userName:'',
            songlist:{},
            count:1,
            addNum:-1,
        }
    },
    methods:{
        _getRecommendDetail(){
            getRecommendDetail(this.$store.state.recommend.id).then(res=>{
                if(this.$store.state.recommend.id != null){
                    if(res.status === 200){
                        this.musiclist = res.data.playlist
                        this.bgImg = this.musiclist.creator.backgroundUrl
                        this.userImg = this.musiclist.creator.avatarUrl
                        this.userName = this.musiclist.creator.nickname
                        this.songlist = this.musiclist.tracks
                    }
                }
            })
        },
        back(){
            this.$router.back() 
        }
    },
    computed:{
        bgStyle(){
            return `background-image:url(${this.bgImg})`
        }
    },
    created(){  
        this._getRecommendDetail()
        if(this.musiclist !== null  ){
            this.showList = true
            // console.log(this.muscilist);
        }
    },
    components:{
        loading,Scroll
    }
    // beforeRouteEnter(to, from, next){
    //     this.$store.state.recommend.list != null
    //     next()
    // },
    // beforeRouteLeave(to, from, next){
    //     this.$store.state.recommend.list = null
    //     next()
    // },
}
</script>
<style scoped lang="stylus">
@import "../../../../common/stylus/variable"
    .muscilist
        position fixed
        top 0
        left 0 
        bottom 0 
        right 0 
        height 20rem
        background #f7f7f7
        .listheader
            background-color $color-theme
            width 100%
            height 1.1rem
            color white
            z-index 99
        .nowPlay
            width 0.6rem
            height 0.6rem
            position  absolute
            top 0.3rem
            right 0.45rem
        .text
            font-size 0.5rem
            position absolute
            top 0.5rem
            transform translateY(-50%)
            left 41%    
        .back
            margin-left 0.2rem
            width 0.2rem
            font-size 0.7rem
        .listContent
            position absolute 
            top 0
            left 0
            width 100%
            height 100%
            overflow hidden
            z-index -1
            .wrap
                padding-bottom 3rem
                .contentHeader
                    // border 1px solid red
                    height 7.1rem
                    .bg
                        position absolute
                        top 0 
                        left 0
                        background-color #93a2ae
                        width 100%
                        height 7.1rem
                        opacity 0.8
                    .contentHeaderImg
                        .contentHeader-img
                            position absolute 
                            top 1.6rem 
                            left 0.3rem
                            width 3.5rem 
                            height 3.5rem 
                    .contentHeader-text
                        p   
                            position absolute 
                            top 2.1rem 
                            left 4.1rem
                            font-size 0.4rem
                            width 5rem 
                            height 1rem
                            font-weight bold
                            color white 
                            font-family '苹方'
                        img 
                            position absolute 
                            top 3.6rem 
                            left 4.1rem 
                            width 0.5rem 
                            height 0.5rem 
                            border-radius 50%
                        span 
                            position absolute 
                            top 3.65rem 
                            left 4.8rem 
                            font-family '苹方'
                            color #f7f7f7
                            font-size 0.3rem
                    .contentHeader-menu
                        position absolute 
                        top 5.1rem
                        width 100%
                        display flex
                        justify-content space-around
                        button 
                            width 5rem
                            height 2rem
                            background-color transparent
                            border none 
                            color white 
                            span 
                                font-size 0.6rem
            .songlist
                .songlistContent
                    position relative
                    list-style none
                    font-size 0.4rem
                    font-family '苹方'
                    height 1.3rem
                    width 100%
                    line-height 1.3rem

                    .listNum
                        margin 0.3rem
                        color #9e9e9f
                    .listContent
                        position absolute
                        left 1rem     
                        top -0.2rem 
                        display inline
                        margin-bottom 0.3rem
                        border-bottom 1px solid $color-border
                        width 100% 
                        height 1.5rem
                        font-weight bold
                        .listTitle,.listAuthor
                            display: -webkit-box;
                            width 60%
                            overflow hidden
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1; 
                            -webkit-box-orient: vertical;
                        .listAuthor
                            position absolute
                            font-size 0.2rem
                            top 0.5rem
                            color #a5a5a6
                                          

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
	.v-enter-active,.v-leave-active
		transition: all 0.5s
	.v-enter,.v-leave-to
		transform: translate3d(50%,0,0)
		opacity: 0

</style>