const router = require("express").Router();
const { getAll, getById, edit } = require("../../controllers/menus.controller");


router.get("/", getAll);
router.get("/:menuId", getById);
router.put("/:menuId", edit);

module.exports = router;
