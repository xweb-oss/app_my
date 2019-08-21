<template>
  <div>
    <input
      id="start"
      type="text"
      class="form-control input-sm"
      readonly
      name="start"
      @click="starticker('start')"
      v-model="startTime"
      placeholder="结束时间"
    /> 
    <input
      id="end"
      type="text"
      class="form-control input-sm"
      readonly
      name="end"
      @click="endicker('end')"
      v-model="endTime"
      placeholder="开始时间"
    />
    <mt-datetime-picker
      v-model="pickerVisible"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm"
    ></mt-datetime-picker>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="50"
    >
      <mt-cell-swipe
        title="swipe向右可滑动"
        :right="[
                {
                content: '删除',
                style: { background: 'red', color: '#fff' },
                handler: () => this.$messagebox('delete')
                }
            ]"
      ></mt-cell-swipe>
      <mt-cell-swipe title="swipe向左可滑动" :left="cont_left"></mt-cell-swipe>
      <mt-cell v-for="(item,index) in list" :key="index">{{ item }}</mt-cell>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mymixin } from "@/util/mixins";
import dayjs from "dayjs"; // 个轻量的处理时间和日期的 JavaScript 库
export default {
  mixins: [mymixin], // 调用mixin.js中的方法
  data() {
    return {
      message: 'goodbady',  // 在mixins中也同时存在的变量
      bar: 'bar',
      startTime: "",
      endTime: "",
      pickerVisible: null
      // list:[1,2,3,4,5,6,7,8,9,10]   直接使用mixins里面的变量，参数 和方法。
    };
  },
  created() {
     console.log(this.$data)    
    //  在值为函数的情况下，建相同的情况下会优先选择组件内部的属性值message: "goodbady"
    //  =====>   { message: "goodbady" , bar: 'bar', foo: 'abc', .... }

    this.cont_left = [
      {
        content: "删除",
        style: { background: "green", color: "#fff" },
        handler: () => this.$messagebox("delete")
      }
    ];
  },
  methods: {
    loadMore() {
      this.loading = true; // 为true的时候不滑动
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) { 
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted() {
    const date = dayjs();
    console.log(dayjs()); // 当前时间
    // 获取年月日时分秒
    const y = date.year();
    const m = date.month() + 1;
    const d = date.date();
    const z = date.day(); // 星期
    const h = date.hour();
    const min = date.minute();
    const s = date.second();
    const hs = date.millisecond(); // 毫秒
    console.log(
      y +
        "年" +
        m +
        "月" +
        d +
        "日" +
        z +
        "周" +
        h +
        "时" +
        min +
        "分" +
        s +
        "秒" +
        hs +
        "毫秒"
    );
    // 格式化
    console.log(date.format()); // 2019-07-05T09:39:39+08:00

    console.log(date.format("YYYY-MM-DD dddd HH:mm:ss.SSS A")); // 2019-07-05 Friday 09:39:39.957 AM
    
    console.log(date.format('YYYY-MM-DD HH:mm:ss'))  // 2019-08-21 13:07:59

    // 增加天数 / 年份  返回一个新的对象
    console.log(date.add(7, "day"));

    // 时间差 年、月、日
    console.log(dayjs("2019-06-08").diff(dayjs("2017-06-01"), "years")); // 2
  }
};
</script>

<style scoped>
    #start,#end{
        height:30px;
        padding:10px;
        box-sizing:border-box
    }
</style>
