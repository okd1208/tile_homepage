import firebase from 'firebase'
export default {
  data: function () {
    return {
      db: null,
      tilesRef: null,
      constructionsRef: null,
      newtileName: null,
      newConstructionName: null,
      fotoURL: null,
      // fotoCURL: null,
      text: null,
      // textConstruction: null,
      error_message: null,
      tiles: {},
      constructions: {},
      storage: null,
      storageRef: null,
      ref: null,
      imgURL: null,
      editKey: null,
      editable: false
    }
  },
  created () {
    this.storage = firebase.storage()
    this.storageRef = this.storage.ref()
    this.db = firebase.firestore()
    // タイル編集
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
    // 建設編集
    this.constructionsRef = this.db.collection('constructions')
    this.constructionsRef.orderBy('total').limit(3)
    this.constructionsRef.onSnapshot(querySnapshot => {
      const obj = {}
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data()
        console.log(obj[doc.id].total)
      })
      this.constructions = obj
      var constructionkey = Object.keys(obj)
      console.log(constructionkey)
    })
  },
  methods: {
    addtile () {
      if (this.newtileName === '' ||
       this.text === '') {
        console.log('空です')
        this.error_message = '空の値があります'
        return
      }
      this.error_message = null
      this.tilesRef.add({
        name: this.newtileName,
        fotoURL: this.fotoURL,
        text: this.text
      })
      alert('タイルを追加しました。')
      this.newtileName = ''
      this.text = ''
      this.fotoURL = ''
      document.getElementById('foto').textContent = ''
    },
    addConstruction () {
      if (this.newConstructionName === '' ||
       this.text === '') {
        console.log('空です')
        this.error_message = '空の値があります'
        return
      }
      this.error_message = null
      this.constructionsRef.add({
        name: this.newConstructionName,
        fotoURL: this.fotoURL,
        text: this.text
      })
      alert('タイルを追加しました。')
      this.newConstructionName = ''
      this.text = ''
      this.fotoURL = ''
      document.getElementById('foto').textContent = ''
    },
    tileFotoUp () {
      var files = document.getElementById('btnUpload').files
      var image = files[0]
      this.ref = firebase.storage().ref().child('images/tiles/' + this.newtileName)
      var refClone = this.ref
      this.ref.put(image).then(function (snapshot) {
        alert('アップロードしました')
        refClone.getDownloadURL().then((downloadURL) => {
          document.getElementById('image').src = downloadURL
          document.getElementById('foto').textContent = downloadURL
        })
      })
    },
    constructionFotoUp () {
      var files = document.getElementById('btnUpload').files
      var image = files[0]
      this.ref = firebase.storage().ref().child('images/constructions/' + this.newtileName)
      var refClone = this.ref
      this.ref.put(image).then(function (snapshot) {
        alert('アップロードしました')
        refClone.getDownloadURL().then((downloadURL) => {
          document.getElementById('image').src = downloadURL
          document.getElementById('foto').textContent = downloadURL
        })
      })
    },
    removetile (key) {
      this.tilesRef.doc(key).delete()
    },
    removeConstruction (key) {
      this.constructionsRef.doc(key).delete()
    },
    selectEditItem (key) {
      this.editKey = key
      this.editable = true
    },
    upConstruction () {
      console.log(this.editKey)
      console.log(this.constructionsRef)
      this.constructionsRef.doc(this.editKey).update({
        name: this.newtileName,
        fotoURL: this.fotoURL,
        text: this.text
      })
      console.log('editKey')
    },
    closeEditEria () {
      this.editable = false
    }
  }
}
