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

  addData (name, text, date) {
    if (name === null || text === null) {
      this.error_message = '空の値があります'
      return
    }
    this.error_message = null
    // yyyy-mm-ddなので2回す
    date = date.replace('-', '/')
    date = date.replace('-', '/')
    this.constructionsRef.add({
      name: name,
      fotoURL: document.getElementById('image').src,
      text: text,
      date: date,
      created: new Date()
    })
    alert('建設例を追加しました。')
    // this.clearEditEria()
  }

  remove (key) {
    var result = window.confirm(this.constructions[key].name + 'を削除しますか？')
    if (result) {
      this.constructionsRef.doc(key).delete()
    }
  }
}
