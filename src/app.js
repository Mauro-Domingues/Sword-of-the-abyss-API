const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routes/index')
const ticketRoute = require('./routes/ticketRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
router.use(cors({Origin: '*', Header: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', Methods: 'GET, PUT, POST, DELETE, TRUNCATE'}))
app.use('/', index)
app.use('/ticket', ticketRoute)

module.exports = app