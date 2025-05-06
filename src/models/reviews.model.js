const db = require('../config/db');

const selectAll = async () => {
    const result = await db.query('select * from reviews');

    return result[0];
};

const selectById = async (reviewId) => {
    const [result] = await db.query('select * from reviews where reviews.id = ?', [reviewId]);
    if (result.length === 0) return null;
    return result[0];
};

const insert = async ({ user_id, message, rating }) => {
    const [result] = await db.query(
        'insert into reviews (user_id, message, rating) values (?, ?, ?)',
        [user_id, message, rating]
    );
    return result;
};

module.exports = { selectAll, selectById, insert };
