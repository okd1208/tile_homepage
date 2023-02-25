export class Topic {
  constructor (db) {
    this.topicsRef = db.collection('topics')
    this.topics = null
  }

  async loadData () {
    await this.topicsRef.orderBy('created', 'desc').get().then(querySnapshot => {
      const obj = {}
      for (let i = 0; i < querySnapshot.size; i++) {
        obj[querySnapshot.docs[i].id] = querySnapshot.docs[i].data()
      }
      this.topics = obj
    })
  }

  async addData (data) {
    await this.topicsRef.add({
      name: data.name,
      fotoURL: document.getElementById('image').src,
      text: data.text,
      storagePath: data.path,
      category: data.category,
      created: new Date()
    })
    location.reload()
  }

  async update (data) {
    await this.topicsRef.doc(data.key).update({
      name: data.name,
      fotoURL: document.getElementById('image').src,
      text: data.text,
      storagePath: data.path,
      category: data.category
    })
    location.reload()
  }

  async remove (key) {
    var result = window.confirm(this.topics[key].name + 'を削除しますか？')
    if (result) {
      await this.topicsRef.doc(key).delete()
      location.reload()
    }
  }
}
