const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve up static assets
app.use(express.static("client/build"));
// add routes
// app.use(routes);

// set up promises with mongoose
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact"
);

// start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});