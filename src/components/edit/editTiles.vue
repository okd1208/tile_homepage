<template>
  <div class="edit">
    <div v-if="error_message">
      {{ error_message }}
    </div>
    <table class="tilesTable" border="1">
      <tr>
        <th class="editTitle">タイル名</th>
        <th class="editScript">説明</th>
        <!-- <th class="editURL">URL</th> -->
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(tile,key) in tiles" :key="key">
        <td>{{ tile.name }}</td>
        <td>{{ tile.text }}</td>
        <!-- <td>{{ tile.fotoURL }}</td> -->
        <td><img :src="tile.fotoURL" width="90%"></td>
        <button @click="removetile(key)">削除</button>
      </tr>
    </table>

    <div class="inputEria">
      <h3>タイル編集</h3>
      <p>タイル名<input v-model="newtileName" type="text" /></p>
      <p>説明<input v-model="text" type="text" /></p>
      <p>fotoURL<input v-model="fotoURL" id="fotoInput" type="text" /></p>
      <p>file<input type="file" name="フィールド名@squareWidth" id="btnUpload" value="アップロード"></p>
      <p id="foto"></p>
      <button @click="tileFotoUp()">画像を選択した</button>
      <button @click="addtile()">追加</button>
    </div>
    <!-- <button @click="fileConsole()">test</button> -->
    <!-- <div v-if="imgURL != null">
    </div> -->
      <img src="" id="image" width="30%">
  </div>
</template>

<script>
import Mixin from '../../mixin'
export default {
  name: 'editTiles',
  mixins: [Mixin],
  data () {
    return {
    }
  }
}
</script>

<style>
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
.tilesTable {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.inputEria{
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  padding-bottom: 32px;
  width: 60%;
  border: 1px solid black;
  border-radius: 30px;
}
.edit {
  margin-top: 100px;
}
</style>
