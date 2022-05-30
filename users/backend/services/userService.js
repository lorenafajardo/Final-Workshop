/**
 * Descripcion: userService.js, Contiene la funcion para enviar los datos a springboot por medio de axios
 * Auhor: Lorena Fajardo Diaz
 * Version: 1.0.0
 */
'use srict'

const data = new FormData();
   data.append('email', 'ee@gmail.com');
   data.append('password', '23456');
   fetch('http://localhost:8080/user', {
   method: 'POST',
   body: data
   }).then(function(response) {
   if(response.ok) {
       return response.text()
   } else {
       throw "Error en la llamada Ajax";
   }
})
   
