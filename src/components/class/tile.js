export class Tile {
  constructor (db) {
    this.tilesRef = db.collection('tiles')
    this.tiles = null
    this.error_message = null
  }

  async loadData () {
    await this.tilesRef.get().then(querySnapshot => {
      const obj = {}
      for (let i = 0; i < querySnapshot.size; i++) {
        obj[querySnapshot.docs[i].id] = querySnapshot.docs[i].data()
      }
      this.tiles = obj
    })
  }

  addData (name, text) {
    if (name === null || text === null) {
      this.error_message = '空の値があります'
      // error_messageをstateに更新できてない
      return
    }
    this.error_message = null
    this.tilesRef.add({
      name: name,
      fotoURL: document.getElementById('image').src,
      text: text,
      created: new Date()
    })
    alert('タイルを追加しました。')
  }

  update (key, name, text) {
    this.tilesRef.doc(key).update({
      name: name,
      fotoURL: document.getElementById('image').src,
      text: text
    })
  }

  remove (key) {
    var result = window.confirm(this.tiles[key].name + 'を削除しますか？')
    if (result) {
      this.tilesRef.doc(key).delete()
    }
  }
}
