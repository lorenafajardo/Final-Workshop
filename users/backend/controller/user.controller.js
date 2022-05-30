
/**
 * Descripcion: User.controller.js, esta clase contiene las funciones principales que se ejecutaran en el programa
 * Author: Lorena Fajardo Díaz
 * Version: 1.0.0
 */

// Exportacion de app y passport
module.exports = (app, passport) => {

	// Request get que redirecciona a la pagina principal
	app.get('/', (req, res) => {
		res.render('main');
	});

	//Reques get que redirecciona a la opcion de ingresar
	app.get('/login', (req, res) => {
		res.render('login', {
			message: req.flash('loginMessage')
		});
	});

	//Request Post envia la informacion capurada en el formulario
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/room',
		failureRedirect: '/login',
		failureFlash: true
	}));

	// Request get que redirecciona a la opcion registrarse 
	app.get('/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	//Request Post envia la informacion capurada en el formulario de registro
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/room',
		failureRedirect: '/signup',
		failureFlash: true // allow flash message
	}),
    );

	// Request get que redirecciona a la sala de juego 
	app.get('/room', isLoggedIn, (req, res) => {
		res.render('room', {
			user: req.user
		});
	});

	// Funcion para autenticar el email y contraseña
	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		res.redirect('/');
	}
}