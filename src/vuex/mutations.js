/**
 * types是导入mutations_types中所有的变量 的 对象
 */
import * as types from './mutations_types';

const mutations = {
    // 改变state中的 themTitle 。提交一个commit函数
    [types.GETTITLE](state, payload) {
        state.themTitle = payload
    },
    // 处理状态
    increment(state, payload) {   //  payload == 10
        // debugger;
        // state.count += payload.step || 1;

        state.newMsg = payload
    },



    // 接收actios获取到数据后，进行处理
    goToMutation(state, payload) {
        console.log(payload)
        console.log(state)    // 得到state中声明的变量。
        state.againInfo = payload[1106].number

    }
}



export default mutations