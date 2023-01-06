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
  min-height: 100vh;
  background-color: rgb(243, 243, 243);
  padding: 48px 0;
}
.edit tr {
  border-bottom: 2px solid rgb(221, 221, 221);
}
.edit-item:hover {
  cursor: pointer;
  color: rgb(0, 153, 255);
}
.delete-btn {
  line-height: 150px;
  min-width: 32px;
}
.delete-btn:hover {
  cursor: pointer;
  color: rgb(236, 31, 8);
}
.editTr {
  height: 150px;
}
.editDate {
  width: 200px;
}
.editScript{
  width: 40%;
}
.editImg {
  width: 200px;
}
.tilesTable, .constructionsTable {
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.inputEria, .itemEditEria{
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  padding: 32px;
  width: 80%;
  background-color: rgb(255, 255, 255);
}
#closeEditBtn {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 32px;
  background: rgb(255, 75, 75);
  border-radius: 50%;
  transition: 0.4s;
}
#closeEditBtn::before, #closeEditBtn::after {
  content: "";
  position: absolute;
  top: 45%;
  left: 19%;
  width: 20px;
  height: 4px;
  background: rgb(250, 250, 250);
}
#closeEditBtn::before {
  transform: rotate(135deg);
}
#closeEditBtn::after {
  transform: rotate(45deg);
}

#closeEditBtn:hover {
  cursor: pointer;
  background: rgba(255, 75, 75, 0.5);
  transition: 0.4s;
}
.admin-header {
  background-color: rgb(211, 211, 211);
  padding: 12px 24px;
  text-align: right;
  /* min-height: 42px; */
  /* color: white; */
}
</style>
