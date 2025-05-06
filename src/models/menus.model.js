const db = require("../config/db");

const selectAll = async () => {
  const result = await db.query("select * from menu");

  return result[0];
};

const selectById = async (menuId) => {
  const [result] = await db.query("select * from menu where menu.id = ?", [
    menuId,
  ]);
  if (result.length === 0) return null;
  return result[0];
};

const edit = async (menuId, {
  name,
  firsts,
  seconds,
  desserts,
  price
}) => {
  const [result] = await db.query(
    "UPDATE menu SET name = ?, firsts = ?, seconds = ?, desserts = ?, price = ? WHERE id = ?",
    [name, firsts, seconds, desserts, price, menuId]
  );

  return result;
};




module.exports = { selectAll, selectById, edit };
