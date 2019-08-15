<!-- 
<iframe>这段标签代码的含义是：

防止点击电脑回车或者手机搜索按钮跳转新页面。因为from表单点击搜索或者回车的时候，它发送请求会跳转一个新页面。但是用iframe还会存在问题，问题就是，虽然不跳转页面了，但是还会向后端发送请求。
所以采取onsubmit="return false;-->

<template>
    <div>
        <div>
         <form action="" target="frameFile" onsubmit="return false">
            <mt-search v-model="commodityName" cancel-text="取消"  placeholder="搜索" @keyup.enter.native="loadListData"></mt-search>
        </form>
        <iframe name='frameFile' style="display: none;"></iframe>
        <mt-cell title="选择单选和多选">h
            <mt-switch v-model="isshowe" @change="turn"></mt-switch>
        </mt-cell>
        <mt-checklist 
			title="多项选择"
			v-model="value" 
			align="right"
			:options="options" @change="checkon" v-if="isshowe">
		</mt-checklist>
        <mt-radio
		  title="单项选择"
		  v-model="value2"
		  :options="options" @change="check"  v-if="!isshowe">
		</mt-radio>
        </div>
        <mt-button type="primary" size="large" @click.native="handelTest">测试toast</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
// import { getList } from "@/api/my/index"
import axios from "axios";
export default {
    data(){
        return {
            commodityName:'',
            value:[],
            value2:"",
            isshowe:true,
			//checklist设置
			options : [{
                label: '选项A',
                value: 'A'
			},
			{
                label: '选项B',
                value: 'B'
			},
			{
                label: '选项C',
                value: 'C'
			},
			{
                label: '选项D',
                value: 'D'
			}]
        }
    },
    created(){
        this.getList();
    },

    methods:{
        handelTest(){
            console.log(66666)
            axios.post(`/dic/goods/on-off-line`).then(({data})=>{
                console.log(data)
            })
            Toast('提示信息');   // 提示信息
        },
         // 单选多选切换
        turn(){
            if(!this.isshowe) return this.isshowe=false
            // if(!this.isshowe){  // 每次选回来后清空之前数据
            //     this.isshowe=false
            //     this.value =[]
            // }
        },
        loadListData(){

        },

        gggg(){
            function loadImageAsync(url) {
                return new Promise(function(resolve, reject) {
                const image = new Image();

                image.onload = function() {
                resolve(image);
            };

                image.onerror = function() {
                reject(new Error('Could not load image at ' + url));
             };

                image.src = url;
            });
            }
        },
        // 初始化数据
        getList(){

        },
        checkon: function(val){
            console.log(val)   // 得到是value
        },
        check(val){
            console.log(val)
        }
    },
    watch:{
        commodityName:function(newvs,oldvs){
            console.log("newvs",newvs);
            console.log("oldvs",oldvs);
            if(!newvs){
                this.getList();
            }
        }
    },
    beforeCreate(){
       console.log(this.$el)    //  ......undefind
        console.log(this.$data)  //  ......undefind
    },
    created(){
        console.log(this.$el)  //  ......undefind
        console.log(this.$data)    // dom元素在created的时候就一句渲染成功



        const promise = new Promise(function(resolve, reject) {
        // ... some code

        if (1){   /* 异步操作成功 */
            resolve(value);
        } else {
            reject(error);
        }
        })
    },
    beforeMount(){
        console.log(this.$el)  //  ......undefind
        console.log(this.$data)
    },
    mounted(){
        console.log(this.$el)   // 挂载事例
        console.log(this.$data)

        const promise=new Promise((resolve,reject)=>{
            // debugger;
          console.log(1)
          resolve() // 成功回调    
  // resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

          console.log(2)
        })
        promise.then(()=>{
          console.log(3)
        })
        console.log(4)
    }

}
</script>
<style scoped>
  .searchWrap {
    margin: 5px 8px;
    background: #fff;
  }
  .mint-searchbar{
    padding:5px 5px 0 5px;
    box-sizing: border-box
  }
</style>
