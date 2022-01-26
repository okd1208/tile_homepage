export class Construction {
  constructor (db) {
    this.constructionsRef = db.collection('constructions')
    this.constructions = null
    this.error_message = null
  }

  async loadData () {
    await this.constructionsRef.get().then(querySnapshot => {
      const obj = {}
      for (let i = 0; i < querySnapshot.size; i++) {
        obj[querySnapshot.docs[i].id] = querySnapshot.docs[i].data()
      }
      this.constructions = obj
    })
  }

  async addData (data) {
    if (!data.name || !data.text) {
      this.error_message = '空の値があります'
      return
    }
    this.error_message = null
    data.date = data.date.replace(/-/g, '/')
    await this.constructionsRef.add({
      name: data.name,
      fotoURL: document.getElementById('image').src,
      text: data.text,
      storagePath: data.path,
      date: data.date,
      created: new Date()
    })
    location.reload()
  }

  async update (data) {
    data.date = data.date.replace(/-/g, '/')
    await this.constructionsRef.doc(data.key).update({
      name: data.name,
      fotoURL: document.getElementById('image').src,
      text: data.text,
      storagePath: data.path,
      date: data.date
    })
    location.reload()
  }

  async remove (key) {
    var result = window.confirm(this.constructions[key].name + 'を削除しますか？')
    if (result) {
      await this.constructionsRef.doc(key).delete()
      location.reload()
    }
  }
}
