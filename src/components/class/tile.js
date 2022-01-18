export class Tile {
  constructor (db) {
    this.tilesRef = db.collection('tiles')
    this.tiles = null
  }

  async loadData () {
    await this.tilesRef.get().then(querySnapshot => {
      const obj = {}
      console.log(querySnapshot)
      for (let i = 0; i < querySnapshot.size; i++) {
        obj[querySnapshot.docs[i].id] = querySnapshot.docs[i].data()
        console.log(obj)
      }
      this.tiles = obj
    })
  }
}
