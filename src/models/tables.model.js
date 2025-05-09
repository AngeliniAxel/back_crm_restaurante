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

const update = async (tableId, capacity, num_table ) => {
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
}

module.exports = { selectAll, selectById, insert, update, deleteById, selectByCapacity };
