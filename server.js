const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const routes = require('./routes')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport');
const app = express()
const PORT = process.env.PORT || 3001;
// Route requires
const account = require('./routes/account')

// MIDDLEWARE
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// add routes
app.use(routes);


// Routes
app.use('/accounts', account)

// Starting Server
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
