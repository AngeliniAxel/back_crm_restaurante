const Table = require('../models/tables.model');

const checkTableId = async (req, res, next) => {
    const { tableId } = req.params;

    if (isNaN(tableId)) {
        return res.status(400).json({ message: 'El id de la mesa debe ser un numero' });
    }

    const table = await Table.selectById(tableId);
    if (!table) {
        return res.status(404).json({ message: 'El id de la mesa no existe' });
    }

    req.table = table;

    next();
};

module.exports = { checkTableId };
