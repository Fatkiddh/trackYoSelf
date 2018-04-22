const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/treatYoSelf"
);

const noteSeed = [
  {
    title: "Test title 1",
    note: 'test note 1',
   },
  {
    title: "Test title 2",
    note: "Test note 2",
  }
];

db.Note
  .remove({})
  .then(() => db.Note.collection.insertMany(noteSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });