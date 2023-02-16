const express = require('express')
const router = express.Router()
const personalController = require('../app/controllers/PersonalController')


router.get('/list',personalController.index)


module.exports = router