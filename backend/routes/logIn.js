const { customerService, pharmacyService } = require('../services')
const Customer = require('../models/customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', async (req,res,next) => {
  await customerService.findBy({ email: req.body.email}, (err, customer) => {
    if (err) return res.status(500).json({
      title: 'server error',
      error: err
    })
    if (!customer) {
      return res.status(401).json({
        title: 'customer not found',
        error: 'invalid credentials'
      })
    }
    if (!bcrypt.compareSync(req.body.password, customer.password)) {
      return res.status(401).json({
        title: 'customer is not found',
        error: 'invalid credentials'
      })
    }
    // let token = jwt.sign({ customerId: customer._id })
  })
})
module.exports = router