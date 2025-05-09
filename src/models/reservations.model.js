const db = require("../config/db");

const selectAll = async () => {
  const result = await db.query("select * from reservations");

  return result[0];
};

const selectById = async (id) => {
  const [result] = await db.query(`select * from reservations where id = ?`, [
    id,
  ]);

  if (!result.length) return null;

  return result[0];
};

const selectByDate = async (date) => {
  const [result] = await db.query(`select * from reservations where reservation_date = ?`, [
    date,
  ]);

  if (!result.length) return null;

  return result;
};

const selectByDateAndTime = async (date, time) => {
  const [result] = await db.query(`select * from reservations where reservation_date = ? and reservation_time = ?`, [
    date,
    time
  ]);

  if (!result.length) return null;

  return result;
};

const insert = async ({
  user_id,
  table_id,
  reservation_date,
  reservation_time,
  num_guests,
  special_request,
  status,
}) => {
  console.log(reservation_date);
  const [result] = await db.query(
    "INSERT INTO reservations (user_id, table_id, reservation_date, reservation_time, num_guests, special_request, status) values (?,?,?,?,?,?,?)",
    [
      user_id,
      table_id,
      reservation_date,
      reservation_time,
      num_guests,
      special_request,
      status,
    ]
  );
  console.log(result);

  if (!result.affectedRows) return null;

  const newReservation = await selectById(result.insertId);

  return newReservation;
};

const deleteById = async (reservationId) => {
    const [result] = await db.query('delete from reservations where id = ?', [reservationId]);
    return result;
};

module.exports = { selectAll, selectById, selectByDate, selectByDateAndTime, insert, deleteById };
