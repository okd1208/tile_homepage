import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail: null,
    openAdminMenu: 'tile',
    editKey: null,
    isAdminPage: false,
    tileData: null,
    topicData: null,
    consData: null
  },
  mutations: {
  },
  getters: {
  }
  // mutations
})
