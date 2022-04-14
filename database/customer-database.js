const BaseDatabase = require('./base-database')
const Customer = require('../models/customer')

class CustomerDatabase extends BaseDatabase {
  async findByName(name) {
    const objects = await this.load()

    return objects.find(o => o.name == name)
  }
}

module.exports = new CustomerDatabase(Customer)