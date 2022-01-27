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
      {id: 1, title: 'mmタイル１０００枚入荷！', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'news', color: 'bg-danger', date: '2021/01/12', img: require('@/assets/constructions/test1.jpeg')},
      {id: 2, title: '本日会社の改装工事を行いました。', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'blog', color: 'bg-warning', date: '2021/01/12'},
      {id: 3, title: 'mmタイル１9０００枚入荷！', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'news', color: 'bg-danger', date: '2021/01/12'},
      {id: 4, title: '2021年新卒採用募集事項', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: '採用', color: 'bg-primary', date: '2021/01/12'},
      {id: 5, title: '本日会社の改装工事を行いました,', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'blog', color: 'bg-warning', date: '2021/01/12'},
      {id: 6, title: '2021年新卒採用募集事項。', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: '採用', color: 'bg-primary', date: '2021/01/12'},
      {id: 7, title: 'mmタイル１０００枚入荷！?', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'news', color: 'bg-danger', date: '2021/01/12'},
      {id: 8, title: '本日会社の改装工事を行いました..。', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'blog', color: 'bg-warning', date: '2021/01/12'},
      {id: 9, title: 'mmタイル１9０００枚入荷?！', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: 'news', color: 'bg-danger', date: '2021/01/12'},
      {id: 10, title: '2021年新卒採用募集事項?', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: '採用', color: 'bg-primary', date: '2021/01/12'},
      {id: 11, title: '本日会社の改装工事を行いました!!', text: 'こんにちはいい天気ですね。本日自社では改装工事を行いました。こういった文章を適当に書いていく。', type: '採用', color: 'bg-primary', date: '2021/01/12'}
    ]
  }
  // mutations
})
