const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Notes collection and inserts the notes below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/treatYoSelf"
);

const trackSeed = [
  {
    title: "journal title 1",
    entry: "journal entry 1",
    other: 'test note 1'
   },
  {
    title: "journal title 2",
    entry: "journal entry 2",
    other: 'test note 2'
  }
];

db.Track
  .remove({})
  .then(() => db.Track.collection.insertMany(trackSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });