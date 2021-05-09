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
      downloadURL: null,
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
        fotoURL: document.getElementById('image').src,
        text: this.text
      })
      alert('タイルを追加しました。')
      this.clearEditEria()
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
        fotoURL: document.getElementById('image').src,
        text: this.text
      })
      alert('タイルを追加しました。')
      this.clearEditEria()
    },
    tileFotoUp (inputFileId) {
      document.getElementById('loading').classList.remove('invisible')
      var files = document.getElementById(inputFileId).files
      var image = files[0]
      this.ref = firebase.storage().ref().child('images/tiles/' + this.newtileName)
      var refClone = this.ref
      this.ref.put(image).then(function (snapshot) {
        alert('アップロードしました')
        refClone.getDownloadURL().then((downloadURL) => {
          document.getElementById('image').src = downloadURL
          document.getElementById('loading').classList.add('invisible')
        })
      })
    },
    constructionFotoUp (inputFileId) {
      document.getElementById('loading').classList.remove('invisible')
      var files = document.getElementById(inputFileId).files
      var image = files[0]
      this.ref = firebase.storage().ref().child('images/constructions/' + this.newConstructionName)
      var refClone = this.ref
      this.ref.put(image).then(function (snapshot) {
        alert('アップロードしました')
        refClone.getDownloadURL().then((downloadURL) => {
          document.getElementById('image').src = downloadURL
          document.getElementById('loading').classList.add('invisible')
        })
      })
    },
    removetile (key) {
      var result = window.confirm(this.tiles[key].name + 'を削除しますか？')
      if (result) {
        this.tilesRef.doc(key).delete()
        alert('削除しました。')
      } else {
        alert('キャンセルしました。')
      }
    },
    removeConstruction (key) {
      var result = window.confirm(this.constructions[key].name + 'を削除しますか？')
      if (result) {
        this.constructionsRef.doc(key).delete()
        alert('削除しました。')
      } else {
        alert('キャンセルしました。')
      }
    },
    selectEditItem (key, editMenu) {
      this.editKey = key
      this.editable = true
      if (editMenu === 'cons') {
        this.newConstructionName = this.constructions[key].name
        this.fotoURL = this.constructions[key].fotoURL
        this.text = this.constructions[key].text
        document.getElementById('image').src = this.constructions[key].fotoURL
      } else if (editMenu === 'tile') {
        this.newtileName = this.tiles[key].name
        this.fotoURL = this.tiles[key].fotoURL
        this.text = this.tiles[key].text
        document.getElementById('image').src = this.tiles[key].fotoURL
      }
      var element = document.getElementById('image')
      var rect = element.getBoundingClientRect()
      var position = rect.top
      scrollBy(0, position - 700)
    },
    update (editMenu) {
      console.log(this.editKey)
      if (editMenu === 'cons') {
        this.constructionsRef.doc(this.editKey).update({
          name: this.newConstructionName,
          fotoURL: document.getElementById('image').src,
          text: this.text
        })
      } else if (editMenu === 'tile') {
        this.tilesRef.doc(this.editKey).update({
          name: this.newtileName,
          fotoURL: document.getElementById('image').src,
          text: this.text
        })
      }
      console.log('editKey')
      alert('変更しました。')
      this.clearEditEria()
      this.closeEditEria()
    },
    closeEditEria () {
      this.editable = false
      this.clearEditEria()
    },
    clearEditEria () {
      this.newConstructionName = ''
      this.newtileName = ''
      this.text = ''
      this.fotoURL = ''
      document.getElementById('image').src = null
    }
  }
}
