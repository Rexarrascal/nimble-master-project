const Drug = require('./drug.js')
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

    addnewdrug(drug) {
            const drug1 = new Drug(drug)

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