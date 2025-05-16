const router = require('express').Router();

const {
    getAll,
    create,
    remove,
    edit,
    getTableById,
    getTableByCapacity,
    getAvailableTables,
} = require('../../controllers/tables.controller');
const { checkTableId } = require('../../middlewares/tables.middleware');
const { checkAdmin, checkToken } = require('../../middlewares/users.middleware');

router.get('/', checkToken, checkAdmin, getAll);
router.get('/:tableId', checkToken, checkAdmin, getTableById);
router.get('/availables/:capacity/:date', checkToken, getAvailableTables);
router.get('/capacity/:capacity', getTableByCapacity);

router.post('/', checkToken, checkAdmin, create);
router.put('/:tableId', checkToken, checkAdmin, checkTableId, edit);
router.delete('/:tableId', checkToken, checkAdmin, checkTableId, remove);

module.exports = router;
