const express = require("express")
const cors = require('cors')
const router = express.Router()

router.use(cors({
  Origin: '*',
  Header: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  Methods: 'GET, PUT, POST, DELETE, TRUNCATE'
}))

router.get("/", (req, res, next) => {
  try{
    res.status(200).send("Conexão com o Banco de Dados estabelecida")
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }next()
})

module.exports = router