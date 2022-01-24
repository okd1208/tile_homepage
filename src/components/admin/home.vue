<template>
  <div>
    <body-header>編集ページ</body-header>
    <ul id="editMenuNav">
      <li :class="{current: $store.state.openAdminMenu === 'tile'}" @click="changeEditMenu('tile')"><a href="#">タイル一覧を編集</a></li>
      <li :class="{current: $store.state.openAdminMenu === 'construction'}" @click="changeEditMenu('construction')"><a href="#">建設例一覧を編集</a></li>
      <li :class="{current: $store.state.openAdminMenu === 'topic'}" @click="changeEditMenu('topic')"><a href="#">お知らせを編集</a></li>
      <li :class="{current: $store.state.openAdminMenu === 'questions'}" @click="changeEditMenu('questions')"><a href="#">よくある質問</a></li>
    </ul>
    <div v-if="$store.state.openAdminMenu == 'tile'">
      <edit-tiles></edit-tiles>
    </div>
    <div v-if="$store.state.openAdminMenu == 'construction'">
      <edit-construction></edit-construction>
    </div>
    <div v-if="$store.state.openAdminMenu == 'topic'">
      <edit-topic></edit-topic>
    </div>
  </div>
</template>

<script>
import Mixin from '../../mixin'
import bodyHeader from '@/components/header.vue'
import editTiles from './editTiles'
import editConstruction from './editConstruction'
import editTopic from './topic'
export default {
  name: 'editHome',
  mixins: [Mixin],
  components: {
    bodyHeader,
    editTiles,
    editConstruction,
    editTopic
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#editMenuNav{
  display: table;
  margin: 20px auto;
  padding: 0 ;
  width: 80%;
  text-align: center;
}
#editMenuNav li{
  display: table-cell;
  min-width: 50px;
}
#editMenuNav a{
  display: block;
  width: 100%;
  text-decoration: none;
  color: #555;
  padding-bottom: 5px;
}
#editMenuNav li.current{
  border-bottom: 3px solid rgba(63, 140, 143, 0.747);
}
#editMenuNav li:hover{
  color: #E7DA66;
  border-bottom: 3px solid rgba(238, 240, 152, 0.747);
}
.edit {
  margin-top: 16px;
}
.editTr {
  height: 150px;
}
.editTitle {
  width: 200px;
}
.editScript{
  width: 40%;
}
.editImg {
  width: 200px;
}
.tilesTable, .constructionsTable {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.inputEria, .itemEditEria{
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  padding: 32px;
  width: 60%;
  background-color: rgba(169, 226, 228, 0.274);
}
#closeEditBtn {
  float: right;
  margin-right: 20px;
  font-weight: bold;
}
#closeEditBtn:hover {
  cursor: pointer;
  color: rgb(56, 56, 56);
  font-size: 20px;
}
</style>
