const db = require("../models");
const axios = require("axios");
require('dotenv').config();


module.exports = {
  findAll: function(req, res) {
    db.Track
      .find(req.query)
      .populate('Account')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Track
      .findById(req.params.id)
      .populate('Account')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
//API call to indico for emotion analysis
    let completeMongooseObj = req.body;

    axios.post(
      'https://apiv2.indico.io/emotion',
      {
        'api_key': process.env.INDICO_API_KEY,
        'data': completeMongooseObj.entry
      }
    ).then(function(response) {
      completeMongooseObj.score = response.data.results;
//emotion analysis end
      db.Track
        .create(completeMongooseObj)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

      });
  },
  update: function(req, res) {
    db.Track
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Track
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
