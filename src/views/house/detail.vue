<template>
    <div>
        <mt-header :title="del_tit">
            <router-link to="/home/house" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="handBoxfn" v-click-outside="onClickOutside"></mt-button>
        </mt-header>
        <alt-confirm ref="conChilder"></alt-confirm>
         <!-- @click="doWhat(entry.name, entry.path)" -->

        <mt-cell class="entry-item" v-for="entry in entryList" :key="entry.name" :title="entry.title"  is-link :to="{name:'menu_detail',query:{tit:entry.title}}">
        </mt-cell>
  
        <mt-button size="large" @click.native="handleClick" type="primary">点击购买</mt-button>
        <m-popup ref="pop"></m-popup>
    </div>
</template>
<script>
import altConfirm from "./confirm.vue";
import mPopup from "./popup.vue";
export default {
    components:{
        altConfirm,
        mPopup,
    },
    data(){
        return{
             entryList: [
                {
             
                title: '资金明细',
             
                icon: 'file-invoice-dollar',
                color: '#efc944',
                },
                {
            
                title: '提现',
           
                icon: 'hand-holding-usd',
                color: '#6eceee',
                },
                {
             
                title: '充值',
           
                icon: 'coins',
                color: '#f89f69',
                },
                {
             
                title: '投注记录',
             
                icon: 'list-ol',
                color: '#98ca69',
                },
                {
              
                title: '优惠活动',
              
                icon: 'ad',
                color: '#ad58e9',
                },
                {
              
                title: '安全中心',
               
                icon: 'unlock',
                color: '#f15b6c',
                },
                {
               
                title: '盈亏报表',
           
                icon: 'chart-line',
                color: '#efc944',
                },
            ],
             del_tit:'',
        }
    },
    methods:{
           // 头部更多的点击事件
        handBoxfn(){
            // 子组件想父组件传值  ,第一个参数是父组件的函数名
            // this.$emit("")
            if(this.$refs.conChilder.isshowe==false){
                 this.$refs.conChilder.isshowe =true
            }else {
                this.$refs.conChilder.isshowe =false
            }
        },
         // 全局定义的 弹框以外事件  让弹框显示影藏
        onClickOutside(event){
            console.log(event)
            this.$refs.conChilder.isshowe =false
        },
        // 点击购买 popup组件的变量
        handleClick(){
            if(this.$refs.pop.popupVisible == false) return this.$refs.pop.popupVisible =true
            else  return this.$refs.pop.popupVisible =false
        },

        doWhat(){

        }
    },
    watch:{
       
    },
    created(){
        // 获取标题
        //  if(!this.$route.params.tit) return this.del_tit=sessionStorage.getItem('tit')
        //  else return this.del_tit=this.$route.params.tit
        this.del_tit = this.$route.query.tit
      
       
    }
}
</script>
