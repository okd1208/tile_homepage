export class Tile {
  constructor (db) {
    this.tilesRef = db.collection('tiles')
    this.tiles = null
    this.error_message = null
  }

  async loadData () {
    await this.tilesRef.get().then(querySnapshot => {
      const obj = {}
      console.log(querySnapshot)
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
    // this.clearEditEria()
  }
}
