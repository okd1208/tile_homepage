<template>
  <div class="edit">
    <p>※画像比率は３：２推奨</p>
    <table class="constructionsTable">
      <tr>
        <th class="editTitle">建設工事名</th>
        <!-- <th class="editScript">説明</th> -->
        <th class="editDate">作成日</th>
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(construction,key) in consData.constructions" :key="key"
       v-bind:class="{ 'd-none': ($store.state.editKey !== key && $store.state.editKey) }"
       >
        <td class="edit-item" @click="selectItem(key, construction)">{{ construction.name }}</td>
        <!-- <td>{{ construction.text }}</td> -->
        <td>
          <!-- <p>建設日：{{ construction.date }}</p> -->
          <p>{{ getDate(construction.created) }}</p></td>
        <td><img :src="construction.fotoURL" width="90%"></td>
        <div class="delete-btn" @click="remove(key, construction.storagePath)">削除</div>
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
    selectItem (key, data) {
      this.$store.state.editKey = key
      this.$refs.child.selectItem(data)
    }
  }
}
</script>
