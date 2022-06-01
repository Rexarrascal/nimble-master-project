const { customerService, pharmacyService } = require('../services')
const Customer = require('../models/customer')
const router = require('express').Router()
const formValitaion = require('../validation/userValidation')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
  res.render('signup')
})


module.exports = router