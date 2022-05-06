const BaseService = require('./base-service')
const Drug = require('../models/drug')

class DrugService extends BaseService {
  async findByDrugName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new DrugService(Drug)