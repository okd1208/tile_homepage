<template>
  <div>
    <body-header>編集ページ</body-header>
    <ul id="nav">
      <li @click="changeEditMenu('tile')">タイル一覧を編集</li>
      <li @click="changeEditMenu('construction')">建設例一覧を編集</li>
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

#nav li:hover {
  cursor: pointer;
}
</style>
