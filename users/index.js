const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const { url } = require('./backend/config/database');

const { engine } = require("express-handlebars");

mongoose.connect(url).then(()=> console.log('conectados con mongoDBAtlas'));

require('./backend/config/passport')(passport);

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine({
    defaultLayout: "main",
	layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
	extname: ".hbs",
}));

app.set("view engine", ".hbs");

// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
// required for passport

app.use(session({
	secret: 'finalworkshop',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
require('./backend/controller/user.controller')(app, passport);

//app.use('/',require('./backend/routes/user.routes'));
//app.use('/login',require('./backend/routes/user.routes'));
//app.use('/signup',require('./backend/routes/user.routes'));
//app.use('/room',require('./backend/routes/user.routes'));



// static files
app.use(express.static(path.join(__dirname, 'public')));
// start the server
app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});
