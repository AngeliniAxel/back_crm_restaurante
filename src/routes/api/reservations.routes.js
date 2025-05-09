const router = require("express").Router();
const { getAll, create, getReservationById, remove, getReservationsByDate, getReservationsByDateAndTime } = require("../../controllers/reservations.controller");

router.get("/", getAll);
router.get("/:reservationId", getReservationById);
router.get("/date/:reservationDate", getReservationsByDate);
router.get("/date/:reservationDate/:reservationTime", getReservationsByDateAndTime);
router.post("/", create);
router.delete("/:reservationId", remove)

module.exports = router;
