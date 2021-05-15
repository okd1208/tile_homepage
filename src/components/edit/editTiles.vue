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
        <th class="editDate">日付</th>
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(tile,key) in tiles" :key="key">
        <td>{{ tile.name }}</td>
        <td>{{ tile.text }}</td>
        <td>作成日：{{ getDate(tile.created) }}</td>
        <!-- <td>{{ tile.fotoURL }}</td> -->
        <td><img :src="tile.fotoURL" width="90%"></td>
        <button @click="removetile(key)">削除</button>
        <button @click="selectEditItem(key,'tile')">編集</button>
      </tr>
    </table>

    <form class="itemEditEria" :class="{uneditable: !editable}">
      <p id="closeEditBtn"><button @click="closeEditEria()">X</button></p>
      <h3>編集</h3>
      <div class="cp_iptxt">
        <input v-model="newtileName" class="ef" placeholder="" type="text" />
        <label>タイル名</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <input type="file" @change="fotoUp('editFileUp', 'tile')" id="editFileUp" value="アップロード">
      </div>
      <loading-ui></loading-ui>
      <p href="#" class="btn04" @click="update('tile')">編集</p>
    </form>

    <form class="itemEditEria" :class="{uneditable: editable}">
      <h3>新規登録</h3>
      <div class="cp_iptxt">
        <input v-model="newtileName" class="ef" placeholder="" type="text" />
        <label>タイル名</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <input type="file" @change="fotoUp('newFileUp', 'tile')" id="newFileUp" value="アップロード">
      </div>
      <loading-ui></loading-ui>
      <p href="#" class="btn04" @click="addtile()">登録</p>
    </form>
      <img src="" id="image" width="30%">
  </div>
</template>

<script>
import Mixin from '../../mixin'
import loadingUi from '../parts/loadingUI'
export default {
  components: { loadingUi },
  name: 'editTiles',
  mixins: [Mixin],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
