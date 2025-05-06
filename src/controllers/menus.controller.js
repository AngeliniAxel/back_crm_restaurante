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

const edit = async (req, res) => {
  const { menuId } = req.params;
  const result = await Menu.edit(menuId, req.body);
  const menuUpdate = await Menu.selectById(menuId);
  res.json(menuUpdate); 
  console.log(result);
}

module.exports = { getAll, getById, edit };
