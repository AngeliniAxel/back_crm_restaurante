const Reservation = require('../models/reservations.model.js');
const { sendEmail } = require('../utils/mailjet.js');

const getAll = async (req, res) => {
    const result = await Reservation.selectAll();
    res.json(result);
};

const getReservationById = async (req, res) => {
    const { reservationId } = req.params;
    const result = await Reservation.selectById(reservationId);
    res.json(result);
};

const getReservationsByDate = async (req, res) => {
    const { reservationDate } = req.params;
    const result = await Reservation.selectByDate(reservationDate);
    res.json(result);
};

const getReservationsByDateAndTime = async (req, res) => {
    const { reservationDate, reservationTime } = req.params;
    const result = await Reservation.selectByDateAndTime(reservationDate, reservationTime);
    res.json(result);
};

const create = async (req, res) => {
    const result = await Reservation.insert(req.body);
    sendEmail(req.user, result);
    res.json(result);
};

const remove = async (req, res) => {
    const { reservationId } = req.params;
    const reservationDeleted = await Reservation.selectById(reservationId);
    const result = await Reservation.deleteById(reservationId);

    res.json(reservationDeleted);
};

module.exports = {
    getAll,
    getReservationById,
    getReservationsByDate,
    getReservationsByDateAndTime,
    create,
    remove,
};
