<template>
  <dev>
    <p>{{hello}}</p>
    <p>aaaaaaa</p>
    <div class="someTile">
    </div>
  </dev>
</template>

<script>
import firebase from 'firebase'
import Mixin from '../../mixin'
export default {
  name: 'someTile',
  mixins: [Mixin],
  data: function () {
    return {
      db: null,
      tilesRef: null,
      newtileName: null,
      fotoURL: null,
      text: null,
      error_message: null,
      tiles: {},
      storage: null,
      storageRef: null,
      ref: null,
      imgURL: null
    }
  },
  created () {
    this.storage = firebase.storage()
    this.storageRef = this.storage.ref()
    this.db = firebase.firestore()
    this.tilesRef = this.db.collection('tiles')
    this.tilesRef.orderBy('total').limit(3)
    this.tilesRef.onSnapshot(querySnapshot => {
      const obj = {}
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data()
      })
      this.tiles = obj
      var key = Object.keys(obj)
    })
  }
}
</script>

<style>
</style>
