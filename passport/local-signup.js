const db = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    username: email.trim(),
    email: email.trim(),
    password: password.trim(),
  };

  const newAccount = new db.Account(userData);
  newAccount.save((err) => {
    if (err) { return done(err); }
    return done(null);
  });
});
