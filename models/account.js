const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const accountSchema = new Schema({
  username: {
        type: String,
        required: 'Please enter a username'
    },
    password: {
        type: String,
        trim: true,
        required: 'please enter your password'
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, 'Please enter a valid e-mail address'],
        unique: true,
        required: true
    }
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
accountSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
accountSchema.pre('save', function saveHook(next) {
  const account = this;

  // proceed further only if the password is modified or the user is new
  if (!account.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }

    return bcrypt.hash(account.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }

      // replace a password string with hash value
      account.password = hash;

      return next();
    });
  });
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
