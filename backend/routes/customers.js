const { customerService, orderService } = require('../services')
const customerController = require('../controller/customerController')
const router = require('express').Router()

router.get('/', async (req, res) => {
    const customers = await customerService.load()

    res.send( customers )
})

router.post('/', customerController.registerNewCustomer)

router.post('/login', customerController.loginCustomer)

router.delete('/:customerId', async (req, res) => {
  const customer = await customerService.find(req.params.customerId)
    
  if (!customer) return res.status(404).send('Cannot find customer')

  await customerService.removeBy('id', req.params.customerId)

  res.send('Customer Deleted')
})

router.get('/:customerId', async (req, res) => {
    const customer = await customerService.find(req.params.customerId)
    
    if (!customer) return res.status(404)
    res.send(customer)
})

router.post('/:customerId/orders', async (req, res) => {
    const { customerId } = req.params
    const { pharmacyId, drugId } = req.body

    const order = await orderService.order(pharmacyId, customerId, drugId)
    
    res.send(order)
})

router.patch('/:customerId', async (req, res) => {
    const { customerId } = req.params
    const { name } = req.body
  
    await customerService.update(customerId, { name })

    res.send(`The name of the customer changed to ${name}`)
  })

module.exports = router