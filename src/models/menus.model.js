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

module.exports = { selectAll, selectById };
