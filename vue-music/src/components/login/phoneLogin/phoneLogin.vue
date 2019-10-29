<template>
    <div>
        <!-- 手机号登录 -->
        <div class="rank-header">
            <span class="back" @click="back">&#60;</span>
            <span class="text">登录</span>
        </div>
        <div class="phonelogin-content">
            <div class="username">
                <img src="../img/username.png" alt="">
                <input type="number"  maxlength="11" placeholder="手机号" v-model="phone">
            </div>
            <div class="password">
                <img src="../img/password.png" alt="">
                <input type="number" maxlength="16" placeholder="密码" v-model="password">
                <!-- <button :disabled="isLogon" class='sendCaptcha' @click="_captcha()">{{sendCaptcha}}</button> -->
            </div>
            <button @click="login" :disabled="isLogon" class="login-button">登录</button>
        </div>
    </div>
</template>
<script>
import {captcha,logon,hasPassword} from '../../../api/login'
export default {
    name:'phoneLogin',
    data(){
        return {
            phone:'',
            password:'',
            // sendCaptcha:'发送验证码',
            // count:60
        }
    },
    methods:{
        back(){
            this.$router.back()
        },
        login(){
            captcha(this.phone).then(res=>{
                console.log(res);
            })
        }
    },    
    computed:{
        isLogon:function(){
            if(this.phone.length === 11){
                this.isSend = false
                return this.isSend
            }else{
                this.isSend = true
                return this.isSend
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "../../../common/stylus/variable"

    .rank-header
        position relative
        top 0
        background-color $color-theme
        width 100%
        padding 0
        height 1.1rem
        color white
        z-index 99
        .text
            font-size .5rem
            position absolute
            top 50%
            transform translateY(-50%)
            left 43%    
        .back
            margin-left .2rem
            width .2rem    
            font-size .7rem
    .phonelogin-content
        margin .5rem
        .username,.password
            border-bottom 1px solid $color-border
            input 
                font-size .4rem
                width 80%
                border none
            img 
                display inline
        .password
            .sendCaptcha
                position absolute
                right .5rem
                border none
                width 30%
                height .8rem
                background-color $color-theme
                font-size .4rem
                color white
                border-radius 1rem
                margin-top .07rem
        .login-button
            width 90%
            height 1rem
            background-color $color-theme
            margin-top .7rem
            margin-left .5rem
            border none 
            border-radius 1rem
            color white
            font-size .5rem
            font-family "苹方"
    
</style>