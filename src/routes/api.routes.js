const router = require("express").Router();

router.use("/menus", require("./api/menus.routes"));

router.use("/users", require("./api/users.routes"));

module.exports = router;
