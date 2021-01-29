<template>
  <div class="someTile">
    <h2 class="title">取り扱いタイル一覧</h2>
    <div>
      <ul class="parent">
        <li  v-for="tile in tiles" :key="tile.title" class="tile">
          <some-imgs>
            <template v-slot:img>
              <img :src="tile.img" width="100%">
            </template>
            <template v-slot:title>
              {{ tile.title }}
            </template>
          </some-imgs>
        </li>
      </ul>
      <tile-btn>タイル一覧を見てみる<br>click</tile-btn>
    </div>
  </div>
</template>

<script>
import someImgs from '@/components/someImgs.vue'
import tileBtn from '@/components/tileBtn'
export default {
  components: {
    someImgs,
    tileBtn
  },
  name: 'someTile',
  data: function () {
    return {
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
  }
}
</script>

<style>
.title {
margin-bottom: 32px;
}
.someTile {
  margin-top: 96px;
}
.tile {
  list-style: none;
  height: 200px;
  width: 200px;
  background-color: skyblue;
  margin: 2px;
}
</style>
