<template>
    <div class="wrap">
        <div class="loginHeader">
            <span class="back" @click="back">X</span>
            <span class="headerContent">登录</span>
        </div>
        <div class="loginbg"></div>
        <div class="loginContent">
            <router-link to="/phoneLogin" tag="button" class="phoneLogin">手机号登录</router-link>
            <router-link to="/phoneCaptcha" tag="button" class="phoneCaptcha">注册</router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"loginContent",
    methods:{
        back(){
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../../common/stylus/variable"
    .wrap 
        background-color #faf5f4
        height 20rem
        .loginbg
            background-image url(./img/loginbg.jpg)
            background-size 100%
            width 100%  
            height 7rem
        .loginHeader
            background-color transparent
            position fixed
            font-family '苹方'
            .back
                color #a9a8a8
                margin-left .3rem
            .headerContent
                position relative 
                top 0 
                left 3.5rem
                font-size .5rem
        .loginContent
            font-size 0.4rem
            font-family '苹方'
            height 1rem
            line-height 1rem
            button
                margin-top .5rem
                margin-left 1rem
                background white
                border 1px solid $color-theme
                border-radius .5rem
                width 80%
                color $color-theme
                background-color transparent
</style>