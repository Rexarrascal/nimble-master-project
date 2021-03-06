const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    password: {type: String, unique: true},
    age: {type: Number},
    location: {type: String},
    phone: Number,
    email: String,
    date: {type:Date, default: Date.now},
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        autopopulate: { maxDepth: 2 }
    }]
})

CustomerSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Customer', CustomerSchema)

// const uuid = require('uuid')
// const pharmacyService = require('../services/pharmacy-services.js')
// const Order = require('./order.js')
// const colors = require('colors')

// class Customer {
//     constructor(id = uuid.v4(), name, phone, email, age, orders=[]) {       
//         this.id = id
//         this.name = name
//         this.phone = phone
//         this.email = email
//         this.age = age
//         this.orders = orders
//     }

//     /// Inventory check upgrade in druglist of pharmacies is needed.
    
//     order(pharmacy, drug) {
//         const order = new Order (pharmacy, this, drug)
//         this.orders.push(order)
//         pharmacy.customers.push(this)
//     }

//     // async order(pharmacy, drug) {
//     //     const check = await pharmacyService.findByPharmacyName(pharmacy.name).druglist.find(drug)
//     //     if ( !check ) throw new Error (`${colors.red(drug.name)} is not contained in ${colors.yellow(pharmacy.name)}'s inventory.`)

//     //     const order = new Order (pharmacy, this, drug)
//     //     this.orders.push(order)
//     //     pharmacy.customers.push(this)
//     //     }       
         
//     static create({id, name, phone, email, age, orders}) {
//             return new Customer (id, name, phone, email, age, orders)
//     }

//     //// Order without inventory check

//     // order(pharmacy, drug) {
//     //     const order = new Order (pharmacy, this, drug)
//     //     this.orders.push(order)
//     //     pharmacy.customers.push(this)
//     // }

//     //// Order with inventory check TRIAL 1

//     // order(pharmacy, drug) {
        
//     //     async function main () {

//     //     const drugfinder = await pharmacy.druglist.find(o => o.drug != drug)
       
//     //     if (drugfinder == undefined) {
//     //         console.log(`${colors.red(drug.name)} is not contained in ${colors.yellow(pharmacy.name)}'s inventory.`)
//     //     }   else {
//     //         const order = new Order (pharmacy, this, drug)
//     //         this.orders.push(order)
//     //         pharmacy.customers.push(this)  
//     //         }          
//     //     }

//     //     main()
//     // }

//     //// TRIAL 2 Worked before async process

// }

// module.exports = Customer

