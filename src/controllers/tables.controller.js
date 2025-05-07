const Table = require('../models/tables.model');

const getAll = async (req, res) => {
    const result = await Table.selectAll();
    res.json(result);
};

const getTableById = async (req, res) => {
    const { tableId } = req.params;
    const result = await Table.selectById(tableId);
    res.json(result);
}

const create = async (req, res) => {
    // req.body = {id, capacity}
    let result;
    try {
        result = await Table.insert(req.body);
    } catch (error) {
        res.status(400).json(error);
    }
    res.json(result);
};

const edit = async (req, res) => {
    const { tableId } = req.params;
    let result;
    try {
        result = await Table.update(tableId, req.body.capacity);
    } catch (error) {
        res.status(400).json(error);
    }

    const tableUpdated = await Table.selectById(tableId);

    res.json(tableUpdated);
};

const remove = async (req, res) => {
    const { tableId } = req.params;
    const tableDeleted = await Table.selectById(tableId);
    const result = await Table.deleteById(tableId);

    res.json(tableDeleted);
};

module.exports = { getAll, create, edit, remove, getTableById };
