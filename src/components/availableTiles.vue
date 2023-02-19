<template>
  <div class="available-tiles">
    <h3>取り扱いタイル一覧</h3>
    <ul class="available-tiles-lists">
      <li v-for="tile in tiles" :key="tile">{{tile}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AvailableTiles',
  data: function () {
    return {
      tiles: ['LIXIL', 'ダントー', '平田タイル', '名古屋モザイク', 'Kyタイル', 'アイコットリョーワ', '長江陶業', 'ダイナワン', 'ニックタイル', 'ADVAN', '輸入タイル']
    }
  }
}
</script>

<style>
.available-tiles {
  margin: 124px 0 0;
}

.available-tiles-lists {
  width: 80%;
  margin: 24px auto 0;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding: 0;
  /* text-align: center; */
}

.available-tiles-lists li {
  margin: 12px 48px;
}
@media screen and (max-width:520px) {
  .available-tiles-lists li {
    margin: 12px;
  }
}
</style>
