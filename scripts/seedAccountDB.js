const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Accounts collection and inserts the accounts below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/treatYoSelf"
);

  const accountSeed = [
    {
      username: "user1",
      password: "password1",
      email: 'email@gmail.com'
     },
    {
      username: "user2",
      password: "password2",
      email: 'email2@gmail.com'
    }
  ];
  
  db.Account
    .remove({})
    .then(() => db.Account.collection.insertMany(accountSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {e
      console.error(err);
      process.exit(1);
    });