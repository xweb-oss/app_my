

<template>
  <div class="box">
    <!-- 指导页，引入swiper 实现手动轮播-->
    <!-- 固定写法 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,i) in log" :key="i">
        <img :src="item" alt @click="skip(i)" style="width:100%">
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
import a1 from "@/assets/images/1.jpg";
import a2 from "@/assets/images/2.jpg";
import a3 from "@/assets/images/3.jpg";
import a4 from "@/assets/images/4.jpg";
import 'swiper/dist/css/swiper.css'
export default {
  data() {
    return {
      log: [a1, a2, a3, a4],
      swiperOption: {
        loop: false, // 不让图片轮回滚动
        speed: 700, // 滑动的速度
        resistanceRatio: 0 // 让最开始和最后照片呢能不能拖动
      }
    };
  },
  methods: {
    skip(i) {
      if (i == this.log.length - 1) {
        this.$router.push({ name: "hemo" });
      }
    }
  },
  mounted() {
    // mountedshenm
    if (localStorage.count) {
      // 当不是第一次进入的时候，就push到house页面
      localStorage.count++;
      this.$router.push({ name: "hemo" });
    } else {
      localStorage.count = 1;
    }
  }
};
</script>


<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}
</style>

