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

    addnewdrug(object) {
            const drug = new Drug(object)

            this.druglist.push(object)

            return drug
        }

    static create({id, name, phone, email, location, customers, druglist}) {
        return new Pharmacy (id, name, phone, email, location, customers, druglist)
    }

    // dropadrug(name) {
    // }
}

module.exports = Pharmacy