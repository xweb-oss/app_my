<template>
    <div class="app_layout">
        <app-head class="app_head"></app-head> 
        <!-- <div class="app_middle" :style="style"> -->
        <div class="app_middle">
            <router-view></router-view>
        </div>
        <app-foot class="app_foot"/>
    </div>
</template>
<script>
import Foot from  '@/components/foot/index.vue'
import Head from  '@/components/head/index.vue'
export default {
    data(){
        return{
            // style:{height:'(100vh-48-48)px'}
        }
    },
    components:{
        'app-head':Head,
        'app-foot':Foot
    }
}
</script>
<style>
.app_layout{
    height:100%;
}
    .app_head{
        height:48px;
    }
    .app_middle{
        height:calc(100% - 96px);   
        /* 减号前后需要有空格 不然不起效果*/
        overflow: auto;
    }
</style>
