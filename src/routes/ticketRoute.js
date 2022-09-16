const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticketController')

router.get('/', ticketController.get)
router.get('/:id', ticketController.getById)
router.get('/:type', ticketController.getByTag)
router.post('/', ticketController.post)
router.put('/:id', ticketController.put)
router.delete('/:id', ticketController.delete)

module.exports = router