<template>
  <b-scroll>
    <mt-header
      title="标题过长会隐藏后面的内容啊哈哈哈哈"
      fixed
    >
      <router-link
        to="home/type"
        slot="left"
      >
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- /type_common -->
    <mt-cell
      v-for="entr in entrList"
      :key="entr.id"
      :title="entr.title"
      is-link
      :to="`${entr.link}`"
    >
      <!-- <P>{{entr.title}}</P> -->
      <!-- <img :src="`../../assets/images/${entr.icon}.png`" width="24" height="24" style="float:right">  在vue中使用本地照片必须用require-->
      <img
        :src="entr.icon"
        width="24"
        height="24"
        style="float:right"
      >
    </mt-cell>
  </b-scroll>
</template>
<script>
import BScroll from 'better-scroll';

import bScroll from "@/components/scroll/scroll.vue";
import testImg from '../../assets/images/samll1.png'



import { list } from '@/util/testAsync'


const entrList = [
    {id:"1",title:"演员",icon:testImg,address:"242078437",link:'/type_common'},
    {id:"2",title:"认真的雪",icon:'samll2',address:"7356091",link:'/type_common'},
    {id:"3",title:"丑八怪",icon:testImg,address:"87967607",link:'/type_common'},
    {id:"4",title:"你还要我怎样",icon:'samll4',address:"00575177",link:'/type_common'},
    {id:"5",title:"绅士",icon:'samll5',address:"241838066",link:'/scorll_test'},
    {id:"6",title:"动物世界",icon:'samll2',address:"241838067",link:'/scorll_img'},
    {id:"7",title:"木偶人",icon:'samll5',address:"341898666",link:'/scorll_img'},
    {id:"8",title:"天份",icon:'samll1',address:"610722309",address:"241838356",link:'/better-scroll'},
    {id:"9",title:"哑巴",icon:'samll3',address:"591310911",link:'/scorll_img'},
    {id:"10",title:"刚刚好",icon:'logo',link:'/scorll_img'},
    {id:"11",title:"暧昧",icon:'samll4'},
    {id:"12",title:"我好想在那见过你",icon:'samll4'},
    {id:"13",title:"意外",icon:'samll2'},
    {id:"14",title:"狐狸",icon:'samll5'},
    {id:"15",title:"像风一样",icon:'samll3'},
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
