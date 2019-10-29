<template>
    <div class="login" style="background-color:#f1f1f1">
        <div class="login-header">
            <span>帐号</span>
        </div>
        <div class="noLogin" v-if="$store.state.isLogin === false">
            <p>登录云音乐</p>   
            <p>手机电脑多端同步，尽享海量高品质音乐</p>
            <router-link to="/loginContent" tag="button" @click="changeLogin" class="loginButton">立即登录</router-link>
        </div>
        <div class="userMessage" v-if="$store.state.isLogin === true">
            这里是用户信息
        </div>
        <div class="message">
            <span class="iconfont icon-icon-test1"></span>
            <span class="messageText">我的消息</span>
        </div>
        <div class="timeout">
            <div class="menu">
                <span class="iconfont icon-icon-test3"></span>
                <span>我的歌单</span>
            </div>
            <div class="menu">
                <span class="iconfont icon-shijian"></span>
                <span>定时关闭</span>
            </div>
            <div class="menu">
                <span class="iconfont icon-bangzhu"></span>
                <span>帮助中心</span>
            </div>
            <div class="menu">
                <span class="iconfont icon-dianhua"></span>
                <span>电话</span>
            </div>
            <div class="menu">
                <span class="iconfont icon-icon-test"></span>
                <span>分享</span>
            </div>
        </div>
        <div class="isLogin" v-if="$store.state.isLogin === true">
            <button @click="quitLogin">退出登录</button>
        </div>
        <div class="footerBackg"></div>
    </div>
</template>

<script>
export default {
    name:'Login',
    methods:{
        changeLogin(){
            this.$store.commit("changeLogin")
        },
        quitLogin(){
            this.$store.commit("quitLogin")
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable"
    .login
        background #f1f1f1
        height 100%
        width 100%
    .login-header
        position fixed
        top 0
        background-color $color-theme
        width 100%
        height 1.1rem
        color white
        z-index 99
        span
            font-size 0.5rem
            position absolute
            top 50%
            transform translateY(-50%)
            left 45%
    .noLogin
        width 100%
        padding-top 1.4rem
        padding-bottom 0.6rem
        text-align center
        margin 0 auto
        background white
    
        p
            margin 1px
            font-size 0.35rem
            font-family '苹方'
        .loginButton
            margin-top 0.3rem
            width 95%
            height 1rem 
            font-size 0.4rem 
            background transparent
            border 1px solid $color-border
            border-radius 1rem

    .userMessage
        padding-top 1.4rem
        background white

    .message
        background white 
        font-size 0.4rem
        font-family '苹方'
        height 1rem
        margin-top 0.3rem
        line-height 1rem
        padding-left 0.3rem
        .messageText
            padding-left 0.1rem
    .timeout
        margin-top 0.3rem
        .menu
            background white 
            font-size 0.4rem
            font-family '苹方'
            height 1rem
            line-height 1rem
            padding-left 0.3rem  
    .isLogin
        margin-top 0.3rem
        background white 
        font-size 0.4rem
        font-family '苹方'
        height 1rem
        line-height 1rem
        button 
            background white
            border 1px solid $color-border
            width 100%
            color $color-theme
    .footerBackg
        height 0.3rem 
        width 100%
</style>