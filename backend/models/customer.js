const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const CustomerSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please, fill name area"], minlength: 2},
    email: {type:String, required: [true, "Please, fill email area"],},
    password: {type: String, required: [true, "Please, fill password area"],},
    tokens: [{token: {type: String, required: true}}],
    location: {type: String},
    phone: Number,
    date: {type:Date, default: Date.now},
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        autopopulate: { maxDepth: 2 }
    }]
})

//The method will hash the password before saving the customer model

CustomerSchema.pre("save", async function(next) {
    const customer = this;
    if (customer.isModified("password")) {
      customer.password = await bcrypt.hash(customer.password, 8);
    }
    next();
  });


//The method generates an auth token for the customer

CustomerSchema.methods.generateAuthToken = async function() {
    const customer = this;
    const token = jwt.sign({ _id: customer._id, name: customer.name, email: customer.email },
    "secret");
    customer.tokens = customer.tokens.concat({ token });
    await customer.save();
    return token;
    };

//The method search for a customer by email and password.

CustomerSchema.statics.findByCredentials = async (email, password) => {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      throw new Error({ error: "Invalid login details" });
    }
    const isPasswordMatch = await bcrypt.compare(password, customer.password);
    if (!isPasswordMatch) {
      throw new Error({ error: "Invalid login details" });
    }
    return customer;
  };

CustomerSchema.plugin(require('mongoose-autopopulate'))
const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer

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

