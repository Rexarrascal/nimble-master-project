const BaseDatabase = require('./base-database')
const Drug = require('../models/drug')

class DrugDatabase extends BaseDatabase {
  findByDrugName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new DrugDatabase(Drug)