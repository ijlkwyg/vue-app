// 滚动插件
<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll"

export default {
    name:"scroll",
    props:{
        probeType:{
            type:Number,
            default:1
        },
        click:{
            type:Boolean,
            default:true 
        },
        data:{
            type:Array,
            default:null
        }
    },
    mounted(){
        setTimeout(()=>{
            this._initBScroll()
            // console.log(this.scroll);
        },20)
    },
    methods:{
        _initBScroll(){
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: this.click,
            })
        }
    },
    enable() {
        this.scroll && this.scroll.enable()
    },
    disable() {
        this.scroll && this.scroll.disable()
    },
    refresh() {
        this.scroll && this.scroll.refresh()
    },
    watch:{
        data(){
            setTimeout(() => {
                this.refresh()
            }, 20);
        }
    },
    componens:{
        BScroll
    },
}
</script>

<style lang="stylus">

</style>