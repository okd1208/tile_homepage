import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userEmail: null,
    openAdminMenu: 'tile',
    editKey: null
  },
  mutations: {
  },
  getters: {
  }
  // mutations
})
