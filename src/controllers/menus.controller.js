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
  const { menuId } = req.params; // Obtén el ID del menú desde los parámetros
  const { name, firsts, seconds, desserts, price } = req.body; // Obtén los datos del cuerpo de la solicitud

  try {
    // Actualiza el menú
    const result = await Menu.edit(menuId, {
      name,
      firsts,
      seconds,
      desserts,
      price,
    });

    // Obtén el menú actualizado
    const menuUpdate = await Menu.selectById(menuId);

    // Devuelve el menú actualizado
    res.json(menuUpdate);
    console.log(result);
  } catch (error) {
    console.error("Error al actualizar el menú:", error);
    res.status(500).json({ error: "Error al actualizar el menú" });
  }
};

module.exports = { getAll, getById, edit };
