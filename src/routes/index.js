const express = require("express")
const cors = require('cors')
const router = express.Router()

router.use(cors({
  Origin: '*',
  Header: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
}))

router.get("/", function (req, res, next) {
  try{
    if (req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE,TRUNCATE')
    }
    res.status(200).send("Interação com o Banco de Dados")
    next()
    }catch(error){
      res.status(400).send({
        message: error.message
      })
    }
})

module.exports = router