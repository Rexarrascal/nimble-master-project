const BaseService = require("./base-service");
const Customer = require("../models/customer");

class CustomerService extends BaseService {
  async findByName(name) {
    return this.findBy("name", name);
  }
}

module.exports = new CustomerService(Customer);
