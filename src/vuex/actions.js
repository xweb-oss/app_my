
import store from './store' //注册store
export default{
    // 提交改变后的状态
    increment(context, param) {
        console.log(param) // { step:10 }
        // debugger;
        context.state.count += param.step;   // 通过context.state.count 来获取state中的count变量

        context.commit('increment', context.state.count) // 提交改变后的state.count值

    },

    
    incrementStep({state, commit, rootState}) {
        if (rootState.count < 100) {
            store.dispatch('increment', {                   // 在这调用increment()方法
                step: 100
            })
        }
    }
    
}