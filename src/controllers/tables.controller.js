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


const getTableByCapacity = async (req, res) => {
    const { capacity } = req.params;
    const result = await Table.selectByCapacity(capacity);
    res.json(result);
}


const create = async (req, res) => {
    // req.body = {id, capacity, num_table}
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
        result = await Table.update(tableId, req.body.capacity, req.body.num_table);
    } catch (error) {
        res.status(400).json(error);
    }
    console.log(result);
    const tableUpdated = await Table.selectById(tableId);

    res.json(tableUpdated);
};

const remove = async (req, res) => {
    const { tableId } = req.params;
    const tableDeleted = await Table.selectById(tableId);
    const result = await Table.deleteById(tableId);

    res.json(tableDeleted);
};

module.exports = { getAll, create, edit, remove, getTableById, getTableByCapacity };
