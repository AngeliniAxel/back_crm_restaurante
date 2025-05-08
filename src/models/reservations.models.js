const db = require("../config/db");

const selectAll = async () => {
    const result = await db.query("select * from reservations");

    return result[0];
}

const insert = async ({ id, reservation_date, reservation_time, num_guests, special_request, status }) => {
    console.log(reservation_date);
    const [result] = await db.query('INSERT INTO reservations (id, reservation_date, reservation_time, num_guests, special_request, status) values (?,?,?,?,?,?)', [
        id,
        reservation_date,
        reservation_time,
        num_guests,
        special_request,
        status
    ]);

    if (!result.affectedRows) return null;

    const newReservation = await selectById(id);

    return newReservation;
};

module.exports = { selectAll, insert };
