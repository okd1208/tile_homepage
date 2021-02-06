<template>
  <div class="tileDetail">
    <div class="tileName">
      <h2>{{ tile }}</h2>
      <div>Profile No.{{ $route.params.id }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data: function () {
    return {
      tileId: this.$route.params.id
    }
  },
  methods: {
    getTileId () {
      return this.tileId
    }
  },
  computed: {
    tiles () {
      console.log('oooooooooooooo')
      return this.$store.state.tiles
    }
    // tile: function () {
    //   // this.getTileId()
    //   return this.tiles.filter(
    //     function (value) {
    //       // console.log(this.getTileId())
    //       return value.id === $route.params.id
    //     }
    //   )
    // }
  }
}
</script>

<style scoped>
</style>
