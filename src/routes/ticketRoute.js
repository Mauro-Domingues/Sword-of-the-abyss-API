const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticketController')

router.get('/', ticketController.get)
router.get('/:id', ticketController.getById)
router.get('/status/:status', ticketController.getByStatus)
router.get('/type/:type', ticketController.getByTag)
router.post('/', ticketController.post)
router.post('/users', ticketController.check)
router.put('/:id', ticketController.put)
router.delete('/:id', ticketController.delete)
router.delete('/', ticketController.truncate)

module.exports = router