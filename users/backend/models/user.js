/**
 * Descripcion: user.js, esta clase contiene las funciones que permite realizar validacioes de email
 *             y contaseña enn el ingreso y registro de usuarios
 * Author: Lorena Fajardo Díaz
 * Version: 1.0.0
 */

// Importacion de mogoose y bcrypt 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String}
});

// Se ecripta la contraseña
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Comprueba si la contraseña es valida
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Exporta el esquema del modelo de user
module.exports = mongoose.model('User', userSchema);
