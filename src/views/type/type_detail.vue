<template>
    <b-scroll>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈" fixed>
            <router-link to="home/type" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
       <mt-cell v-for="entr in entrList" :key="entr.id" :title="entr.title" is-link :to="{path:'/type_common',query:{tit:entr.title,ads:entr.address}}">
            <img :src="entr.rc" width="24" height="24" style="float:right">
       </mt-cell>
    </b-scroll>
</template>
<script>
import BScroll from 'better-scroll';

import bScroll from "@/components/scroll/scroll.vue";
import samll1 from '@/assets/images/samll1.png'

import { list } from '@/util/testAsync'
// 照片而言。不能使用  @/
const entrList = [
    {id:"1",title:"演员",rc:samll1,address:"242078437"},
    {id:"2",title:"认真的雪",rc:'../../assets/images/samll2.png',address:"7356091"},
    {id:"3",title:"丑八怪",rc:'assets/images/samll3.png',address:"87967607"},
    {id:"4",title:"你还要我怎样",rc:'assets/images/samll4.png',address:"00575177"},
    {id:"5",title:"绅士",rc:'assets/images/samll5.png',address:"241838066"},
    {id:"6",title:"动物世界",rc:'assets/images/samll5.png',address:"241838067"},
    {id:"7",title:"木偶人",rc:'assets/images/samll5.png',address:"341898666"},
    {id:"8",title:"天份",rc:samll1,address:"610722309",address:"241838356"},
    {id:"9",title:"哑巴",rc:'assets/images/samll5.png',address:"591310911"},
    {id:"10",title:"刚刚好",rc:'assets/images/samll5.png'},
    {id:"11",title:"暧昧",rc:'assets/images/samll5.png'},
    {id:"12",title:"我好想在那见过你",rc:samll1},
    {id:"13",title:"意外",rc:'assets/images/samll5.png'},
    {id:"14",title:"狐狸",rc:'assets/images/samll5.png'},
    {id:"15",title:"像风一样",rc:'assets/images/samll5.png'},
]
export default {
    components:{bScroll},
    data(){
        return{
            entrList:entrList
        }
    },
    methods:{
     
        async getList(){
            const res = list();
            console.log(res)
        },
        // 函数的自执行  ，在vue中这样写会报错，需要外面套一个函数，
        // (async function() {
        //     console.log(1);     ----第1个执行
        //     await new Promise(resolve => {
        //         "use strict";
        //         setTimeout(() => {
        //         console.log(2);    ----第二个执行
        //         resolve();
        //         }, 1000);
        //     });
        //     console.log(3);     ----第三个执行
        // }())
        // 而在没有加 new promise 的时候执行顺序是 1 3 2.
    },
    async created(){
        // 最先输出3
        console.log(3)   // -----1
        await setTimeout(()=>{
            // 1输出的时间依赖于 定时间隔
            console.log(1)     //   ---5
        },100)
        // 5的输出顺序也不是在1后面
        console.log(5)         //  ----3
    },

    async mounted(){
         this.getList()    // async await 测试

        // 其次输出4
        console.log(4)      // ----2
        await setTimeout(()=>{
            // 2输出的时间依赖于 定时间隔
            console.log(2)    // --- 6 
        },100)
        // 6的输出顺序也不是在2后面
        console.log(6)           // ----4
    } 


  

}
</script>
