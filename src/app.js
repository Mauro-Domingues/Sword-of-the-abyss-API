const express = require('express')
const app = express()

const index = require('./routes/index')
const ticketRoute = require('./routes/ticketRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', index)
app.use('/ticket', ticketRoute)

module.exports = app