<template>
  <div>
    <div v-if="targetTile">
      <h1 class="detailTitle">{{ targetTile.name }}</h1>
      <img class="detailImg" :src="targetTile.fotoURL" width=30%>
      <p class="detailText">{{ targetTile.text }}</p>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
import Mixin from '../mixin'
export default {
  name: 'detailTile',
  watch: {
    'tileData.tiles': function (value) {
      if (value) {
        this.targetTile = this.tileData.tiles[this.$route.params.id]
      }
    }
  },
  mixins: [Mixin],
  data: function () {
    return {
      targetTile: null
    }
  }
}
</script>

<style scoped>
</style>
