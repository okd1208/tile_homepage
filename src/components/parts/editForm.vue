<template>
  <div>
    <form class="itemEditEria" v-if="$store.state.editKey">
      <p id="closeEditBtn"><button @click="closeEditEria()">X</button></p>
      <h3>編集</h3>
      <div class="cp_iptxt">
        <input v-model="targetName" class="ef" placeholder="" type="text" />
        <label>名前</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt cp_textarea">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div v-if="editType === 'construction'" class="cp_iptxt">
        <label>日付: </label>
        <input v-model="date" rows="5" class="ef" type="date" required/>
      </div>
      <div class="cp_iptxt">
        <input type="file" @change="fotoUp" id="file-up-input" value="アップロード">
      </div>
      <loading-ui></loading-ui>
      <p href="#" class="btn04" @click="update(editType)">編集</p>
    </form>

    <form class="itemEditEria" v-else-if="!$store.state.editKey">
      <h3>新規登録</h3>
      <div class="cp_iptxt">
        <input v-model="targetName" class="ef" placeholder="" type="text" />
        <label>名前</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div class="cp_iptxt cp_textarea">
        <textarea v-model="text" rows="5" class="ef" type="text" required/>
        <label>内容説明文</label>
        <span class="focus_line"><i></i></span>
      </div>
      <div v-if="editType === 'construction'" class="cp_iptxt">
        <label>日付: </label>
        <input v-model="date" rows="5" class="ef" type="date" required/>
      </div>
      <div class="cp_iptxt">
        <input type="file" @change="fotoUp" id="file-up-input" value="アップロード">
      </div>
      <loading-ui></loading-ui>
      <p v-if="editType === 'tile'" href="#" class="btn04" @click="tileData.addData(targetName, text)">登録</p>
      <p v-else-if="editType === 'construction'" href="#" class="btn04" @click="consData.addData(targetName, text, date)">登録</p>
    </form>
      <img src="" id="image" width="30%">
  </div>
</template>

<script>
import Mixin from '../../mixin'
import loadingUi from './loadingUI.vue'
export default {
  components: { loadingUi },
  name: 'editTiles',
  props: ['editType'],
  mixins: [Mixin],
  data () {
    return {
      targetName: null,
      text: null,
      date: null
    }
  },
  methods: {
    selectItem (data) {
      this.selectEditItem(data)
    }
  }
}
</script>

<style>

/* inputタグモーション */
.cp_iptxt {
  position: relative;
  width: 80%;
  margin: 40px 3%;
  text-align: left;
}
.cp_textarea {
  height: 200px;
}
.cp_textarea > textarea{
  height: 100%;
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
