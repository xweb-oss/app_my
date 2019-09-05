
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex);

const state={
	themTitle:"house",
	count: 0,
	newMsg:'hfhhffjhdssksd'
}


export default new Vuex.Store({
    state,
	getters,
	actions,
	mutations,
 })


