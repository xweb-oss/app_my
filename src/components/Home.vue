<template>
    <div class="app_layout">
        <app-head class="app_head"></app-head> 
        <div class="app_middle" :style="style">
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
            style:{height:'(100vh-48-48)px'}
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
        display: flex;
        flex-direction: column
    }
    .app_middle{
        margin-bottom:48px;
        margin-top: 48px;
    }
</style>
