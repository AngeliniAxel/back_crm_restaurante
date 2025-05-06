const router = require('express').Router();

const { getAll, create } = require('../../controllers/reviews.controller');
const { checkToken } = require('../../middlewares/users.middleware');

router.get('/', getAll);
router.post('/', checkToken, create);

module.exports = router;
