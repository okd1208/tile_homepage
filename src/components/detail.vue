<template>
  <div class="tileDetail">
    <div class="tileName">
      <div v-if="$route.params.tilesOrConstructions === 'tile'">
        <content-title>タイル詳細</content-title>
        <detail-tile :tile-id=$route.params.id></detail-tile>
      </div>
      <div v-else>
        <content-title>
          <template v-slot:mainTitle>Tiles</template>
          <template v-slot:subTitle>タイル使用建設例</template>
        </content-title>
        <detail-construction :construction-id=$route.params.id></detail-construction>
      </div>
    </div>
  </div>
</template>

<script>
import detailTile from '@/components/detailTile.vue'
import detailConstruction from '@/components/detailConstruction.vue'
import contentTitle from '@/components/contentTitle'
export default {
  name: 'detail',
  components: {
    detailTile,
    detailConstruction,
    contentTitle
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
