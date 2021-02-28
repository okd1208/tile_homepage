<template>
  <div class="tileDetail">
    <div class="tileName">
      <div v-if="$route.params.tilesOrConstructions === 'tile'">
        <body-header>タイル詳細</body-header>
        <detail-tile :tile-id=$route.params.id></detail-tile>
      </div>
      <div v-else>
        <body-header>建設例詳細</body-header>
        <detail-construction :construction-id=$route.params.id></detail-construction>
      </div>
    </div>
  </div>
</template>

<script>
import detailTile from '@/components/detailTile.vue'
import detailConstruction from '@/components/detailConstruction.vue'
import bodyHeader from '@/components//header.vue'
export default {
  name: 'detail',
  components: {
    detailTile,
    detailConstruction,
    bodyHeader
  },
  data: function () {
    return {
    }
  }
}
</script>

<style>
.detailTitle {
  margin: 32px;
}
.detailText {
  margin: 52px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  text-align: left;
}
/* .detailImg {
} */
</style>
