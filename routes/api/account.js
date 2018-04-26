const router = require ('express').Router();
const signUpController = require("../../controllers/signUpController");

router
  .router('/account')
  .get(signUpController.findAll)
  .post(signUpController.create);

module.exports = router;
