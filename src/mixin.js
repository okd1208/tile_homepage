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
    getDate (timestamp) {
      const date = timestamp.toDate()
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    },
    fotoUp (e) {
      const image = e.target.files[0]
      document.getElementById('loading').classList.remove('invisible')
      let ref = this.storageRef.child('images/' + this.$route.name + 's/' + this.targetName)
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
      if (this.$route.name === 'construction') {
        this.date = data.date.replace(/\//g, '-')
      }
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
