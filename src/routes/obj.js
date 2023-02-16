const express = require('express')
const router = express.Router()
const objsController = require('../app/controllers/ObjController')

router.get('/create',objsController.create)
router.post('/store',objsController.store)
router.get('/:_id/edit',objsController.edit)
router.delete('/:_id',objsController.delete)
router.put('/:_id',objsController.update)
router.get('/:slug',objsController.show)


module.exports = router