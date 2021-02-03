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
      {title: 'タイルa', img: require('../assets/tiles/tileA.jpeg')},
      {title: 'タイルb', img: require('../assets/tiles/tileB.jpeg')},
      {title: 'タイルc', img: require('../assets/tiles/tileC.jpeg')},
      {title: 'タイルd', img: require('../assets/tiles/tileD.jpeg')},
      {title: 'タイルe', img: require('../assets/tiles/tileE.jpeg')},
      {title: 'タイルf', img: require('../assets/tiles/tileF.jpeg')},
      {title: 'タイルg', img: require('../assets/tiles/tileG.jpeg')},
      {title: 'タイルh', img: require('../assets/tiles/tileH.jpeg')},
      {title: 'タイルi', img: require('../assets/tiles/tileI.jpeg')},
      {title: 'タイルj', img: require('../assets/tiles/tileJ.jpeg')},
      {title: 'タイルk', img: require('../assets/tiles/tileK.jpeg')},
      {title: 'タイルaa', img: require('../assets/tiles/tileA.jpeg')},
      {title: 'タイルbb', img: require('../assets/tiles/tileB.jpeg')},
      {title: 'タイルcc', img: require('../assets/tiles/tileC.jpeg')},
      {title: 'タイルdd', img: require('../assets/tiles/tileD.jpeg')},
      {title: 'タイルee', img: require('../assets/tiles/tileE.jpeg')},
      {title: 'タイルff', img: require('../assets/tiles/tileF.jpeg')},
      {title: 'タイルgg', img: require('../assets/tiles/tileG.jpeg')},
      {title: 'タイルhh', img: require('../assets/tiles/tileH.jpeg')},
      {title: 'タイルii', img: require('../assets/tiles/tileI.jpeg')},
      {title: 'タイルjj', img: require('../assets/tiles/tileJ.jpeg')},
      {title: 'タイルkk', img: require('../assets/tiles/tileK.jpeg')},
      {title: 'タイルaaa', img: require('../assets/tiles/tileA.jpeg')},
      {title: 'タイルbbb', img: require('../assets/tiles/tileB.jpeg')}
    ]
  }
  // mutations
})
