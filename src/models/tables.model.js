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

const selectAvailableTables = async (capacity, date, time) => {
    const [result] = await db.query(
        `SELECT *
        FROM tables
        WHERE capacity >= ?
        AND id NOT IN (
        SELECT table_id
        FROM reservations
        WHERE reservation_date = ?
        AND reservation_time = ?
        );`,
        [capacity, date, time]
    );
    return result;
};

const insert = async ({ capacity, num_table }) => {
    const [result] = await db.query('INSERT INTO tables (capacity, num_table ) values (?, ?)', [
        capacity,
        num_table,
    ]);
    console.log(result);
    if (!result.affectedRows) return null;

    const newTable = await selectById(result.insertId);

    return newTable;
};

const update = async (tableId, capacity, num_table) => {
    const [result] = await db.query('UPDATE tables SET capacity = ?, num_table = ? WHERE id = ?', [
        capacity,
        num_table,
        tableId,
    ]);
    return result;
};

const deleteById = async (tableId) => {
    const [result] = await db.query('delete from tables where id = ?', [tableId]);
    return result;
};
const selectByCapacity = async (capacity) => {
    const [result] = await db.query(`select * from tables where capacity >= ?`, [capacity]);

    if (!result.length) return null;

    return result;
};

module.exports = {
    selectAll,
    selectById,
    selectAvailableTables,
    insert,
    update,
    deleteById,
    selectByCapacity,
};
