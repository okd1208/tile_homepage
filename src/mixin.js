import firebase from 'firebase'
// import moment from 'moment'
export default {
  data: function () {
    return {
      db: null,
      tilesRef: null,
      constructionsRef: null,
      targetName: null,
      date: null,
      fotoURL: null,
      text: null,
      error_message: null,
      tiles: {},
      constructions: {},
      storage: null,
      storageRef: null,
      ref: null,
      imgURL: null,
      downloadURL: null,
      editKey: null,
      isOpen: 'tile',
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
      })
      this.constructions = obj
      var constructionkey = Object.keys(obj)
      console.log(constructionkey)
    })
  },
  methods: {
    changeEditMenu (clickMenu) {
      this.isOpen = clickMenu
    },
    getDate (timestamp) {
      var date = timestamp.toDate()
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    },
    addDB (editType) {
      if (editType === 'tile') {
        if (this.targetName === '' || this.text === '') {
          this.error_message = '空の値があります'
          return
        }
        this.error_message = null
        this.tilesRef.add({
          name: this.targetName,
          fotoURL: document.getElementById('image').src,
          text: this.text,
          created: new Date()
        })
        alert('タイルを追加しました。')
        this.clearEditEria()
      } else if (editType === 'construction') {
        if (this.targetName === '' || this.text === '') {
          this.error_message = '空の値があります'
          return
        }
        this.error_message = null
        // yyyy-mm-ddなので2回す
        this.date = this.date.replace('-', '/')
        this.date = this.date.replace('-', '/')
        this.constructionsRef.add({
          name: this.targetName,
          fotoURL: document.getElementById('image').src,
          text: this.text,
          date: this.date,
          created: new Date()
        })
        alert('タイルを追加しました。')
        this.clearEditEria()
      }
    },
    fotoUp (inputFileId, openMenu) {
      var image
      var files
      var refClone
      // 本当は第二引数を取らずにisPpenで分岐したいがなぜか値が更新されていないので一旦これで
      if (openMenu === 'tile') {
        document.getElementById('loading').classList.remove('invisible')
        files = document.getElementById(inputFileId).files
        image = files[0]
        this.ref = firebase.storage().ref().child('images/tiles/' + this.targetName)
        refClone = this.ref
        this.ref.put(image).then(function (snapshot) {
          alert('アップロードしました')
          refClone.getDownloadURL().then((downloadURL) => {
            document.getElementById('image').src = downloadURL
            document.getElementById('loading').classList.add('invisible')
          })
        })
      } else if (openMenu === 'construction') {
        document.getElementById('loading').classList.remove('invisible')
        files = document.getElementById(inputFileId).files
        image = files[0]
        this.ref = firebase.storage().ref().child('images/constructions/' + this.targetName)
        refClone = this.ref
        this.ref.put(image).then(function (snapshot) {
          alert('アップロードしました')
          refClone.getDownloadURL().then((downloadURL) => {
            document.getElementById('image').src = downloadURL
            document.getElementById('loading').classList.add('invisible')
          })
        })
      }
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
      }
    },
    selectEditItem (key, editMenu) {
      this.editKey = key
      this.editable = true
      if (editMenu === 'cons') {
        this.targetName = this.constructions[key].name
        this.fotoURL = this.constructions[key].fotoURL
        this.text = this.constructions[key].text
        this.date = this.constructions[key].date
        document.getElementById('image').src = this.constructions[key].fotoURL
      } else if (editMenu === 'tile') {
        this.targetName = this.tiles[key].name
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
      if (editMenu === 'construction') {
        // yyyy-mm-ddなので2回す
        this.date = this.date.replace('-', '/')
        this.date = this.date.replace('-', '/')
        this.constructionsRef.doc(this.editKey).update({
          name: this.targetName,
          fotoURL: document.getElementById('image').src,
          text: this.text,
          date: this.date
        })
      } else if (editMenu === 'tile') {
        this.tilesRef.doc(this.editKey).update({
          name: this.targetName,
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
      this.targetName = ''
      this.text = ''
      this.date = ''
      this.fotoURL = ''
      document.getElementById('image').src = null
    }
  }
}
