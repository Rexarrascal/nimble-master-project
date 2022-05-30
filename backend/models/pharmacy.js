const mongoose = require('mongoose')

const PharmacySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    password: {type: Number},
    location: {type: String},
    phone: Number,
    email: String,
    customers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        autopopulate: { maxDepth: 1 }
    }],
    druglist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drug',
        autopopulate: { maxDepth: 1}
    }]
})
  
PharmacySchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Pharmacy', PharmacySchema)

// const Drug = require('./drug.js')
// const uuid = require('uuid')

// class Pharmacy {
//     constructor(id = uuid.v4(), name, phone, email, location, customers = [], druglist = []) {
//         this.id = id
//         this.name = name
//         this.phone = phone
//         this.email = email
//         this.location = location
//         this.customers = customers
//         this.druglist = druglist
//     }

//     addnewdrug(drug) {
//             const drug1 = new Drug(drug)

//             this.druglist.push(drug)

//             return drug
//         }

//     static create({id, name, phone, email, location, customers, druglist}) {
//         return new Pharmacy (id, name, phone, email, location, customers, druglist)
//     }

//     dropadrug(name) {
//     }
// }

// module.exports = Pharmacy