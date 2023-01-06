<template>
  <div class="flex">
    <div class="sidebar">
      <h3>Admin Page</h3>
      <ul id="editMenuNav">
        <li :class="{current: $route.name === 'tile'}"><router-link to="/admin/tile">タイル一覧を編集</router-link></li>
        <li :class="{current: $route.name === 'construction'}"><router-link to="/admin/construction">建設例一覧を編集</router-link></li>
        <li :class="{current: $route.name === 'topic'}"><router-link to="/admin/topic">お知らせを編集</router-link></li>
        <li><router-link to="/">編集画面を抜ける</router-link></li>
      </ul>
    </div>
    <div>
      <div class="admin-header">
        <p>user :{{ $store.state.userEmail }}</p>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Mixin from '../../mixin'
import editTiles from './editTiles'
import editConstruction from './editConstruction'
import editTopic from './editTopic'
export default {
  name: 'editHome',
  mixins: [Mixin],
  components: {
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
.flex {
  display: flex;
  align-items: stretch;
}
.flex > div {
  flex-grow: 1;
}
.sidebar {
  padding: 24px 0;
  min-width: 240px;
  max-width: 240px;
  background-color: #555;
}
.sidebar > h3 {
  color: #a8f5cf;
}
#editMenuNav{
  padding: 0;
  text-align: left;
}
#editMenuNav li{
  padding: 12px;
  list-style: none;
  min-width: 50px;
}
#editMenuNav a{
  display: block;
  width: 100%;
  text-decoration: none;
  color: white;
  /* padding-bottom: 5px; */
}
#editMenuNav li.current{
  background-color: rgb(68, 67, 67);
  border-left: 3px solid rgba(63, 140, 143, 0.747);
}
#editMenuNav li:hover{
  color: #E7DA66;
  border-left: 3px solid rgba(238, 240, 152, 0.747);
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
.admin-header {
  background-color: rgb(211, 211, 211);
  padding: 12px 24px;
  text-align: right;
  /* min-height: 42px; */
  /* color: white; */
}
</style>
