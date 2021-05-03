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
    count: 11234343254545435345,
    count2: 22,
    text: 'aaaa',
    img: require('../assets/home/home5.jpg'),
    tiles: [
      {name: 'タイルa', fotoURL: require('../assets/tiles/tileA.jpeg'), id: 1, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルb', fotoURL: require('../assets/tiles/tileB.jpeg'), id: 2, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルc', fotoURL: require('../assets/tiles/tileC.jpeg'), id: 3, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルd', fotoURL: require('../assets/tiles/tileD.jpeg'), id: 4, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルe', fotoURL: require('../assets/tiles/tileE.jpeg'), id: 5, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルf', fotoURL: require('../assets/tiles/tileF.jpeg'), id: 6, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルg', fotoURL: require('../assets/tiles/tileG.jpeg'), id: 7, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルh', fotoURL: require('../assets/tiles/tileH.jpeg'), id: 8, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルi', fotoURL: require('../assets/tiles/tileI.jpeg'), id: 9, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルj', fotoURL: require('../assets/tiles/tileJ.jpeg'), id: 10, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルk', fotoURL: require('../assets/tiles/tileK.jpeg'), id: 11, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルaa', fotoURL: require('../assets/tiles/tileA.jpeg'), id: 12, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルbb', fotoURL: require('../assets/tiles/tileB.jpeg'), id: 13, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルcc', fotoURL: require('../assets/tiles/tileC.jpeg'), id: 14, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルdd', fotoURL: require('../assets/tiles/tileD.jpeg'), id: 15, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルee', fotoURL: require('../assets/tiles/tileE.jpeg'), id: 16, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルff', fotoURL: require('../assets/tiles/tileF.jpeg'), id: 17, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルgg', fotoURL: require('../assets/tiles/tileG.jpeg'), id: 18, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルhh', fotoURL: require('../assets/tiles/tileH.jpeg'), id: 19, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルii', fotoURL: require('../assets/tiles/tileI.jpeg'), id: 20, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルjj', fotoURL: require('../assets/tiles/tileJ.jpeg'), id: 21, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルkk', fotoURL: require('../assets/tiles/tileK.jpeg'), id: 22, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルaaa', fotoURL: require('../assets/tiles/tileA.jpeg'), id: 23, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'},
      {name: 'タイルbbb', fotoURL: require('../assets/tiles/tileB.jpeg'), id: 24, text: 'このタイルは、アメリカから輸入した加工生のタイルです。タイルの中では一番硬いタイルと言われており、よくビルの外壁や一般家庭の外壁に使用されます。'}
    ],
    constructions: [
      {id: 1, title: 'FFG外壁工事', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test1.jpeg')},
      {id: 2, title: 'FFG外壁工事a', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test2.jpg')},
      {id: 3, title: 'FFG外壁工事b', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test3.jpg')},
      {id: 4, title: 'FFG外壁工事c', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test4.jpg')},
      {id: 5, title: 'FFG外壁工事d', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test5.jpeg')},
      {id: 6, title: 'FFG外壁工事e', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test6.jpg')},
      {id: 7, title: 'FFG外壁工事f', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test7.jpg')},
      {id: 8, title: 'FFG外壁工事g', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/home2.jpeg')},
      {id: 9, title: 'FFG外壁工事h', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test3.jpg')},
      {id: 10, title: 'FFG外壁工事i', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test4.jpg')},
      {id: 11, title: 'FFG外壁工事j', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test5.jpeg')},
      {id: 12, title: 'FFG外壁工事k', text: 'この工事では、mmタイルを２００枚とJJタイル３５０枚で完成しました。JJタイルを使用したことでかなりの強度が期待できます。', img: require('@/assets/constructions/test6.jpg')}
    ],
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
