const router = require('express').Router();

router.use('/menus', require('./api/menus.routes'));

router.use('/users', require('./api/users.routes'));

router.use('/reviews', require('./api/reviews.routes'));

module.exports = router;
