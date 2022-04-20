const { customerService, orderService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const customers = await customerService.load()

    res.render('customers', { customers })
})

router.post('/', async (req, res) => {
    try {
        const customer = await customerService.insert(req.body)
        res.send(customer)
    } catch(e) {
        next(e)
    }   
})

router.delete('/:customerId', async (req, res) => {
    await customerService.removeBy('id', req.params.customerId)

    res.send('OK')
})

router.get('/:customerId', async (req, res) => {
    const customer = await customerService.find(req.params.customerId)
    
    if (!customer) return res.status(404).send('Cannot find customer')
    res.render('customer', { customer })
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
  })

module.exports = router