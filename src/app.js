const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routes/index')
const ticketRoute = require('./routes/ticketRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://mauro-domingues.github.io/Sword-of-the-abyss-admin')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, TRUNCATE')
    }next()
})
app.use('/', index)
app.use('/ticket', ticketRoute)

module.exports = app