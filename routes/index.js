const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const accountRoutes = require("./auth");

router.use("/api", apiRoutes);
router.use('/', accountRoutes);


// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
