var express = require('express');
var app = express();

//The following lines are for authentication
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser') ;

var exphbs = require('express-handlebars');
// HLS for login session messaging
var flash = require('connect-flash');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // for session messaging

//For Handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


//For Handlebars
app.set('views', './views')
app.engine('handlebars', exphbs({ extname: '.handlebars' }));
app.set('view engine', 'handlebars');


//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app, passport);

// Passport Strategy. Passing in passport and User object
require('./config/passport/passport.js')(passport, models.User);

    //Sync Database
// models.sequelize.sync({ force: true }).then(function() {
    models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});

app.listen(5000, function(err) {
 
  if (!err)
      console.log("Site is live");
  else console.log(err)

});



