const router = require("express").Router();

router.use("/menus", require("./api/menus.routes"));

module.exports = router;
