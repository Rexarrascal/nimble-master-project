const BaseService = require('./base-service')
const Pharmacy = require('../models/pharmacy')

class PharmacyService extends BaseService {
  async findByPharmacyName(name) {
    return this.findBy('name', name)
  }

  async findByLocation(location) {
    return this.findBy('location', location)
  }
}

module.exports = new PharmacyService(Pharmacy)