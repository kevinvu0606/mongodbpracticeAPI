require('dotenv').config()

// require and set express and mongodb thorugh mongoose
const express = require('express')
const app = express()

// app settings
app.use(express.json())

const subscribersController = require('./controllers/subscribers')
app.use('/subscribers', subscribersController)

app.listen(3000, () => console.log('server started'))

