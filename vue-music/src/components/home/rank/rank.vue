<template>
    <transition>
        <div class="rank">
            <div class="rank-header">
                <!-- <span class="back"> &#60; </span> -->
                <span class="back" @click="back">&#60;</span>
                <span class="text">排行榜</span>
                <img class="nowPlay" src="./ph.png" >
            </div>
            <scroll class="rank-content">
                <div class="wrapper">
                    <h1>云音乐官方榜</h1>
                    <ul v-for="item of rankListTop" :key="item.name" class="list-content">
                        <li>
                            <div>
                            <img :src="item.coverImgUrl" class="rank-img">
                            </div>
                            <ul class="song-list">
                                <li v-for="(song,index) in item.rank" :key="index">
                                    {{index+1}}.
                                    {{song.name}} - {{song.ar[0].name}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </scroll>
        </div>
    </transition>
</template>
<script>
import {getRank} from '../../../api/rank'
import Scroll from '../../../base/scroll/scroll'

const RankTopNumber = [0,1,2,3,4,22,23]
export default {
    name:'rank',
    data(){
        return {
            rankListTop:[]
        }
    },
    components:{
        Scroll
    },
    created(){
        this._getRank()
    },
    methods:{
        _getRank(){
            for (let i=0;i<RankTopNumber.length ; i++){
                getRank(RankTopNumber[i]).then(res=>{
                // console.log(res);
                let list = res.data.playlist
                list.rank = res.data.playlist.tracks.slice(0,3)
                this.rankListTop.push(list)
            })
            }
        },
        back(){
            this.$router.back() 
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../../common/stylus/variable"
// 切换动画
    // .v-enter-active,.v-leave-active
    //     opacity 0
    //     // transform translateX(100%)
    //     transition:all 1s;
    *
        margin 0
        padding 0

    .rank
        background-color white
    .rank-header
        position fixed
        top 0
        background-color $color-theme
        width 100%
        padding 0
        height 1.1rem
        color white
        z-index 99
        .nowPlay
            width:0.6rem;
            height:0.6rem;
            position: absolute;
            top:0.3rem;
            right:0.45rem;
        .text
            font-size 0.5rem
            position absolute
            top 50%
            transform translateY(-50%)
            left 41%    
        .back
            margin-left 0.2rem
            width 0.2rem    
            font-size 0.7rem    
    .rank-content
        margin-left 0.4rem
        margin-top 1.1rem
        height 27rem
        width 100%
        box-sizing border-box
        overflow hidden
        position relative
        .wrapper
            padding-top 0.3rem
            height 34rem
            width 100%
            overflow hidden
            position absolute
            top 0 
            left 0
        h1
            font-size 0.4rem
            font-weight bold
        .list-content
            position relative
            list-style none
            .rank-img 
                height 2.7rem
                width 2.7rem
                border-radius 0.2rem
                margin-top 0.3rem
            .song-list
                display inline-block
                list-style none
                font-size 0.3rem
                height 2.45rem
                position absolute
                top 0.5rem
                left 3rem
                line-height 0.7rem
                border-bottom 1px solid $color-border
                overflow hidden
                li
                    white-space nowrap
                    text-overflow ellipsis
                    overflow  hidden
</style>