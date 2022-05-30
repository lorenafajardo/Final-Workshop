/**
 * Descripcion: la clase gamer.routes.js, contiene todas las rutas y el 
 *             metodo de peticion con el que se va a enviar la función.
 * Author: Lorena Fajardo Díaz
 * Version: 2.0.0
 */

/** Importacion de la clase express y la funcion de Router, para crear las rutas*/
const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
/** Importacion de la clase gamer.controller, que coniene las funciones */
const userController = require('../controller/user.controller');
const tableController = require('../controller/table.controller');

/** Declaracion de rutas */
/* router.get('/', userController.getMain);
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin );
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);
router.get('/room', userController.getProfile); */
//router.post('/room', tableController.start); 

/** Exportacion de las rutas */
module.exports = router;