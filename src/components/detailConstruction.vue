<template>
  <div>
    <div v-for="construction in constructions" :key="construction.name">
      <div v-if="construction.name === constructionId">
        <h1 class="detailTitle">{{ construction.name }}</h1>
        <img class="detailImg" :src="construction.fotoURL" width=30%>
        <p class="detailText">{{ construction.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '../mixin'
export default {
  name: 'detailTile',
  mixins: [Mixin],
  data: function () {
    return {
    }
  },
  props: [
    'constructionId'
  ],
  computed: {
    constructions () {
      return this.$store.state.constructions
    }
  }
}
</script>

<style scoped>
</style>
