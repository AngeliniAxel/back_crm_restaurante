const router = require("express").Router();
const { getAll, getById } = require("../../controllers/menus.controller");

router.get("/", getAll);
router.get("/:menuId", getById);

module.exports = router;
