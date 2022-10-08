const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const checkAdmin = require('../middlewares/checkAdmin')
const checkUser = require('../middlewares/checkUser')

router.get('/', checkAdmin, userController.get)
router.post('/', checkAdmin, userController.post) // Comente essa linha
//router.post('/', userController.post) // Descomente essa linha
router.delete('/:id', checkAdmin, userController.delete)
router.post('/login', userController.checkUser)
router.post('/login-admin', checkUser, userController.checkAdmin)

module.exports = router