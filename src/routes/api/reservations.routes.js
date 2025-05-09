const router = require("express").Router();
const { getAll, create, getReservationById } = require("../../controllers/reservations.controller");

router.get("/", getAll);
router.get("/:reservationsId", getReservationById);

router.post("/", create);

module.exports = router;
