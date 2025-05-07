const router = require('express').Router();

router.use('/menus', require('./api/menus.routes'));

router.use('/users', require('./api/users.routes'));

router.use('/reviews', require('./api/reviews.routes'));

router.use('/tables', require('./api/tables.routes'));

router.use('/reservations', require('./api/reservations.routes'));

module.exports = router;
