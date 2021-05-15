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
        <th class="editDate">日付</th>
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(Construction,key) in constructions" :key="key">
        <td>{{ Construction.name }}</td>
        <td>{{ Construction.text }}</td>
        <td>
          {{ Construction.date }}
          <p>作成日：{{ getDate(Construction.created) }}</p></td>
        <!-- <td>{{ Construction.fotoURL }}</td> -->
        <td><img :src="Construction.fotoURL" width="90%"></td>
        <button @click="removeConstruction(key)">削除</button>
        <button @click="selectEditItem(key,'cons')">編集</button>
      </tr>
    </table>

    <form class="itemEditEria" :class="{uneditable: !editable}">
      <p id="closeEditBtn"><button @click="closeEditEria()">X</button></p>
      <h3>編集</h3>
      <div class="cp_iptxt">
        <input v-model="newConstructionName" class="ef" placeholder="" type="text" />
        <label>建設工事名</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <label>日付: </label>
        <input v-model="date" rows="5" class="ef" type="date" required/>
      </div>
      <div class="cp_iptxt">
        <input @change="fotoUp('editFileUp', 'cons')" type="file" id="editFileUp" value="アップロード">
      </div>
      <p href="#" class="btn04" @click="update('cons')">編集</p>
    </form>

    <form class="itemEditEria" :class="{uneditable: editable}">
      <h3>新規追加</h3>
      <div class="cp_iptxt">
        <input v-model="newConstructionName" class="ef" placeholder="" type="text" />
        <label>建設工事名</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <label>日付: </label>
        <input v-model="date" rows="5" class="ef" type="date" required/>
      </div>
      <div class="cp_iptxt">
        <input type="file" @change="fotoUp('newFileUp', 'cons')" id="newFileUp" value="アップロード">
      </div>
      <loading-ui></loading-ui>
      <p href="#" class="btn04" @click="addConstruction()">登録</p>
    </form>
    <img src="" id="image" width="30%">
  </div>
</template>

<script>
import Mixin from '../../mixin'
import loadingUi from '../parts/loadingUI'
export default {
  components: { loadingUi },
  name: 'editConstructions',
  mixins: [Mixin],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
