const router = require('express').Router()

router.use('/menu', require('./api/menu.routes.js'))

module.exports = { router }

