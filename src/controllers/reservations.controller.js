const reservations = require("../models/reservations.models.js");

const getAll = async (req, res) => {
    const result = await reservations.selectAll();
    res.json(result);
};

const create = async (req, res) => {
    const result = await reservations.insert(req.body);
    res.json(result);
}

module.exports = { getAll, create };
