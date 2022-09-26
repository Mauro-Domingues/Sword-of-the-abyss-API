const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mauro-domingues.github.io/Sword-of-the-abyss, https://mauro-domingues.github.io/Sword-of-the-abyss-admin')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, TRUNCATE')
  }next()
})

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