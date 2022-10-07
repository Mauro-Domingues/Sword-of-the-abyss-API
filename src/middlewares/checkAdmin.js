const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    try{
        const adminToken = req.headers.authorization
        const authToken = jwt.verify(adminToken, process.env.ADMIN_SECRET)
        req.auth = authToken
        next()
    } catch(error){
        return res.status(401).send({message: "Você precisa autenticar primeiro"})
    }
}