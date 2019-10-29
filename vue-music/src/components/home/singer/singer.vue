<template>
    <div class="singer">
        <div class="singer-header">
            <!-- <span class="back"> &#60; </span> -->
            <router-link to="/" tag="span" class="back">&#60;</router-link>
            <span class="text">每日推荐</span>
            <img class="nowPlay" src="./ph.png" >
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import "../../../common/stylus/variable"

    .singer-header
        width 100%
        height 1.1rem
        background-color $color-theme
        text-align center
        .back
            color white
            position absolute
            left 5px
            font-size 0.7rem
        .text
            color white
            font-size 18px        
        .nowPlay
            width:21px;
            height:21px;
            position: absolute;
            top:10px;
            right:15px;
</style>