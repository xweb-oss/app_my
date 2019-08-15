/**
 * types是导入mutations_types中所有的变量 的 对象
 */
import * as types from './mutations_types'; 

const mutations={
    // 改变state中的 themTitle 。提交一个commit函数
    [types.GETTITLE](state,payload){
        state.themTitle = payload
    }
}


export default mutations