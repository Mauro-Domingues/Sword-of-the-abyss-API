const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticketController')
const checkUser = require('../middlewares/checkUser')

router.get('/', checkUser, ticketController.get)
router.get('/:id', checkUser, ticketController.getById)
router.get('/status/:status', checkUser, ticketController.getByStatus)
router.get('/type/:type', checkUser, ticketController.getByTag)
router.post('/', ticketController.post)
router.put('/:id', checkUser, ticketController.put)
router.delete('/:id', checkUser, ticketController.delete)
router.delete('/', checkUser, ticketController.truncate)

module.exports = router