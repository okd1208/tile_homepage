export class Construction {
  constructor (db) {
    this.constructionsRef = db.collection('constructions')
    this.constructions = null
  }

  async loadData () {
    await this.constructionsRef.get().then(querySnapshot => {
      const obj = {}
      console.log(querySnapshot)
      for (let i = 0; i < querySnapshot.size; i++) {
        obj[querySnapshot.docs[i].id] = querySnapshot.docs[i].data()
        console.log(obj)
      }
      this.constructions = obj
    })
  }
}
