<template>
  <div class="edit">
    <div v-if="$store.state.error_message">
      {{ $store.state.error_message }}
    </div>
    <table class="tilesTable" border="1">
      <tr>
        <th class="editTitle">タイトル</th>
        <th class="editScript">内容</th>
        <!-- <th class="editURL">URL</th> -->
        <th class="editImg">画像</th>
      </tr>
      <tr class="editTr" v-for="(topic,key) in topics" :key="key">
        <td>{{ topic.name }}</td>
        <td>{{ topic.text }}</td>
        <!-- <td>{{ topic.fotoURL }}</td> -->
        <td><img :src="topic.fotoURL" width="90%"></td>
        <button @click="removetopic(key)">削除</button>
        <button @click="selectEditItem(key,'topic')">編集</button>
      </tr>
    </table>

    <form class="itemEditEria" :class="{uneditable: !editable}">
      <p id="closeEditBtn"><button @click="closeEditEria()">X</button></p>
      <h3>編集</h3>
      <div class="cp_iptxt">
        <input v-model="newTopicName" class="ef" placeholder="" type="text" />
        <label>タイトル</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt cp_textarea">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <input type="file" @change="topicFotoUp('newFileUp')" id="newFileUp" value="アップロード">
      </div>
      <p href="#" class="btn04" @click="update('tile')">編集</p>
    </form>

    <form class="itemEditEria" :class="{uneditable: editable}">
      <h3>新規登録</h3>
      <div class="cp_iptxt">
        <input v-model="newtileName" class="ef" placeholder="" type="text" />
        <label>タイル名</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt cp_textarea">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt">
        <input type="file" @change="fotoUp('newFileUp')" id="newFileUp" value="アップロード">
      </div>
      <p href="#" class="btn04" @click="addtile()">登録</p>
    </form>
      <img src="" id="image" width="30%">
  </div>
</template>
<script>
import Mixin from '../../mixin'
export default {
  name: 'topic',
  mixins: [Mixin],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
