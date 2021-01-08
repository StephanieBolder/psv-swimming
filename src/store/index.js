import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user= user;
    }
  },
  modules: {
  }
})

export default store
