<template>
  <div>
    <body-header>編集ページ</body-header>
    <ul id="nav">
      <li :class="{openMenu: isOpen === 'tile'}" @click="changeEditMenu('tile')">タイル一覧を編集</li>
      <li :class="{openMenu: isOpen === 'construction'}" @click="changeEditMenu('construction')">建設例一覧を編集</li>
      <li>お知らせを編集</li>
      <li>よくある質問</li>
    </ul>
    <div v-if="isOpen == 'tile'">
      <edit-tiles></edit-tiles>
    </div>
    <div v-if="isOpen == 'construction'">
      <edit-construction></edit-construction>
    </div>
  </div>
</template>

<script>
import bodyHeader from '@/components/header.vue'
import editTiles from './editTiles'
import editConstruction from './editConstruction'
export default {
  name: 'editHome',
  components: {
    bodyHeader,
    editTiles,
    editConstruction
  },
  data () {
    return {
      isOpen: 'tile'
    }
  },
  methods: {
    changeEditMenu (clickMenu) {
      this.isOpen = clickMenu
    }
  }
}
</script>

<style>
#nav {
  list-style: none;
  overflow: hidden;
  padding: 0;
}

#nav li {
  /* width: 140px; */
  text-align: center;
  background-color: #333;
  float: left;
  margin: 4px;
  /* margin-left: 0; */
  width: 24%;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.openMenu {
  color: red;
  height: 100px;
  line-height: 100px;
}

#nav li:hover {
  cursor: pointer;
}

.editTr {
  height: 150px;
  margin-top: 100px;
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
.edit {
  margin-top: 100px;
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
.edit {
  margin-top: 100px;
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
