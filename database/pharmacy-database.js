const BaseDatabase = require('./base-database')
const Pharmacy = require('../models/pharmacy')

class PharmacyDatabase extends BaseDatabase {
  findByPharmacyName(name) {
    return this.findBy('name', name)
  }

  findByLocation(location) {
    return this.findBy('location', location)
  }
}

module.exports = new PharmacyDatabase(Pharmacy)