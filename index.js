const express = require('express')
const bodyParser = require('body-parser')
const CustomersRouter = require('./routes/customers')
const indexRouter = require('./routes/index')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/customers', CustomersRouter)
app.use('/', indexRouter)



app.listen (3000, () => {
    console.log('stated listening on 3000')
})