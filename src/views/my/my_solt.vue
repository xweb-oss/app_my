

<!-- 父组组件 -->
<template>
  <div class="first-page">
    <div
      class="first-content"
      style="color:red"
    >



      <child>
        <span>我是在父组件中，引入的子组件</span>
        <!-- <template slot-scope="a">
            <p v-text="a.item"></p>
          </template> -->
        <!-- 预览图中绿色部分就是自定义插槽 -->
        <span slot="name_slot" style="color: #11caff;">
          
        </span>
      </child>





      
    <!-- 替换子组件slot name="name_slot"的插槽-->
    </div>
    <!-- <span style="color: red;">嗯哼?</span> -->
    <!-- 替换子组件匿名插槽 -->
  
    <div>
      <child2>
        <span>子组件2头部的的内容</span>
        <footer>
          <span>子组件2底部的的内容</span>
        </footer>
      </child2>

    </div>

    <div class="drg">
      <div class="slot_block">点击</div>
      <div
        class="block"
        @click="hanchange"
      ></div>
    </div>

    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>

  </div>
</template>
<script type="text/javascript">
    import child from './my_child.vue';
    import child2 from './my_child2.vue';
    export default {
        name: 'parent',
         data() {
            return { 
                arrayData: [
                    {id: 'a1', name: 'aa1',des: 'des1'},
                    {id: 'a2', name: 'aa2',des: 'des2'},
                    {id: 'a3', name: 'aa3',des: 'des3'}
                ] ,

                initWidth:0,   // 滑块离左边开始的距离
                isMove:false,   // 判断是否触发了拖动 这个状态sssssssssssssss
                currentTabComponent:'child2',
                flag:0
            }
        },
        components:{
          // 用来声明页面组件  
          child,
          child2
        },


        methods:{
          hanchange(){
            this.flag++
            if(this.flag%2==0){
              this.currentTabComponent='child2'
            }else {
              this.currentTabComponent='child'
            }
          },
          // clientX  鼠标按下的位置距离左边的距离


         // 一个常见的模式是在mousedown处理器内部绑定mousemove处理器，并在一个相应mouseup处理函数解除绑定。要实现这一系列事件，请记住，与 mouseup 事件相比，mouseup 事件可能会被发送到不同的 HTML 元素上。由于这个原因，mouseup 事件通常应该绑定在更高的 DOM 树中，例如 <body>。
          mouvedownFn:function(e){   // 鼠标按下事件
              console.log('鼠标按下了')
              console.log(e)
              console.log(this.initWidth)

              e.preventDefault && e.preventDefault();   //阻止文字选中被拖到产生阴影   浏览器默认事件

              this.initWidth = e.clientX
              this.isMove = true    // 鼠标按下后，就指定触发拖动状态。
          },
          moveFn(e){     // 移动事件
            if(this.isMove){
                console.log(e)
                console.log('鼠标按移动了')
                console.log(this.initWidth)

                let width = e.clientX - this.initWidth

                if(width>0 && width<=this.maxwidth){
                    document.getElementsByClassName('block')[0].style.left = width + 'px';
                    // document.getElementsByClassName('drag_bg')[0].style.width = width + 'px';
                }else if(width>this.maxwidth){
                    // this.successFunction();
                }
            }
              

          }

        },
        mounted(){
          //  element.addEventListener(event, function, useCapture)    第一个为事件类型(click , mousedown),第二为函数，第三为布尔值('是否在捕获或冒泡阶段执行。)
          document.getElementsByTagName('html')[0].addEventListener('mousemove',this.moveFn)
          
        }
    }
</script>


<style scoped>
.drg {
  position: relative;
  width: 100%;
  background: #ccc;
  height: 30px;
  line-height: 30px;
}
.slot_block {
  position: absolute;
  width: 100%;
  top: 0;
  /* background:#ccc; */
  /* line-height: 30px; */
  text-align: center;
  /* height:30px; */
}
.block {
  width: 50px;
  height: 30px;
  background: blue;
  position: absolute;
  top: 0;
  left: 0;
  cursor: move;
}
</style>
