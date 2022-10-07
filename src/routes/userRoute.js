const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const checkAdmin = require('../middlewares/checkAdmin')

router.get('/', checkAdmin, userController.get)
router.post('/', checkAdmin, userController.post)
router.delete('/:id', checkAdmin, userController.delete)
router.post('/login', userController.checkUser)
router.post('/login-admin', userController.checkAdmin)

module.exports = router