const router = require("express").Router();
const tracksController = require("../../controllers/tracksController");

// Matches with "/api/tracks"
router.route("/")
  .get(tracksController.findAll)
  .post(tracksController.create);

// Matches with "/api/tracks/:id"
router
  .route("/:id")
  .get(tracksController.findById)
  .put(tracksController.update)
  .delete(tracksController.remove);

module.exports = router;