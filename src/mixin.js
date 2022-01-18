import firebase from 'firebase'
// import moment from 'moment'
import {Tile} from './components/class/tile'
import {Construction} from './components/class/construction'
export default {
  data: function () {
    return {
      db: null,
      targetName: null,
      date: null,
      fotoURL: null,
      text: null,
      error_message: null,
      storageRef: null,
      ref: null,
      imgURL: null,
      downloadURL: null,
      editKey: null,
      isOpen: 'tile',
      editable: false,
      tileData: null,
      consData: null
    }
  },
  async created () {
    this.storageRef = firebase.storage().ref()
    this.db = firebase.firestore()
    this.tileData = new Tile(this.db)
    this.consData = new Construction(this.db)
    await this.tileData.loadData()
    await this.consData.loadData()
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
        this.tileData.tilesRef.add({
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
        this.consData.constructionsRef.add({
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
      var result = window.confirm(this.tileData.tiles[key].name + 'を削除しますか？')
      if (result) {
        this.tileData.tilesRef.doc(key).delete()
        alert('削除しました。')
      } else {
        alert('キャンセルしました。')
      }
    },
    removeConstruction (key) {
      var result = window.confirm(this.consData.constructions[key].name + 'を削除しますか？')
      if (result) {
        this.consData.constructionsRef.doc(key).delete()
        alert('削除しました。')
      }
    },
    selectEditItem (key, editMenu) {
      this.editKey = key
      this.editable = true
      if (editMenu === 'cons') {
        this.targetName = this.consData.constructions[key].name
        this.fotoURL = this.consData.constructions[key].fotoURL
        this.text = this.consData.constructions[key].text
        this.date = this.consData.constructions[key].date
        document.getElementById('image').src = this.consData.constructions[key].fotoURL
      } else if (editMenu === 'tile') {
        this.targetName = this.tileData.tiles[key].name
        this.fotoURL = this.tileData.tiles[key].fotoURL
        this.text = this.tileData.tiles[key].text
        document.getElementById('image').src = this.tileData.tiles[key].fotoURL
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
        this.consData.constructionsRef.doc(this.editKey).update({
          name: this.targetName,
          fotoURL: document.getElementById('image').src,
          text: this.text,
          date: this.date
        })
      } else if (editMenu === 'tile') {
        this.tileData.tilesRef.doc(this.editKey).update({
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
