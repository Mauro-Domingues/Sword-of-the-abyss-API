const express = require('express')
const app = express()
const index = require('./routes/index')
const ticketRoute = require('./routes/ticketRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader("Access-Control-Request-Headers", "*")
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Max-Age", "3600")
  if (req.method === 'OPTIONS'){
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, TRUNCATE')
  }next()
})
app.use('/', index)
app.use('/ticket', ticketRoute)

module.exports = app