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
      {title: 'タイルa', img: require('../assets/tiles/tileA.jpeg'), id: 1},
      {title: 'タイルb', img: require('../assets/tiles/tileB.jpeg'), id: 2},
      {title: 'タイルc', img: require('../assets/tiles/tileC.jpeg'), id: 3},
      {title: 'タイルd', img: require('../assets/tiles/tileD.jpeg'), id: 4},
      {title: 'タイルe', img: require('../assets/tiles/tileE.jpeg'), id: 5},
      {title: 'タイルf', img: require('../assets/tiles/tileF.jpeg'), id: 6},
      {title: 'タイルg', img: require('../assets/tiles/tileG.jpeg'), id: 7},
      {title: 'タイルh', img: require('../assets/tiles/tileH.jpeg'), id: 8},
      {title: 'タイルi', img: require('../assets/tiles/tileI.jpeg'), id: 9},
      {title: 'タイルj', img: require('../assets/tiles/tileJ.jpeg'), id: 10},
      {title: 'タイルk', img: require('../assets/tiles/tileK.jpeg'), id: 3},
      {title: 'タイルaa', img: require('../assets/tiles/tileA.jpeg'), id: 3},
      {title: 'タイルbb', img: require('../assets/tiles/tileB.jpeg'), id: 3},
      {title: 'タイルcc', img: require('../assets/tiles/tileC.jpeg'), id: 3},
      {title: 'タイルdd', img: require('../assets/tiles/tileD.jpeg'), id: 3},
      {title: 'タイルee', img: require('../assets/tiles/tileE.jpeg'), id: 3},
      {title: 'タイルff', img: require('../assets/tiles/tileF.jpeg'), id: 3},
      {title: 'タイルgg', img: require('../assets/tiles/tileG.jpeg'), id: 3},
      {title: 'タイルhh', img: require('../assets/tiles/tileH.jpeg'), id: 3},
      {title: 'タイルii', img: require('../assets/tiles/tileI.jpeg'), id: 3},
      {title: 'タイルjj', img: require('../assets/tiles/tileJ.jpeg'), id: 3},
      {title: 'タイルkk', img: require('../assets/tiles/tileK.jpeg'), id: 3},
      {title: 'タイルaaa', img: require('../assets/tiles/tileA.jpeg'), id: 3},
      {title: 'タイルbbb', img: require('../assets/tiles/tileB.jpeg'), id: 3}
    ]
  }
  // mutations
})
