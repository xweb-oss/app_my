<template>
  <div class="bscroll" ref='wrapper'>
    <div class="bscroll-content">
      <p v-for="item in itemlist" :key="item.id">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
const itemlist=[
  {id:1,name:"你大爷还在不在"},
  {id:2,name:"你大爷还在不在"},
  {id:3,name:"你大爷还在不在"},
  {id:4,name:"你大爷还在不在"},
  {id:5,name:"你大爷还在不在"},
  {id:6,name:"你大爷还在不在"},
  {id:7,name:"你大爷还在不在"},
  {id:8,name:"你大爷还在不在"},
  {id:9,name:"你大爷还在不在"},
  {id:10,name:"你大爷还在不在"}
]
import BScroll from 'better-scroll';
export default {
  data(){ return { itemlist }},
  methods:{
    _initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            scrollY: true,
            click: true,
            snap: { // 设置不是循环的(设置loop设置true就会在前后加一个)
                loop: false,
                threshold: 0.3,
                speed: 400
            },
        })
    }
  },
  mounted(){ this._initScroll()}
}

</script>
<style lang="scss">
.bscroll {
  height: 100%;
  overflow: hidden;
  .bscroll-content {height: auto;
    p { height: 80px;}
  }
}
</style>