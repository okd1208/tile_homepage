<template>
  <div class="someTile">
    <h2 class="title">取り扱いタイル一覧</h2>
    <div>
      <ul class="parent">
        <li  v-for="tile in tiles" :key="tile.title" class="tile">
          <some-imgs>
            <template v-slot:img>
              <router-link :to="{name: 'detail', params: {id: tile.id}}" class="signup-link">task edit</router-link>
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
    }
  },
  computed: {
    tiles () {
      return this.$store.state.tiles
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
.parent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
