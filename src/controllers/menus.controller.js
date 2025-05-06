const Menu = require("../models/menus.model");

const getAll = async (req, res) => {
  const result = await Menu.selectAll();
  res.json(result);
};

const getById = async (req, res) => {
  const { menuId } = req.params;
  const result = await Menu.selectById(menuId);
  res.json(result);
};

module.exports = { getAll, getById };
