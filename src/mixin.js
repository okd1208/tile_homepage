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

    if (this.$store.state.topicData) {
      this.topicData = this.$store.state.topicData
    } else {
      this.topicData = new Topic(this.db)
      await this.topicData.loadData()
      this.$store.state.topicData = this.topicData
    }

    if (this.$store.state.tileData) {
      this.tileData = this.$store.state.tileData
    } else {
      this.tileData = new Tile(this.db)
      await this.tileData.loadData()
      this.$store.state.tileData = this.tileData
    }

    if (this.$store.state.consData) {
      this.consData = this.$store.state.consData
    } else {
      this.consData = new Construction(this.db)
      await this.consData.loadData()
      this.$store.state.consData = this.consData
    }

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
      if (data.category) {
        this.category = data.category
      }
      if (data.date) {
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
      this.category = null
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
      if (this.category) {
        data.category = this.category
      }
      if (this.date) {
        data.date = this.date
      }
      return data
    }
  }
}
