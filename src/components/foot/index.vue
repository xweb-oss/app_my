

<template>
   <footer>
       <div v-for="(item,index) in foots" :key="index">
           <router-link :to="{name:item.name}">
               <i class="iconfont" v-html="item.icon"></i>
               <span>{{item.txt}}</span>
           </router-link>
       </div>
       <!-- <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
                <img slot="icon" src="@/assets/images/samll1.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="@/assets/images/samll2.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="@/assets/images/samll3.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="@/assets/images/samll4.png">
                我的
            </mt-tab-item>
        </mt-tabbar> -->
   </footer>
</template>


<script>

export default {
    data(){
        return{
            foots:[
                {txt:'首页',path:"/hemo/house",name:'house',icon:"&#xe604"},
                {txt:'购票',path:"/hemo/mall",name:'mall',icon:"&#xe654"},
                {txt:'视频',path:"/hemo/type",name:'type',icon:"&#xe602"},
                {txt:'我的',path:"/hemo/my",name:'my',icon:"&#xe642"},
            ]
        }
    }
}
</script>



