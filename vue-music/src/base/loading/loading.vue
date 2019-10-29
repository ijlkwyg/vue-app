//当页面未加载完成时，显示loading
<template>
    <div class="loading">
        <img src="./loading.gif" width="24px" height="24px">
        <p>{{title}}</p>
    </div>
</template>
<script>
export default {
    name:'loading',
    props:{
        title:{
            type:String,
            default:'正在载入...'
        }
    }
}
</script>

<style lang="stylus" scoped>
    .loading
        width 100%
        line-height 24px
        font-size 10px
        color white
</style>