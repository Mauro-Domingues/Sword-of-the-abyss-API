const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const checkAdmin = require('../middlewares/checkAdmin')
const checkUser = require('../middlewares/checkUser')

router.get('/', checkAdmin, userController.get)
router.post('/', checkAdmin, userController.post)
router.delete('/:id', checkAdmin, userController.delete)
router.post('/login', userController.checkUser)
router.post('/login-admin', checkUser, userController.checkAdmin)

//router.delete('/clean-database', userController.truncate) // Descomente para limpar o banco de usuários (necessário para criar o ADM)
//router.post('/create-root-user', userController.post) // Descomente para criar o usuário administrador (ADM)

module.exports = router