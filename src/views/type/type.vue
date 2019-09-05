<template>
    <BScroll>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="index+1" v-for="(item,index) in List" :key="index" icon="">{{item.title}}</mt-tab-item>
        </mt-navbar>
        <div>
            <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
        </div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="index+1"  v-for="(item,index) in cellList" :key="index">
                <mt-cell v-for="(n,i) in 10" :key="i" :title="item.cellcontent + n" />
            </mt-tab-container-item>
        </mt-tab-container>

        <div>全局定义的过滤器一{{message | capitalize}}</div><br />
        <div :id="message | capitalize">相当于给div添加了一个 id属性 等于Hello</div><br />
        <p style="color:bule">全局过滤器和局部过滤器如果同名的话，会优先选择局部过滤器，</p><br />
        <div>局部过滤器{{result | getDate}}</div>&nbsp;
        <div>-------{{result | secondToDate}}</div>&nbsp;
        <div>过滤器可以串联：{{result | getDate | secondToDate}}</div><br />

        <mt-button size="large" type="primary" @click.native="handleClick('/type_detail')">点击进入详情</mt-button>
    </BScroll>
</template>
<script>
import {getDate,secondToDate} from '@/util/filter'
import BScroll from "@/components/scroll/scroll.vue"
export default {
    components:{BScroll},
    data(){
        return{
            result:18784952000,
            message:'hello',
            List:[
                {title:'选择一'},
                {title:'选择二'},
                {title:'选择三'},      
            ],
            cellList:[
                {cellcontent:"选项"},
                {cellcontent:"测试"},
                {cellcontent:"内容"},
            ],
            selected:1,
        }
    },
    methods:{
        // 点击跳到详情页面 ，。实现scroll效果
        handleClick(path){
            this.$router.push(path)
        }
    },
    watch:{
        // 监听selected的变化
        selected:function(val,oldval){
            console.log(val)
            console.log(oldval)
        }
    },
    filters:{
       getDate,
       secondToDate
    }
}
</script>
<style scoped>
    .mint-navbar{
        margin-bottom:2px;
    }
    .mint-cell{
        min-height:47px
    }
</style>
