import firebase from 'firebase'
// import moment from 'moment'
import {Tile} from './components/class/tile'
import {Construction} from './components/class/construction'
import {Topic} from './components/class/topic'
export default {
  data: function () {
    return {
      db: null,
      targetName: null,
      date: null,
      fotoURL: null,
      text: null,
      category: null,
      storageRef: null,
      tileData: null,
      consData: null,
      topicData: null,
      selectItemData: null,
      oldImagePath: null,
      storagePath: null,
      targetData: null,
      isLoading: false,
      imageUpError: null
    }
  },
  async created () {
    this.storageRef = firebase.storage().ref()
    this.db = firebase.firestore()
    this.tileData = new Tile(this.db)
    this.consData = new Construction(this.db)
    this.topicData = new Topic(this.db)
    await this.tileData.loadData()
    await this.consData.loadData()
    await this.topicData.loadData()
    if (this.$route.name === 'tile') {
      this.targetData = this.tileData
    } else if (this.$route.name === 'construction') {
      this.targetData = this.consData
    } else if (this.$route.name === 'topic') {
      this.targetData = this.topicData
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
      if (!this.targetName) {
        this.imageUpError = '名前から入力してください'
        return
      }
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
      } else if (this.$route.name === 'topic') {
        this.category = data.category
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
      this.imageUpError = null
      document.getElementById('image').src = null
    }
  },
  computed: {
    getNewData () {
      let data = {key: this.$store.state.editKey, name: this.targetName, text: this.text, path: this.storagePath}
      if (this.$route.name === 'construction') {
        data.date = this.date
      } else if (this.$route.name === 'topic') {
        data.category = this.category
      }
      return data
    }
  }
}
