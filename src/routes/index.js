const express = require("express")
const cors = require('cors')
const router = express.Router()

router.use(cors({
  Origin: '*',
  Header: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  Methods: 'GET, PUT, POST, DELETE'
}))

router.get("/", function (req, res, next) {
  try{
    res.status(200).send("Interação com o Banco de Dados");
    }catch(error){
      res.status(400).send({
        message: error.message
      })
    }
})

module.exports = router