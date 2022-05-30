const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const customersRouter = require('./routes/customers')
const pharmaciesRouter = require('./routes/pharmacies')
const drugsRouter = require('./routes/drugs')
const ordersRouter = require('./routes/orders')
const signUpRouter = require('./routes/singUp')
const logInRouter = require('./routes/logIn')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.set('view engine', 'pug')

app.use('/customers', customersRouter)
app.use('/pharmacies', pharmaciesRouter)
app.use('/drugs', drugsRouter)
app.use('/orders', ordersRouter)
app.use('/singup', signUpRouter)
app.use('/login', logInRouter)
app.use('/', indexRouter)

module.exports = app