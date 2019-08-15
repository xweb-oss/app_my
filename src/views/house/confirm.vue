<template>
    <div class="alt" v-if='isshowe'>
        <p>发起对话</p>
        <p>扫一扫</p>
        <p>添加朋友</p>
        <p>搜索</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isshowe:false
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .alt{
        position:fixed;
        right:0px;
        width:130px;
        background: #123456;
        z-index:100;
    }
    p{
        height:30px;
        font-size:16px;
        margin-left:10px;
        line-height: 30px;
        color:#fff;
    }
</style>
