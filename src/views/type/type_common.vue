<template>
    <div>
        <div>
            <p>歌手：薛之谦。</p>
            <p>歌曲: {{$route.query.tit}} ---- id ----{{$route.query.ads}}</p>
        </div>
        <div class="triangle"></div>
        <div>
            <h2> js的继承机制: </h2>
            <p>第一通过原型链继承prototype </p>
            <p> 
                <span> 第二通过 apply  call来继承 </span>
        i        <span> 区别： 1,apply只需要传人参数arguments    
                      2,call需要传入所有的参数
                      call的第一个参数用作this的对象
                </span>
            </p>
              <p>第三直接通过prototype继承 </p>
              <h3>数组和对象的方法</h3>
              <p>数组的方法 pop删除 shift删除 unshift添加前面 push添加到后面 concat数组合并，slice splice</p>
            
        </div>
        <div v-for="(item,index) in itemList" :key="index">
            <p v-text="index+1+'========'+item"></p>
        </div>
        <div class="pos">
            <input type="text" id="inp" v-model="msg"/>
            <mt-button type="primary"  @click.native="submit">发送</mt-button>
        </div>
    </div>
</template>
<script>
const itemList=[
    "早上好"
]
export default {
    data(){
        return{
            itemList:itemList,
            msg:""
        }
    },
    methods:{
        submit(){
            if(this.msg&&this.msg!=' '){
               this.itemList.push(this.msg) // 放到数组的最前面
               this.msg=" "
            }
            console.log(this.msg)
        }
    },
    mounted(){
        console.log(this.$route.query)
    }
}
</script>
<style scoped>
    .pos{
        position:absolute;
        bottom:0;
    }
    #inp{
        height:40px;


    }
   .triangle{
       width:0;
       height:0;
       border-width:40px;
       border-style:solid;
       border-color:red transparent transparent transparent;
   }
</style>
