const db = require('../models');

module.exports = {

  create: function(req,res) {
    db.Account.create(req.body)
    .then(dbModel => {
      console.log(req.body);
      res.json(dbModel);
    })
    .catch(err => res.status(404).json(err));
  }
};
