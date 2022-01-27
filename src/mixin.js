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
      consData: null,
      selectItemData: null,
      oldImagePath: null,
      storagePath: null,
      targetData: null,
      isLoading: false
    }
  },
  async created () {
    this.storageRef = firebase.storage().ref()
    this.db = firebase.firestore()
    this.tileData = new Tile(this.db)
    this.consData = new Construction(this.db)
    await this.tileData.loadData()
    await this.consData.loadData()
    if (this.$route.name === 'tile') {
      this.targetData = this.tileData
    } else if (this.$route.name === 'construction') {
      this.targetData = this.consData
    }
  },
  watch: {
  },
  methods: {
    addData () {
      this.targetData.addData(this.getNewData)
      this.clearEditEria()
    },
    update () {
      if (this.oldImagePath) {
        this.imageDelete(this.oldImagePath)
      }
      this.targetData.update(this.getNewData)
      this.closeEditEria()
    },
    remove (key, path) {
      if (path) {
        this.imageDelete(path)
      }
      this.targetData.remove(key)
    },
    getDate (timestamp) {
      const date = timestamp.toDate()
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    },
    async imageUp (e) {
      const path = 'images/' + this.$route.name + 's/' + this.targetName
      if (this.storagePath && (this.selectItemData.storagePath !== path)) {
        this.oldImagePath = this.storagePath
      }
      this.storagePath = path
      const image = e.target.files[0]
      this.isLoading = true
      let ref = this.storageRef.child(this.storagePath)
      await ref.put(image).then(function (snapshot) {
        ref.getDownloadURL().then((downloadURL) => {
          document.getElementById('image').src = downloadURL
        })
      })
      this.isLoading = false
    },
    async imageDelete (path) {
      let ref = this.storageRef.child(path)
      await ref.delete()
    },
    selectEditItem (data) {
      this.selectItemData = data
      this.targetName = data.name
      this.fotoURL = data.fotoURL
      this.text = data.text
      this.storagePath = data.storagePath
      document.getElementById('image').src = data.fotoURL
      if (this.$route.name === 'construction') {
        this.date = data.date.replace(/\//g, '-')
      }
      console.log(this.getNewData)
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
      this.selectItemData = null
      this.storagePath = null
      this.oldImagePath = null
      document.getElementById('image').src = null
    }
  },
  computed: {
    getNewData () {
      if (this.$route.name === 'tile') {
        return {key: this.$store.state.editKey, name: this.targetName, text: this.text, path: this.storagePath}
      } else if (this.$route.name === 'construction') {
        return {key: this.$store.state.editKey, name: this.targetName, text: this.text, path: this.storagePath, date: this.date}
      }
    }
  }
}
