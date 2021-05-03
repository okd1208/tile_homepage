<template>
  <div>
    <div v-for="tile in tiles" :key="tile.id">
      <div v-if="tile.name === tileId">
        <h1 class="detailTitle">{{ tile.name }}</h1>
        <img class="detailImg" :src="tile.fotoURL" width=30%>
        <p class="detailText">{{ tile.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
import Mixin from '../mixin'
export default {
  name: 'detailTile',
  mixins: [Mixin],
  data: function () {
    return {
    }
  },
  props: [
    'tileId'
  ]
}
</script>

<style scoped>
</style>
