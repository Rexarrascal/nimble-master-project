const uuid = require('uuid')
const pharmacyDatabase = require('../database/pharmacy-database.js')
const Order = require('./order.js')
const colors = require('colors')

class Customer {
    constructor(id = uuid.v4(), name, phone, email, age, orders=[]) {       
        this.id = id
        this.name = name
        this.phone = phone
        this.email = email
        this.age = age
        this.orders = orders
    }

    /// Inventory check upgrade is needed.
    
    order(pharmacy, drug) {
        const order = new Order (pharmacy, this, drug)
        this.orders.push(order)
        pharmacy.customers.push(this)
    }
      


    static create({id, name, phone, email, age, orders}) {
            return new Customer (id, name, phone, email, age, orders)
    }

    //// Order without inventory check

    // order(pharmacy, drug) {
    //     const order = new Order (pharmacy, this, drug)
    //     this.orders.push(order)
    //     pharmacy.customers.push(this)
    // }

    //// Order with inventory check TRIAL 1

    // order(pharmacy, drug) {
        
    //     async function main () {

    //     const drugfinder = await pharmacy.druglist.find(o => o.drug != drug)
       
    //     if (drugfinder == undefined) {
    //         console.log(`${colors.red(drug.name)} is not contained in ${colors.yellow(pharmacy.name)}'s inventory.`)
    //     }   else {
    //         const order = new Order (pharmacy, this, drug)
    //         this.orders.push(order)
    //         pharmacy.customers.push(this)  
    //         }          
    //     }

    //     main()
    // }

    //// TRIAL 2 Worked before async process

    // order(pharmacy, drug) {
    //     const order = new Order (pharmacy, this, drug)
        
    //     if ( pharmacyDatabase.findByPharmacyName(pharmacy.name).druglist.find(o => o.drug != drug)) {
    //         console.log(`${colors.red(drug.name)} is not contained in ${colors.yellow(pharmacy.name)}'s inventory.`)
    //     } else {
            
    //         this.orders.push(order)
    //         pharmacy.customers.push(this)
    //     }       
    // }

    //// TRIAL 3 

    //     if ( pharmacy.druglist.find(o => o.drug == drug)) {
    //         const order = new Order (pharmacy, this, drug)
    //         this.orders.push(order)
    //         pharmacy.customers.push(this)
            
    //     } else {
    //         console.log(`${colors.red(drug.name)} is not contained in ${colors.yellow(pharmacy.name)}'s inventory.`) 

    //     }       
    // }

}

module.exports = Customer

