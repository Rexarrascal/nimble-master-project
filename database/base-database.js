const fs = require('fs')       // fs documentation ref<https://nodejs.org/api/fs.html>
const flatted = require('flatted')    // flatted documentation ref<https://www.npmjs.com/package/flatted>
                                      // uuid documentation ref<https://www.npmjs.com/package/uuid>
class BaseDatabase {
  constructor(model) {
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  save(objects) {
    return new Promise((resolve, reject) => {
      fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), (err) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  load() {
    return new Promise((resolve, reject) => {
      fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8', (err, file) => {
        if (err) return reject(err)

        const objects = flatted.parse(file)

        resolve(objects.map(this.model.create))
      })
    })
  }

  async insert(object) {
    const objects = await this.load()

    /// index js de post isteginde req.param.body ile customer kaydetmek icin ekledi.
    
    //  parametre icine gelen obje eger customer degilse onu customer
    //  turune cevirmek icin bu if kullanildi. Ayrica customer depency ortadan kalkmis oldu.
    // (eski hali )

    // app.post('/customers', async (req, res) => {
    //   const customer = Customer.create(req.body) ===== (yeni hali) const customer = await passengerDatabase.insert(req.body)
    //   await customerDatabase.insert(customer)
  
    //   res.send(customer)
  
    if (!(object instanceof this.model)){ 
      object= this.model.create(object)
    }
    /// index js de post isteginde req.param.body ile customer kaydetmek icin ekledi
    return this.save(objects.concat(object))
  }

  async remove(index) {
    const objects = await this.load()

    objects.splice(index, 1)
    return this.save(objects)
  }

  async removeBy(property, value) {
    const objects = await this.load()

    const index = await objects.findIndex(o => o[property] == value)

    if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with id ${property} ${value}`)

    objects.splice(index, 1)
    return this.save(objects)
  }

  async update(object) {
    const objects = await this.load()

    const index = await objects.findIndex(o => o.id == object.id)

    if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with id ${object.id}`)

    objects.splice(index, 1, object)
    return this.save(objects)
  }

  async find(id) {
    const objects = await this.load()
    return objects.find(o => o.id == id)
  }

  async findBy(property, value) {
    return (await this.load()).find(o => o[property] == value)
  }
}

module.exports = BaseDatabase