const express = require('express')
const app = express()
const index = require('./routes/index')
const cors = require('./middlewares/cors')
const ticketRoute = require('./routes/ticketRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', cors, index)
app.use('/ticket', ticketRoute)
app.use('/user', userRoute)

module.exports = app