import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
// import { state, mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state: {
    openAdminMenu: 'tile',
    editKey: null,
    topics: [
      {id: 1, title: 'mmタイル１０００枚入荷！', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'お知らせ', color: 'bg-danger', date: '2021.01.12', img: require('@/assets/constructions/test1.jpeg')},
      {id: 2, title: '本日会社の改装工事を行いました。', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'その他', color: 'bg-warning', date: '2021.01.12'},
      {id: 3, title: 'mmタイル１9０００枚入荷！', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: '建設事例', color: 'bg-danger', date: '2021.01.12'}
    ]
  }
  // mutations
})
