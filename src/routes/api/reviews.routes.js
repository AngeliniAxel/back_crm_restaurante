const router = require('express').Router();

const { getAll, create } = require('../../controllers/reviews.controller');

router.get('/', getAll);
router.post('/', create);

module.exports = router;
