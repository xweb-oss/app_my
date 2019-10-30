
import store from './store' //注册store

import { gettestdate } from '@/api/my'
export default {
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
    },

    // 在actions中请求数据  test   better-scroll页面
    getRequertDate(context,parm){
        gettestdate(parm).then(res=>{
            console.log(parm)
            console.log(context)
            console.log(res)
            // 提交一个commit 去muutations
            context.commit('goToMutation',res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    
}