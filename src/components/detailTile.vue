<template>
  <div>
    <div v-for="tile in tiles" :key="tile.id">
      <div v-if="tile.id === tileId">
        <h1 class="detailTitle">{{ tile.title }}</h1>
        <img class="detailImg" :src="tile.img" width=30%>
        <p class="detailText">{{ tile.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailTile',
  data: function () {
    return {
      // tile: this.$store.state.tiles.find({'id': 2})
    }
  },
  props: [
    'tileId'
  ],
  methods: {
    // getTileId () {
    //   return this.tileId
    // }
  },
  computed: {
    tiles () {
      // console.log('oooooooooooooo')
      // console.log(this.tileId)
      return this.$store.state.tiles
    }
    // tile () {
    // return {
    // tile: this.$store.state.tiles.find(1)
    // }
    // }
    // tile: function () {
    //   console.log(this.tileId)
    //   return this.tiles.filter(
    // function (value) {
    //   console.log(this.tileId)
    //   return value.id === this.tileId
    // }
    //   )
    // }
  }
}
</script>

<style scoped>
</style>
