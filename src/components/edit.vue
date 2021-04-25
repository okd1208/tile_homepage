<template>
  <div class="edit">
    <div v-if="error_message">
      {{ error_message }}
    </div>
    <table class="tilesTable" border="1">
      <tr>
        <th>タイル名</th>
        <th>写真</th>
        <th>説明</th>
      </tr>
      <tr v-for="(tile,key) in tiles" :key="key">
        <td>{{ tile.name }}</td>
        <td>{{ tile.foto }}</td>
        <td>{{ tile.text }}</td>
        <button @click="removetile(key)">削除</button>
      </tr>
    </table>

    <div class="inputEria">
      <h3>タイル編集</h3>
      <p>タイル名<input v-model="newtileName" type="text" /></p>
      <p>写真<input v-model="foto" type="text" /></p>
      <p>説明<input v-model="text" type="number" /></p>
      <button @click="addtile()">追加</button>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'edit',
  data () {
    return {
      db: null,
      tilesRef: null,
      newtileName: null,
      foto: null,
      text: null,
      error_message: null,
      tiles: {}
    }
  },
  created () {
    this.db = firebase.firestore()
    this.tilesRef = this.db.collection('tiles')
    this.tilesRef.orderBy('total').limit(3)
    this.tilesRef.onSnapshot(querySnapshot => {
      const obj = {}
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data()
        console.log(obj[doc.id].total)
      })
      this.tiles = obj
      var key = Object.keys(obj)
      console.log(key)
    })
  },
  methods: {
    addtile () {
      if (this.newtileName === '' ||
       this.foto === '' ||
       this.text === '' ||
       this.security === '') {
        console.log('空です')
        this.error_message = '空の値があります'
        return
      }
      this.error_message = null
      this.tilesRef.add({
        name: this.newtileName,
        foto: this.foto,
        text: this.text
      })
    },
    removetile (key) {
      this.tilesRef.doc(key).delete()
    }
  }
}
</script>

<style>
.tilesTable {
  margin-left: auto;
  margin-right: auto;
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.edit {
  margin-top: 100px;
}
</style>
