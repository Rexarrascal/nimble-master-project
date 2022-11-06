const BaseService = require("./base-service");
const Pharmacy = require("../models/pharmacy");
const drugService = require("./drug-service");

class PharmacyService extends BaseService {
  async findByPharmacyName(name) {
    return this.findBy("name", name);
  }

  async findByLocation(location) {
    return this.findBy("location", location);
  }

  async addDrug(pharmacyId, drugId) {
    const pharmacy = await this.find(pharmacyId);
    const drug = await drugService.find(drugId);

    pharmacy.druglist.push(drug);
    drug.sellers.push(pharmacy);

    await pharmacy.save();
    await drug.save();
  }
}

module.exports = new PharmacyService(Pharmacy);
