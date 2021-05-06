<template>
  <div class="edit">
    <div v-if="error_message">
      {{ error_message }}
    </div>
    <p>※写真のサイズは３：２</p>
    <table class="constructionsTable" border="1">
      <tr>
        <th class="editTitle">建設工事名</th>
        <th class="editScript">説明</th>
        <!-- <th class="editURL">URL</th> -->
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(Construction,key) in constructions" :key="key">
        <td>{{ Construction.name }}</td>
        <td>{{ Construction.text }}</td>
        <!-- <td>{{ Construction.fotoURL }}</td> -->
        <td><img :src="Construction.fotoURL" width="90%"></td>
        <button @click="removeConstruction(key)">削除</button>
        <button @click="selectEditItem(key)">編集</button>
      </tr>
    </table>

    <div class="itemEditEria" :class="{uneditable: !editable}">
      <p id="closeEditEria"><button @click="closeEditEria()">X</button></p>
      <h3>建設工事編集</h3>
      <p>建設工事名<input v-model="newConstructionName" type="text" /></p>
      <p>説明<input v-model="text" type="text" /></p>
      <p>fotoURL<input v-model="fotoURL" id="fotoInput" type="text" /></p>
      <p>file<input type="file" name="フィールド名@squareWidth" id="btnUpload" value="アップロード"></p>
      <p id="foto"></p>
      <button @click="constructionFotoUp()">画像を選択した</button>
      <button @click="upConstruction(key)">追加</button>
    </div>

    <div class="inputEria">
      <h3>建設工事例追加</h3>
      <p>建設工事名<input v-model="newConstructionName" type="text" /></p>
      <p>説明<input v-model="text" type="text" /></p>
      <p>fotoURL<input v-model="fotoURL" id="fotoInput" type="text" /></p>
      <p>file<input type="file" name="フィールド名@squareWidth" id="btnUpload" value="アップロード"></p>
      <p id="foto"></p>
      <button @click="constructionFotoUp()">画像を選択した</button>
      <button @click="addConstruction()">追加</button>
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
  name: 'editConstructions',
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
.constructionsTable {
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
  padding-bottom: 32px;
  width: 60%;
  border: 1px solid black;
  border-radius: 30px;
}
.edit {
  margin-top: 100px;
}
#closeEditEria {
  float: right;
  margin-right: 20px;
  font-weight: bold;
}
#closeEditEria:hover {
  cursor: pointer;
  color: rgb(56, 56, 56);
  font-size: 20px;
}
</style>
