<template>
    <div class="home">
        <Header class="header" ></Header>
        <div class="choose">
                <div @click="isShow"><router-link to="/recommend">个性推荐</router-link></div>
                <div @click="noShow"><router-link to="/radio" >主播电台</router-link></div>
        </div>
        <p class="Line" :class="[show ? 'active': 'active2']"></p>  
        <transition :name="RecommendOrRadio">
          <router-view class="content"></router-view>            
        </transition>
    </div>
</template>
<script>
import Radio from './radio/Radio'
import Recommend from './recommend/recommend'
import Header from "../header/Header"

export default {
    name:'Home',
    data(){
        return {
            show:true,
            noshow:false,
            RecommendOrRadio:''
        }
    },
    components:{
        Radio,Recommend,Header
    },
    mounted(){
        if(this.$router.history.current.path === '/radio'){
            this.show = false
        }
    },
    methods:{
        isShow(){
            if(this.show === false){
              this.show =! this.show;
            }
        },
        noShow(){
            if(this.show === true){
              this.show =! this.show;
            }
        },
    },
    watch: {
        '$route'(to, from) {
            if(to.meta.index > from.meta.index){
                this.RecommendOrRadio = 'slide-left';
                // console.log(this.RecommendOrRadio);
            }else{
                this.RecommendOrRadio = 'slide-right';
            }
        }
    }
}
</script>
<style scoped >
    *{
        margin:0;
        padding:0;
    }
    .header{
        /* position: relative;;
        top:-1rem; */
        height:1.15rem;
    }
    .home{
        height:36rem;
        width:100%;
        text-align: center;
        position:fixed;
        top:0;
        z-index:88;
    }
    .choose{
        /* position: relative;  */
        background:#c64c3e;
        height:1.4rem;
        /* top:-1.1rem */
    }
    .choose div{
        display: inline-block;
        margin-top:0.1rem
    }
    .choose a{
        margin:1rem;
        text-decoration: none;
        color:#ffffff;
        font-size:0.4rem;
    }
    .Line{
        background: #ffffff;
        height:0.03rem;
        width:1rem;
        position: fixed;

    }
    .active{
        top:2.2rem;
        right:6.3rem;
        transition: all 0.5s;
    }
    .active2{
        right:2.6rem;
        transition: all 0.5s;
        top:2.2rem;
    }
    .slide-left-enter-active,.slide-right-leave-active{
        transform: translateX(-100%);
        z-index:-1;
        transition:all 0.5s;
    }
    .slide-left-leave-active,.slide-right-enter-active{
        transition:all 0.5s;
        transform: translateX(100%);
        z-index:-1;
    }
    .content{
        position: absolute;
        top:1rem;
        z-index:999
    }
</style>