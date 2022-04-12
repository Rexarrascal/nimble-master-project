const uuid = require('uuid')
const Order = require('./order.js')

class Customer {
    constructor(id = uuid.v4(), name, phone, email, age, orders=[]) {       
        this.id = id
        this.name = name
        this.phone = phone
        this.email = email
        this.age = age
        this.orders = orders
    }

    order(pharmacy, drug) {
        const order = new Order (pharmacy, this, drug)
        this.orders.push(order)
        pharmacy.customers.push(this)

        return order
    }

    static create({id, name, phone, email, age, orders}) {
        return new Customer (id, name, phone, email, age, orders)
    }
}

module.exports = Customer