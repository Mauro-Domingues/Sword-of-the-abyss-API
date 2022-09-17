const express = require("express")
const router = express.Router()

router.get("/", function (req, res, next) {
  try{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
      return res.status(200).send("Integração com o Banco de Dados estabelecida")
    }
    next()
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }
})

module.exports = router