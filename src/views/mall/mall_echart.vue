<template>
    <div>
        echart测试
        <div id="chart-part1" style="width:100%;height:350px"></div>
    </div>
</template>



<script>
import { echarts } from '@/util/echart.js'
export default {
    data(){
        return{

        }
    },
    methods:{
    init(){
        // 样式详解见  https://blog.csdn.net/lbPro0412/article/details/82708327
        const myChart = this.$echarts.init(document.getElementById('chart-part1'))
        const option = {
            // 其中const option = { }就是我们需要引进echart图表的代码
                title: {
                    text: 'ECharts 入门示例',
                     subtext: '数据来自网络',
                    textStyle:{      // 改变字体标题的颜色。
                        color:"#123456"
                    }

                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                legend: {
                    data:['销量'],
                    left:"right" ,    // data实在的位置
                    textStyle:{
                        color:"blue"
                    }

                },

                //  grid: {
                //         left: '3%',
                //         right: '4%',
                //         bottom: '3%',
                //         containLabel: true
                //     },
                  

                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]   
            }
        myChart.setOption(option)
        window.addEventListener('resize', function () {
                myChart.resize()
        })
        }
    },
    mounted(){
        // 在此实例化echarts对象。
        this.init();
    }
}
</script>