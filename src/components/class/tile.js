export class Tile {
  constructor (db) {
    this.tilesRef = db.collection('tiles')
    this.tiles = null
  }

  async loadData () {
    await this.tilesRef.orderBy('created', 'desc').get().then(querySnapshot => {
      const obj = {}
      for (let i = 0; i < querySnapshot.size; i++) {
        obj[querySnapshot.docs[i].id] = querySnapshot.docs[i].data()
      }
      this.tiles = obj
    })
  }

  async addData (data) {
    await this.tilesRef.add({
      name: data.name,
      fotoURL: document.getElementById('image').src,
      text: data.text,
      storagePath: data.path,
      created: new Date()
    })
    location.reload()
  }

  async update (data) {
    await this.tilesRef.doc(data.key).update({
      name: data.name,
      fotoURL: document.getElementById('image').src,
      text: data.text,
      storagePath: data.path
    })
    location.reload()
  }

  async remove (key) {
    var result = window.confirm(this.tiles[key].name + 'を削除しますか？')
    if (result) {
      await this.tilesRef.doc(key).delete()
      location.reload()
    }
  }
}
