<template>
    <div class="music-header">
        <div class="top">
            <a href="#" id="findMic"><img style="width:0.85rem;height:0.85rem" src="./img/music.png" alt=""></a>
            <a href="#">
                <img style="width:0.6rem;height:0.6rem" src="./img/ph.png" alt="" class="nowplay">
            </a>
        </div>
        <transition>
            <div class="seach">
                <input type="text" class="seach-content">
                <svg  style="width:0.4rem;height:0.4rem" t="1569145174240" class="icon seach-img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5873" width="200" height="200"><path d="M701.620174 701.668781c-65.011666 65.011666-151.432944 100.812033-243.339144 100.812033-91.889827 0-178.327478-35.799344-243.339144-100.812033-134.181025-134.149303-134.181025-352.48089 0-486.661915 65.011666-64.979944 151.449317-100.779288 243.339144-100.779288 91.9062 0 178.327478 35.799344 243.339144 100.779288C835.816548 349.187891 835.816548 567.519478 701.620174 701.668781L701.620174 701.668781zM671.256632 245.385756c-56.889685-56.873312-132.534526-88.180342-212.975603-88.180342-80.425727 0-156.085918 31.30703-212.95923 88.180342-117.376291 117.440759-117.376291 308.495096 0 425.88776 56.873312 56.905034 132.534526 88.228437 212.95923 88.228437 80.441077 0 156.085918-31.322379 212.975603-88.228437C788.61655 553.880853 788.61655 362.826516 671.256632 245.385756L671.256632 245.385756zM903.402853 903.45146c-4.189416 4.252861-9.705036 6.347568-15.173584 6.347568-5.531993 0-11.000542-2.094708-15.22168-6.347568L765.608533 796.052404c-8.394181-8.425903-8.394181-22.032806 0-30.426987 8.362458-8.394181 21.969361-8.394181 30.363542 0L903.402853 873.087918C911.828756 881.514845 911.828756 895.105375 903.402853 903.45146L903.402853 903.45146z" p-id="5874" fill="#ffffff"></path></svg>            
                <p class="seach-defalut">{{defaultSeach}}</p>
            </div>
        </transition>
    </div>
</template>
<script>
import {getDefaultSeach} from '../../api/seach'

export default {
    data(){
        return {
            defaultSeach:''
        }
    },
    methods:{
        _getDefaultSeach(){
            getDefaultSeach().then((res)=>{
                // console.log(res);
                this.defaultSeach = res.data.data.showKeyword
            })
        }
    },
    created(){
        this._getDefaultSeach()
    }
    
}
</script>
<style lang="stylus">
    *
        margin 0 
        padding 0 
    .music-header
        background-color #c64c3e
        height 1.1rem
        width 100%
        max-width 100%
        position relative
        #findMic
            position absolute 
            top .1rem 
            left .3rem
        .nowplay
            width 21px
            height 21px
            position absolute 
            top .4rem
            right .4rem
            z-index 99
    .seach
        .seach-content
            position absolute
            top .3rem
            left 1.5rem 
            width 7rem
            height .7rem
            border-radius 20px
            background-color #cf6a60
            border none
        .seach-img 
            width 15px
            height 15px
            position absolute 
            top 0.45rem
            left 3.4rem
        .seach-defalut
            position absolute
            top .4rem
            left 3.9rem
            color white 
            font-size .3rem
            opacity .7
</style>