<template>
  <div class="edit">
    <div v-if="error_message">
      {{ error_message }}
    </div>
    <p>※画像比率は３：２</p>
    <table class="constructionsTable" border="1">
      <tr>
        <th class="editTitle">建設工事名</th>
        <th class="editScript">説明</th>
        <!-- <th class="editURL">URL</th> -->
        <th class="editDate">日付</th>
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(Construction,key) in consData.constructions" :key="key">
        <td>{{ Construction.name }}</td>
        <td>{{ Construction.text }}</td>
        <td>
          <p>建設日：{{ Construction.date }}</p>
          <p>作成日：{{ getDate(Construction.created) }}</p></td>
        <!-- <td>{{ Construction.fotoURL }}</td> -->
        <td><img :src="Construction.fotoURL" width="90%"></td>
        <button @click="removeConstruction(key)">削除</button>
        <button @click="selectItem(key,'cons')">編集</button>
      </tr>
    </table>
    <edit-form ref="child" editType='construction'></edit-form>
  </div>
</template>

<script>
import Mixin from '../../mixin'
import editForm from '../parts/editForm.vue'
export default {
  components: { editForm },
  name: 'editConstructions',
  mixins: [Mixin],
  data () {
    return {
    }
  },
  methods: {
    selectItem (key, type) {
      this.$refs.child.selectItem(key, type)
    }
  }
}
</script>

<style>
</style>
