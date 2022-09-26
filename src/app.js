const express = require('express')
const cors = require('cors')
const app = express()
const index = require('./routes/index')
const ticketRoute = require('./routes/ticketRoute')
const CorsOptions = {
  origin: '*',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  methods: 'GET, PUT, POST, DELETE, TRUNCATE',
  preflightContinue: false
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(CorsOptions))
app.use('/', index)
app.use('/ticket', ticketRoute)

module.exports = app