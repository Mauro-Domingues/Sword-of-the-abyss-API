const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routes/index')
const ticketRoute = require('./routes/ticketRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    }
    next()
})
// router.use(cors({Origin: '*', Header: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', Methods: 'GET, PUT, POST, DELETE, TRUNCATE'}))
app.use('/', index)
app.use('/ticket', ticketRoute)

module.exports = app