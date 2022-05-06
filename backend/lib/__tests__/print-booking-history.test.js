const printOrderHistory = require('../print-order-history')

test('prints customer orders', () => {
    // initialization
    const customer = {
      name: 'Armagan',
      orders: [{
        customer: { name: 'Armagan' },
        drug: { name: 'Parol' },
        pharmacy: { name: 'Drug Store' },
    
      }]
    }
    const consoleSpy = jest.spyOn(console, 'log')
  
    // test
    printOrderHistory(customer)
  
    // assertions
    expect(consoleSpy).toHaveBeenCalledWith('Armagan ordered a(an) Parol from Drug Store.')
  
    // teardown
    consoleSpy.mockRestore()
  })

  test('prints orders of customer with no orders.', () => {
    // initialization
    const customer = {
      name: 'Armagan',
      orders: []
    }
    const consoleSpy = jest.spyOn(console, 'log')
  
    // test
    printOrderHistory(customer)
  
    // assertions
    expect(consoleSpy).toHaveBeenCalledWith('Armagan has no orders yet.')
  
    // teardown
    consoleSpy.mockRestore()
  })