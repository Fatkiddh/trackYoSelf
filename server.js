const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve up static assets
app.use(express.static("client"));


// add routes
app.use(routes);
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy= require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authentication checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// set up promises with mongoose
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/treatYoSelf"
);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assests.
  // like our main.js file, or main.css file.
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't reconginze the routes
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
