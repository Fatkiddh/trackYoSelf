const router = require("express").Router();
const trackRoutes = require("./tracks");
// const accountRoutes = require("./account");

router.use("/tracks", trackRoutes);
// router.use("/account", accountRoutes);

module.exports = router;