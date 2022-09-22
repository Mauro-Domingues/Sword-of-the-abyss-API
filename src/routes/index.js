const express = require("express")
const cors = require('cors')
const router = express.Router()

router.get("/", function (req, res, next) {
  try{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, TRUNCATE')
    router.use(cors())
    res.status(200).send("Conexão com o Banco de Dados estabelecida")
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }next()
})

module.exports = router