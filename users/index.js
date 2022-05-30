/**
 * Descripcion: index.js contiene todas las configuraciones necesarias para el funcionamiento de la aplicacion
 * Author: Lorena Fajardo Díaz
 * Version: 1.0.0
 */

//Importacion de librerias
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

//Coexion a base de datos
mongoose.connect(url).then(()=> console.log('conectados con mongoDBAtlas'));

//importacion de la clase passport
require('./backend/config/passport')(passport);

// configuraciones
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


app.use(session({
	secret: 'finalworkshop',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Ruta donde se encuentra passport
require('./backend/controller/user.controller')(app, passport);

app.use(express.static(path.join(__dirname, 'public')));

// Inicializacion del servidor
app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});
