const router = require("express").Router();
const trackRoutes = require("./tracks");
// const accountRoutes = require("./account");

router.use("/tracks", trackRoutes);

module.exports = router;