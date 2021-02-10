<template>
  <div>
    <div v-for="construction in constructions" :key="construction.id">
      <div v-if="construction.id === constructionId">
        <h1 class="detailTitle">{{ construction.title }}</h1>
        <img class="detailImg" :src="construction.img" width=30%>
        <p class="detailText">{{ construction.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailTile',
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
