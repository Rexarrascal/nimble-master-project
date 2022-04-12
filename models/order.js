const uuid = require('uuid')

class Order {
    constructor(pharmacy, customer, drug) {
        this.pharmacy = pharmacy
        this.customer = customer
        this.drug = drug 
    }
}

module.exports = Order