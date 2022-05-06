const BaseService = require('./base-service')
const Order = require('../models/order')
const customerService = require('./customer-service')
const pharmacyService = require('./pharmacy-service')
const drugService = require('./drug-service')

class OrderService extends BaseService {
  async findByCustomerId(customerId) {
    return this.findBy('customer', customerId)
  }

  async findByDriverId(pharmacyId) {
    return this.findBy('pharmacy', pharmacyId)
  }

  async findByOrderId(orderId) {
    return this.findBy('pharmacy', orderId)
  }

  async order(pharmacyId, customerId, drugId) {
    const customer = await customerService.find(customerId)
    const pharmacy = await pharmacyService.find(pharmacyId)
    const drug = await drugService.find(drugId)

    const order = await this.insert ({ pharmacy, customer, drug })
    customer.orders.push(order)
    pharmacy.customers.push(customer)

    await customer.save()
    await pharmacy.save()

    return order
  }
}

module.exports = new OrderService(Order)