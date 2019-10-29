<template>
    <div>
        <!-- 手机号注册 -->
        <div class="phoneCaptcha">
            <div class="rank-header" >
                <span class="back" @click="back">&#60;</span>
                <span class="text">注册</span>
            </div>
            <div class="phonelogin-content">
                <div class="username">
                    <img src="../img/username.png" alt="">
                    <input type="number"  maxlength="11" placeholder="手机号" v-model="phone">
                </div>
                <div class="password">
                    <img src="../img/password.png" alt="">
                    <input type="number" maxlength="16" placeholder="密码" v-model="password">
                </div>
                <div class="captcha">
                    <img src="../img/password.png" alt="">
                    <input type="number" maxlength="4" placeholder="验证码" v-model="captcha">
                    <button :disabled="isLogon" class='sendCaptcha' @click="_captcha()">{{sendCaptcha}}</button>
                </div>
                <button @click="_logon()" class="login-button" :disabled="isLogon">注册</button>
            </div>
        </div>
        <!-- 已注册弹窗 -->
        <div class="isLogoned" v-if="isLogoned">
            <p>账户已存在,请直接登录</p>
        </div>
        <!-- 验证码界面
        <div class="isSend" v-if="isSend">
            <div class="isSend-header">
                <span class="isSend-back" @click="back">&#60;</span>
                <span class="isSend-text">手机号验证</span>
            </div>
            <div class="isSend-content">
                <div class="isSendContent">
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <p>你的手机号:+86 {{captchaPhone}}</p>
                    <p>你会收到一条带有验证码的短信，请输入验证码</p>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import {captcha,logon,hasPassword} from '../../../api/login'
export default {
    name:'phoneCaptcha',
    data(){
        return {
            phone:'',
            captcha:'',
            sendCaptcha:'发送验证码',
            timer:null,
            count:60,
            isSend:false,
            hasPassword:false,
            isLogoned:false,
            password:''
            // isSend:true,
            // Captchaphone:''
        }
    },
    methods:{
        back(){
            this.$router.back() 
        },
        _captcha(){
            // console.log(this.phone.length);
            hasPassword(this.phone).then(res=>{
                console.log(res);
                this.hasPassword = res.data.hasPassword
                if(this.hasPassword === false){
                    this.timer = setInterval(()=>{
                        this.count--
                        this.sendCaptcha = `${this.count}s`
                        if(this.count == 0){
                            this.count = 60 
                            this.sendCaptcha = `发送验证码`                    
                            clearInterval(this.timer)
                        }
                    },1000)
                    captcha(this.phone).then(res,err=>{
                        if(!err){
                            console.log(res);
                        }
                    })
                }else{
                    this.isLogoned = true 
                    setTimeout(()=>{
                        this.isLogoned = false
                    },2000)
                }
            })
        },
        _logon(){
            if(this.isSend === true){
                logon(this.phone,this.captcha,this.password).then(res =>{
                    this.$router.push('/loginContent')
                })
            }
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
            font-size 0.5rem
            position absolute
            top 50%
            transform translateY(-50%)
            left 43%    
        .back
            margin-left 0.2rem
            width 0.2rem    
            font-size 0.7rem   
    .phonelogin-content
        margin .5rem
        .username,.captcha,.password
            border-bottom 1px solid $color-border
            input 
                font-size .4rem
                width 80%
                border none
            img 
                display inline
        .captcha
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
    .isSend-header
        position fixed
        top 0
        background-color $color-theme
        width 100%
        padding 0
        height 1.1rem
        color white
        z-index 99
        .isSend-text
            font-size 0.5rem
            position absolute
            top 50%
            transform translateY(-50%)
            left 37%    
        .isSend-back
            margin-left 0.2rem
            width 0.2rem    
            font-size 0.7rem 
    .isLogoned
        background-color transparent
        width 10rem
        height 20rem
        position absolute
        top 0
        p
            width 6rem
            height 1.5rem
            color white 
            background-color black 
            opacity .5
            font-size .45rem
            font-family '苹方'
            position relative
            top 30%
            transform translateX(35%) 
            line-height 1.5rem
            text-align center  
            border-radius .5rem     
</style>