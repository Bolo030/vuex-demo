import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import state from './state'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import user from "./modules/user/index"

Vue.use(Vuex)

export default new Vuex.Store({
 namespaced:true,
 state,
 mutations,
 actions,
 getters,
 user
})


