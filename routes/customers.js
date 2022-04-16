const flatted = require('flatted')
const { customerDatabase, pharmacyDatabase, drugDatabase } = require('../database')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const customers = await customerDatabase.load()

    res.render('customers', { customers })
})

router.post('/', async (req, res) => {
    const customer = await customerDatabase.insert(req.body)
    res.send(customer)
})

router.delete('/:customerId', async (req, res) => {
    await customerDatabase.removeBy('id', req.params.customerId)

    res.send('OK')
})

router.get('/:customerId', async (req, res) => {
    const customer = await customerDatabase.find(req.params.customerId)
    if (!customer) return res.status(404).send('Cannot find customer')
    res.render('customer', { customer })
})

router.post('/:customerId/orders', async (req, res) =>{
    const { customerId } = req.params
    const { pharmacyId, drugId } = req.body

    // OrderService.createorder(customerId, pharmacyId, drugId)  Sonrasinda alttaki kodlari kisaltmak icin bu fonksiyonu yazabilirsin

    const customer = await customerDatabase.find(customerId)

    const pharmacy = await pharmacyDatabase.find(pharmacyId)

    const drug = await drugDatabase.find(drugId)

    customer.order(pharmacy, drug)

    await customerDatabase.update(customer)

    res.send('OK')
})

module.exports = router