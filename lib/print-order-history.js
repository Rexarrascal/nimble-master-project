const colors = require('colors')

function printOrder(orders) {
  console.log(`${colors.blue(orders.customer.name)} ordered from ${colors.blue(orders.pharmacy.name)} a(an) ${colors.bgRed.white(orders.drug.name)}.}`)
}

function printOrderHistory(customer) {
  if (customer.orders.length == 0)
    return console.log(`${colors.blue(customer.name)} has no orders yet.`)
    
  customer.orders.forEach(printOrder)
}

module.exports = {printOrderHistory, printOrder}