const db = require('../config/db');

const selectById = async(usersId) => {
    const [result] = await db.query('select * from users where id = ?', [usersId]
    );
    if (result.length === 0) return null;
    return result[0];
}

const selectByEmail = async (email) => {
    const [result] = await db.query('select * from users where email = ?', [email]);
    if (result.length === 0) return null;
    return result[0];
}

const insert = async ({ name, email, password, role }) => {
    const [result] = await db.query(
        'insert into users (name, email, password, role, created_at) values (?, ?, ?, ?, ?)', [name, email, password, role]
    );
    return result;
}

module.exports = { selectById, selectByEmail, insert};