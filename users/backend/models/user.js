/**
 * Descripcion: la clase gamer.js, contiene el modelo utilizado para almacenar
 *              los jugadores. 
 * Author: Lorena Fajardo Díaz
 * Version: 2.0.0
 */

/** Importacion del esquema y modelo de moongose */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String}
});

// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// create the model for user and expose it to our app
module.exports = mongoose.model('User', userSchema);