<template>
  <div>
    <content-title>
      <template v-slot:mainTitle>編集ページ</template>
      <template v-slot:subTitle>edit</template>
    </content-title>
    <ul id="editMenuNav">
      <li :class="{current: $route.name === 'tile'}"><router-link to="/admin/tile">タイル一覧を編集</router-link></li>
      <li :class="{current: $route.name === 'construction'}"><router-link to="/admin/construction">建設例一覧を編集</router-link></li>
      <li :class="{current: $route.name === 'topic'}"><router-link to="/admin/topic">お知らせを編集</router-link></li>
    </ul>
    <p><router-link to="/">編集画面を抜ける</router-link></p>
    <router-view />
  </div>
</template>

<script>
import Mixin from '../../mixin'
import contentTitle from '@/components/contentTitle'
import editTiles from './editTiles'
import editConstruction from './editConstruction'
import editTopic from './editTopic'
export default {
  name: 'editHome',
  mixins: [Mixin],
  components: {
    contentTitle,
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
