import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    environment: 'development',
    backendServer: 'http://127.0.0.1:3001'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
