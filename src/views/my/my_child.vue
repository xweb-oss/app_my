
<!-- 
子组组件
-->
<template>
    <div class="sidebar">
        <h1>1.我是子组件中的数据</h1>

        <div class="slot">
           <slot>
               父组件中如果没有内容，我将被显示
           </slot>
        </div>
       
        <div class="nameSlot">
            <slot name="name_slot"></slot>
        </div>

         <!-- <h3>作用域插槽,不是数据从子组件传到父组件</h3> -->

         <div>
            <ul>
                <li v-for="(item,index) in items" :key="index">
                    <slot :item='item'></slot>
                </li>
            </ul>
        </div>


        <h1>1.是在父组件引入的子组件中中不包含内容，更像是一个普通组件的引入</h1>



        <div id="example-1">
            <button @click="show = !show">
                Toggle render
            </button>
            <transition name="slide-fade">
                <p v-if="show">hello</p>
            </transition>
        </div>



        <!-- <template>
            <button @click="handCh">点击</button>
           <transition name="fade">
                <p v-if="show" class="tran_p">test</p>
            </transition>
        </template> -->

      
    </div>
</template>
<script>
    export default {
        props:["arrayData"],
        data() {
            return {
                items:['aaa1','aaa2','aaa3','aaa4'],
                show:true
            }
        },
        methods:{
            handCh(){
                this.show = false
            },
        },
        computed:{},
        created(){
            console.log(this.arrayData)
        }
    }
</script>

<style scoped>
.sidebar{
        text-align: left;
    }
.tran_p{
    width:100px;
    height:100px;
    background:red;
    color:#fff;
}
.fade-enter-active, .fade-leave-active{
  transition: all 1s ease-in-out;  
}

.fade-enter, .fade-leave-to{
  opacity: 0;  
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
