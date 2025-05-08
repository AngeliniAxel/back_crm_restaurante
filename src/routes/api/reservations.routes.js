const router = require("express").Router();
const { getAll } = require("../../controllers/reservations.controller");
const { insert } = require("../../models/reservations.models");


router.get("/", getAll);
router.post("/", insert);

module.exports = router;
