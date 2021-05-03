<template>
  <div class="someTile">
    <h2 class="title">取り扱いタイル一覧</h2>
    <div>
      <ul class="tileParent">
        <li v-for="tile in tiles" :key="tile.name" class="tile">
          <some-imgs>
            <template v-slot:img>
              <router-link :to="{name: 'detail', params: {id: tile.name, tilesOrConstructions: 'tile'}}" class="signup-link">
                <img class="hoverImg" :src="tile.fotoURL" width="100%">
              </router-link>
            </template>
            <template v-slot:title>
              {{ tile.name }}
            </template>
          </some-imgs>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import someImgs from '@/components/someImgs.vue'
import Mixin from '../mixin'
export default {
  components: {
    someImgs
  },
  mixins: [Mixin],
  name: 'someTile',
  data: function () {
    return {
    }
  }
}
</script>

<style>
/* .title {
margin-bottom: 32px;
} */
.someTile {
  margin-top: 64px;
}
.tile {
  list-style: none;
  height: 200px;
  width: 200px;
  background-color: skyblue;
  margin: 2px;
}
.tileParent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
@media screen and (max-width: 534px) {
  .tileParent {
    padding-left: 0px;
  }
}
</style>
