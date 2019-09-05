/**
 *定义混入方法，特点

 1，方法。参数在各个组件之间不共享
 2, data中定义的参数 ----组件中和混入对象中存在同名的参数时候------a,会优先使用组件中的的参数(也就是只调用组件里面的)  .b不同名的将会合并，一起调用。
 
 3, 钩子函数  如 :created mounted  组件和混入对象多有的时候,------多会被调用---- 且 混入对象中的钩子会在组件之前被调用。

 4，值----为对象选项的，如 methods filter components , 等   里面的函数名相同的情况下 ，（键相同的情况下）----优先使用组件内部的函数调用(也就是只调用组件里面的)，不同的会被合并，多调用。

总结: 值----为函数，如data  created 等  同名参数只用组件里面的，不同名参数多会使用,   函数名相同的和不同多会被调用
     值-----为对象  ，methods 等   名相同的时候优先选择组件内部的 ,不同的会同事被调用。





 moment转日期格式的插件     
 dayjs转日期格式的插件




 * 创建一个项目中的混入文件
 

 */
import dayjs from 'dayjs'    // 个轻量的处理时间和日期的 JavaScript 库
export const mymixin = {
    methods: {
        starticker(type) {  // 打开日期选择按钮  ，
            // debugger;
            this.type=type;
            this.$refs.picker.open();
        },
        endicker(type){
            // if(this.startTime){
            //     return new Date(this.endTime).getTime() - new Date(this.startTime.getTime() > 0
            // };
            this.type=type;
            this.$refs.picker.open();
        },
        handleConfirm(data) {
            // debugger;
            let date = dayjs(data).format('YYYY-MM-DD');
            if(this.type=='start'){
              this.startTime = date;
            }
            if(this.type == 'end'){
              this.endTime = date;
            }
          },
        onValuesChange(picker, values) {
            console.log(picker)
            console.log(values)  // 所选时间的数组
            if (values[0] > values[1]) {
            console.log(66)
                picker.setSlotValue(1, values[0]);  // 设定给定 slot 被选中的值，该值必须存在于该 slot 的备选值数组中
            }
        },
        hello() {
            console.log('mymixin');
        }
    },
    // watch:{
    //     endicker:function(oldvalue,val){
    //         console.log(val)
    //        let startTiem = new Date(val)
    //         if(val){
    //             return startTiem.getTime()

    //         }
    //     }
    // },
    data() {
        return {

            msg:'hello word',

            list:[1,2,3,4,5,6,7,8,9,10],
            message: 'hello',       // 在mall中也同时存在的变量
            foo: 'abc',
            slots: [
                {
                    flex: 1,
                    values: ['2017-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot1',
                    textAlign: 'right'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
                    className: 'slot3',
                    textAlign: 'left'
                }
            ]
        };
    },
    created(){
        console.log('同名钩子函数将合并为一个数组，多会被调用')
        this.hello();
    }
}