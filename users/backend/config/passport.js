/**
 * Descripcion: passport.js, esta clase contiene las funciones que permite realizar validacioes de email
 *             y contaseña enn el ingreso y registro de usuarios
 * Author: Lorena Fajardo Díaz
 * Version: 1.0.0
 */


// Constructor utilizado para la validacion de usuario y contraseña
const LocalStrategy = require('passport-local').Strategy;

// Importacion del modelo user
const User = require('../models/user');

module.exports = function (passport) {
  
  //serialize y deserialize user so usados para la autenticacion del usuario
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // validaciones para el registro de usuarios
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true 
  },
  function (req, email, password, done) {
    User.findOne({'email': email}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, req.flash('signupMessage', 'El correo ya existe'));
      } else {
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save(function (err) {
          if (err) { throw err; }
          return done(null, newUser);
        });
      }
    });
  }));

   // validaciones para el ingreso de usuarios
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function (req, email, password, done) {
    User.findOne({'email': email}, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'No User found'))
      }
      if (!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Wrong. password'));
      }
      return done(null, user);
    });
  }));
}
