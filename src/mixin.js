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
      storageRef: null,
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
  watch: {
  },
  methods: {
    changeEditMenu (clickMenu) {
      this.$store.state.openAdminMenu = clickMenu
    },
    getDate (timestamp) {
      var date = timestamp.toDate()
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    },
    fotoUp (e) {
      var image = e.target.files[0]
      document.getElementById('loading').classList.remove('invisible')
      let ref = this.storageRef.child('images/' + this.$store.state.openAdminMenu + 's/' + this.targetName)
      ref.put(image).then(function (snapshot) {
        alert('アップロードしました')
        ref.getDownloadURL().then((downloadURL) => {
          document.getElementById('image').src = downloadURL
          document.getElementById('loading').classList.add('invisible')
        })
      })
    },
    selectEditItem (data) {
      this.targetName = data.name
      this.fotoURL = data.fotoURL
      this.text = data.text
      document.getElementById('image').src = data.fotoURL
      if (this.$store.state.openAdminMenu === 'construction') {
        this.date = data.date
      }
    },
    update () {
      if (this.$store.state.openAdminMenu === 'construction') {
        // yyyy-mm-ddなので2回す
        this.date = this.date.replace('-', '/')
        this.date = this.date.replace('-', '/')
        this.consData.constructionsRef.doc(this.$store.state.editKey).update({
          name: this.targetName,
          fotoURL: document.getElementById('image').src,
          text: this.text,
          date: this.date
        })
      } else if (this.$store.state.openAdminMenu === 'tile') {
        this.tileData.tilesRef.doc(this.$store.state.editKey).update({
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
      this.$store.state.editKey = null
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
