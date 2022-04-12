const Drug = require('./drug.js')
const Customer = require('./customer.js')
const uuid = require('uuid')

class Pharmacy {
    constructor(id = uuid.v4(), name, phone, email, location, customers = [], druglist = []) {
        this.id = id
        this.name = name
        this.phone = phone
        this.email = email
        this.location = location
        this.customers = customers
        this.druglist = druglist
    }

    addnewdrug(id, name) {
        const drug = new Drug(id, name)

        this.druglist.push(drug)

        return drug
    }

    static create({id, name, phone, email, location, customers, druglist}) {
        return new Pharmacy (id, name, phone, email, location, customers, druglist)
    }

    // dropadrug(name) {
    // }
}

module.exports = Pharmacy