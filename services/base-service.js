class BaseService {
  constructor(model) {
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  save(objects) {
    return this.model.insertMany(objects)
  }

  load() {
    return this.model.find()
  }

  async insert(object) {
    return await this.model.create(object)

    /// index js de post isteginde req.param.body ile customer kaydetmek icin ekledi.
    
    //  parametre icine gelen obje eger customer degilse onu customer
    //  turune cevirmek icin bu if kullanildi. Ayrica customer depency ortadan kalkmis oldu.
    // (eski hali )

    // app.post('/customers', async (req, res) => {
    //   const customer = Customer.create(req.body) ===== (yeni hali) const customer = await passengerService.insert(req.body)
    //   await customerService.insert(customer)
  
    //   res.send(customer)
  
    // if (!(object instanceof this.model)){ 
    //   object= this.model.create(object)
    
    /// index js de post isteginde req.param.body ile customer kaydetmek icin ekledi
    // return this.save(objects.concat(object))
  }

  async removeBy(property, value) {
    return this.model.deleteOne({ [property]: value })
  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object)
  }

  async find(id) {
    return this.model.findById(id)
  }

  async query(obj) {
    return this.model.find(obj)
  }

  async findBy(property, value) {
    return this.model.find({ [property]: value })
  }
}

module.exports = BaseService