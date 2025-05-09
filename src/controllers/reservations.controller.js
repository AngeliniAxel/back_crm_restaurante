const Reservation = require("../models/reservations.models.js");

const getAll = async (req, res) => {
    const result = await Reservation.selectAll();
    res.json(result);
};

const getReservationById = async (req, res) => {
    const { reservationId } = req.params;
    const result = await Reservation.selectById(reservationId);
    res.json(result);
}

const create = async (req, res) => {
    const result = await Reservation.insert(req.body);
    res.json(result);
}



module.exports = { getAll, create, getReservationById };
