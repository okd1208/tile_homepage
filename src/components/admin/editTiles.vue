<template>
  <div class="edit">
    <table class="tilesTable">
      <tr>
        <th class="editTitle">タイル名</th>
        <!-- <th class="editScript">説明</th> -->
        <th class="editDate">日付</th>
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(tile,key) in tileData.tiles" :key="key"
       v-bind:class="{ 'd-none': ($store.state.editKey !== key && $store.state.editKey) }"
       >
        <td class="edit-item" @click="selectItem(key, tile)">{{ tile.name }}</td>
        <!-- <td>{{ tile.text }}</td> -->
        <td>作成日：{{ getDate(tile.created) }}</td>
        <td class="edit-item-img"><img :src="tile.fotoURL" width="90%"></td>
        <div class="delete-btn" @click="remove(key, tile.storagePath)">削除</div>
      </tr>
    </table>
      <edit-form ref="child" editType='tile'></edit-form>
  </div>
</template>

<script>
import Mixin from '../../mixin'
import editForm from '../parts/editForm.vue'
export default {
  components: { editForm },
  name: 'editTiles',
  mixins: [Mixin],
  data () {
    return {
    }
  },
  methods: {
    selectItem (key, data) {
      this.$store.state.editKey = key
      this.$refs.child.selectItem(data)
    }
  }
}
</script>

<style scoped>
.edit-item-img img {
  max-width: 130px;
}
</style>
