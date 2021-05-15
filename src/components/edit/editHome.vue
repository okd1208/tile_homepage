<template>
  <div>
    <body-header>編集ページ</body-header>
    <ul id="editMenuNav">
      <li :class="{current: isOpen === 'tile'}" @click="changeEditMenu('tile')"><a href="#">タイル一覧を編集</a></li>
      <li :class="{current: isOpen === 'construction'}" @click="changeEditMenu('construction')"><a href="#">建設例一覧を編集</a></li>
      <li :class="{current: isOpen === 'topic'}" @click="changeEditMenu('topic')"><a href="#">お知らせを編集</a></li>
      <li :class="{current: isOpen === 'questions'}" @click="changeEditMenu('questions')"><a href="#">よくある質問</a></li>
    </ul>
    <div v-if="isOpen == 'tile'">
      <edit-tiles></edit-tiles>
    </div>
    <div v-if="isOpen == 'construction'">
      <edit-construction></edit-construction>
    </div>
    <div v-if="isOpen == 'topic'">
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
  // methods: {
  //   changeEditMenu (clickMenu) {
  //     this.isOpen = clickMenu
  //   }
  // }
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
.uneditable {
  display: none;
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

/* inputタグモーション */
.cp_iptxt {
  position: relative;
  width: 80%;
  margin: 40px 3%;
  text-align: left;
}
.cp_iptxt input[type='text'] {
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: 1px;
  padding-left: 7em;
}
.cp_iptxt textarea[type='text'] {
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: 1px;
  padding-left: 7em;
}
.cp_iptxt input[type='text']:focus {
  outline: none;
}
.cp_iptxt textarea[type='text']:focus {
  outline: none;
}
.ef {
  padding: 7px 14px;
  transition: 0.4s;
  border: 1px solid #1b2538;
  background: transparent;
}
.ef ~ .focus_line:before,
.ef ~ .focus_line:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  content: '';
  transition: 0.3s;
  background-color: #da3c41;
}
.ef ~ .focus_line:after {
  top: auto;
  right: 0;
  bottom: 0;
  left: auto;
}
.ef ~ .focus_line i:before,
.ef ~ .focus_line i:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 0;
  content: '';
  transition: 0.4s;
  background-color: #da3c41;
}
.ef ~ .focus_line i:after {
  top: auto;
  right: 0;
  bottom: 0;
  left: auto;
}
.ef:focus ~ .focus_line:before,
.ef:focus ~ .focus_line:after,
.cp_iptxt.ef ~ .focus_line:before,
.cp_iptxt.ef ~ .focus_line:after {
  width: 100%;
  transition: 0.3s;
}
.ef:focus ~ .focus_line i:before,
.ef:focus ~ .focus_line i:after,
.cp_iptxt.ef ~ .focus_line i:before,
.cp_iptxt.ef ~ .focus_line i:after {
  height: 100%;
  transition: 0.4s;
}
.ef ~ label {
  position: absolute;
  z-index: -1;
  top: 10px;
  left: 14px;
  width: 100%;
  transition: 0.3s;
  letter-spacing: 0.5px;
  color: #aaaaaa;
}
.ef:focus ~ label,
.cp_iptxt.ef ~ label {
  font-size: 12px;
  top: -18px;
  left: 0;
  transition: 0.3s;
  color: #da3c41;
}
.btn04{
  display: inline-block;
  width: 180px;
  text-align: center;
  background: linear-gradient(90deg, rgb(22, 135, 237), rgb(153, 202, 250));
  background-size: 200%;
  color: #FFF;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  padding: 16px;
  border-radius: 4px;
  transition: .4s;
}
.btn04:hover {
  background-position: right center;
}
</style>
