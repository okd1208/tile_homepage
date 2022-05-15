<template>
  <div>
    <div v-if="targetCons">
      <h1 class="detailTitle">{{ targetCons.name }}</h1>
      <img class="detailImg" :src="targetCons.fotoURL" width=30%>
      <p class="detailText">{{ targetCons.text }}</p>
    </div>
  </div>
</template>

<script>
import Mixin from '../mixin'
export default {
  name: 'detailTile',
  watch: {
    'consData.constructions': function (value) {
      if (value) {
        this.targetCons = this.consData.constructions[this.$route.params.id]
      }
    }
  },
  mixins: [Mixin],
  data: function () {
    return {
      targetCons: null
    }
  }
}
</script>

<style scoped>
</style>
