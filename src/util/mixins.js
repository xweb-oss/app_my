/**
 *定义混入方法，特点
 1，放法。参数在各个组件之间不共享
 2，值为对象选项的，如 methods filter, 等 键相同的情况下，会被组件中的覆盖，即优先使用组件内部的
 3，值为函数选择的，如，creted mounte data等 会合并使用



 moment转日期格式的插件     
 dayjs转日期格式的插件
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
            list:[1,2,3,4,5,6,7,8,9,10],
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
    }
}