const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('select * from tables');
    return result;
};

const selectById = async (id) => {
    const [result] = await db.query(`select * from tables where id = ?`, [id]);

    if (!result.length) return null;

    return result[0];
};

const insert = async ({ id, capacity }) => {
    const [result] = await db.query('INSERT INTO tables (id,capacity) values (?,?)', [
        id,
        capacity,
    ]);

    if (!result.affectedRows) return null;

    const newTable = await selectById(id);

    return newTable;
};

const update = async (tableId, capacity) => {
    const [result] = await db.query('update tables set capacity = ? where id = ?', [
        capacity,
        tableId,
    ]);
    return result;
};

const deleteById = async (tableId) => {
    const [result] = await db.query('delete from tables where id = ?', [tableId]);
    return result;
};

module.exports = { selectAll, selectById, insert, update, deleteById };
