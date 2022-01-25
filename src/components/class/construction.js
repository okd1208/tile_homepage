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
    date = date.replace(/-/g, '/')
    this.constructionsRef.add({
      name: name,
      fotoURL: document.getElementById('image').src,
      text: text,
      date: date,
      created: new Date()
    })
    alert('建設例を追加しました。')
  }

  update (key, name, text, date) {
    date = date.replace(/-/g, '/')
    this.constructionsRef.doc(key).update({
      name: name,
      fotoURL: document.getElementById('image').src,
      text: text,
      date: date
    })
  }

  remove (key) {
    var result = window.confirm(this.constructions[key].name + 'を削除しますか？')
    if (result) {
      this.constructionsRef.doc(key).delete()
    }
  }
}
