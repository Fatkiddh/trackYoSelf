const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const accountSchema = new Schema({

	username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false }

})

// Define schema methods
accountSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
accountSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');

		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('Account', accountSchema)
module.exports = User
