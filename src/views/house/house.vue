<template>
    <div class="wrapper" ref ="wrapper" >
      <div align="center">
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
            <div v-for="(item,index) in list" :key="index" @click="goDetail(item.num)" style="height:50px">
                <mt-cell :title="item.title" :value="item.num"></mt-cell>
            </div>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>
      </div>
       <!-- <ul class="content">
            <li v-for="item in data" style="height:100px;line-height:100px">{{item}}</li>
        </ul> -->
        <!-- <div class="loading-wrapper"></div> -->

    </div>
</template>
<script>

import BScroll from 'better-scroll'
export default {

  data() {
    return {
      list: [
        { title: "花山", num: "1" },
        { title: "花山", num: "3" },
        { title: "花山", num: "2" },
        { title: "花山", num: "4" },
        { title: "花山", num: "5" },
        { title: "花山", num: "6" },
        { title: "花山", num: "8" },
        { title: "花山", num: "9" },
        { title: "花山", num: "9" },
        { title: "花山", num: "9" },
        { title: "花山", num: "9" },
        { title: "花山", num: "9" },
      ],
      topStatus: "",
      data:["语文","数学","英语","化学","物理","生物","地理","政治","历史","体育","美术","音乐"]
    };
  },
  methods: {
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    handleTopChange(status) {
        console.log('鼠标的状态为'+status)
      this.topStatus = status;
    },
    goDetail(val){
      console.log(val)
       this.$router.push({name:'detail',query:{tit:"详情页面",numb:val}})
       //params带参数。在页面刷新的时候，参数会丢失。
      //  this.$router.push({name:'detail',params:{tit:"详情页面",numb:val}})
      //  sessionStorage.setItem("tit",'详情页面')
       
    },

  
  },
  created(){
 
  },

  mounted() {
    this.$nextTick(() => {
      //$refs绑定元素
      if(!this.scroll){
          this.scroll = new BScroll(this.$refs.wrapper, {
          //开启点击事件 默认为false
          click:true
      })
      // console.log(this.scroll)
      }else if(!this.$refs.wrapper){
          return
      }
      else{
          this.scroll.refresh()
      }
    })
  }
};
</script>
<style lang="scss" >
.wrapper{
  width: 100%;
  position: absolute;
  top: 45px;
  bottom: 50px;  /*关键*/
  overflow: hidden;
  z-index: 1;
}
</style>
