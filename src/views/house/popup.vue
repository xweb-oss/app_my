<template>
    <div>
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="deteil_div">
                <img src="@/assets/images/weixin.png" alt="">
                <span>请选择商品尺码</span>
                <mt-radio v-model="value" @change="check_r" :options="options">
                </mt-radio>
                <div class="app_num">
                    <div>
                        <span>数量: </span>
                    </div>
                    <div>
                        <mt-button class="reduces" @click="reduces" :disabled="disabled" size="small" type="default"> - </mt-button>
                        <mt-badge type="success" v-text="num"></mt-badge>
                        <mt-button class="add" @click="add" size="small" type="default"> + </mt-button>
                    </div>
                </div>
                <div class="app_num">
                    <div>
                        <span>价格: </span>
                    </div>
                    <mt-badge type="success" v-text="price+'元'"></mt-badge>
                </div>
                <mt-button type="danger" @click.native="handPop" size="large">立即购买</mt-button>
            </div>
        </mt-popup>
    </div>
</template>

<script>
const options=[
    {label:"标准尺码 : 29",value:'1',unitprice:168},
    {label:"深蓝尺码 : 30",value:'2',unitprice:178},
    {label:"纯黑尺码 : 32",value:'3',unitprice:188},
    {label:"黑白尺码 : 34",value:'4',unitprice:198}
]
export default {
    data(){
        return{
            price:168,
            disabled:true,
            options:options,
            num:1,
            value:'1',
            popupVisible:false
        }
    },
    watch:{
        // 监听，当value的值发生变化的时候，初始化num
        value:function(val,oldval){
           if(val!=oldval){
               this.num = 1;
           }
        }
    },
    methods:{
        // 选择改变
        check_r(val){
            console.log(val)
        },
        // 立即购买
        handPop(){
            // 点击调支付页面
            this.$router.push({name:"result",query:{num:this.num,price:this.price}})
        },
        reduces(){
            if(this.num <= 1) return this.disabled = true
             else this.num--
        },
        add(){
            if(this.num >= 1){
                this.num++
                this.disabled = false
            }
        }

    }
}
</script>
<style scoped lang="scss">
.mint-popup{
   width:100%;
   border-radius: 20px 20px 0 0;
   .deteil_div{
       padding:10px;
   }
}
.app_num{
    height:36px;
    display:flex;
    justify-content: space-between;
    .reduces{
        padding:0 10px
    }
    .add{
         padding:0 10px
    }
}
</style>
