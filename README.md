# Final-Workshop
### Creación de juego usando Java, MySQL, NodeJS, HTML, CSS y JavaScript

Juego Bingo que contiene las opciones de registro e ingreso mediante validación de usuario y contraseña. Los datos poporcionados por el usuario se almacenan en una base de datos de MongoDB. La parte de frontend del proyecto se realiza en nodejs, cuyas vistas constan de las instruccionnes del juego, una tabla bingo y una opción para sacar balotas, la cual arrojara los números y letras a jugar. Tambien se realiza una conexion de NodeJS con SpringBoot mediante Fetch, permitiendo tener los datos de los usuarios y del juego en una base de datos de MySQL.

## Pre-requisitos

- La parte de Frontend realizada en NodeJS y MongoDB, se encuenra ubicada en la carpeta users ( url: https://github.com/lorenafajardo/Final-Workshop/tree/main/users ), esta carpeta no coniene el archivo de *Node_modules*, debido a su gran tamaño, asi que, es necesario realizar las respectivas instalaciones que pida el programa cuando se vaya a ejecutar.

- En cuanto a la parte de backend realizada en spring boot, es necesario considerar que la base de datos uilizada fue MySQL y se diseñó en la aplicación MySQL Workbench, por ello antes de ejecutar el proyecto es necesario ejecutar el script adjuntado en el repositorio con el nombre "bingo_db.sql". las tablas se crearan automaicamente con la ejeución del proyecto.

- Para la conexión con la base de datos, se configuró el archivo applications.properties que se encuentra ubicado en la siguiente ruta: https://github.com/lorenafajardo/Final-Workshop/blob/main/backend/usersBingo/src/main/resources/application.properties asignandole el username: root y password: 12345. Sin embargo, este se debe configurar acorde a las condiciones del MySQL Workbench.

## Despliegue

El proyecto de NodeJs: users, se ejecuta en el puerto 3000 (http://localhost:3000). Inicialmente se encuentra la siguiente vista, que permitirá elegir entre igreso o registro.

![image](https://user-images.githubusercontent.com/87463011/170954133-052a5c67-343d-4ad3-a7bf-30907748ed43.png)

La opción de ingreso  y registro muestran las siguientes vistas

![image](https://user-images.githubusercontent.com/87463011/170954588-52576afa-ed84-4ddd-9d50-6e7b83e4e41f.png)
![image](https://user-images.githubusercontent.com/87463011/170955685-b7abd451-520f-4df1-ba91-7df3a6b9adb4.png)
![image](https://user-images.githubusercontent.com/87463011/170956021-87702db6-51a8-4b76-9616-73d158b48916.png)

En las imagenes se puede obsevar, que tanto el formulario de ingreso, como el de registro cuentan con las validaciones respectivas. Una vez sean validados los datos estos se almacenan en la base de datos MongoDB, como muestra la tercera imagen. Si el usuario ingresa datos que no son correctos, como por ejemplo, ingresar con un usuario que no ha sido registrado, no le permitira el acceso a la sala de juego y le limpiara el formulario para que vuelva a ingresar los datos. Por el contrario, si ingresa o se registra satisfactoriamente lo redireccionara a la sala de juego que se observa en la siguiente imagen

![image](https://user-images.githubusercontent.com/87463011/170956920-8f49e512-a7ef-4583-bb82-05f9ce3fce02.png)
![image](https://user-images.githubusercontent.com/87463011/170956757-5a2e0a97-f301-4de1-bcdd-05a075fb80dd.png)

Como se evidencia en las imagenes, en la sala de juegos se encuentra un tablero de bingo, el cual tiene la opción de realizar la marcación por el usuario, en la parte inferior tambien se observa una opción para simular el sacar balotas. Cuando el usuario haga una linea el programa enviará un mensaje informando que ganó.

En cuanto a la parte de backend realizada en SpringBoot, se hizo el consumo de API mediante fetch y se creó satisfactoriamente una tabla para trabajar con datos de los usuarios y del juego. 

![image](https://user-images.githubusercontent.com/87463011/170958316-7411aeb1-b0ca-421b-b716-c3665d2e85cf.png)
 
 la conexión con fetch se realizó mediante el puerto 8080 

## Observaciones

No se cumplierón con todos los objeivos planteados en el taller por cuestiones de tiempo. Aún es necesario implementar el temporizador y realizar la version multijugador en el proyecto. Adicionalmente, la parte de frontend tambien será modificada, ya que en esta ocasión se recurrió a una opción mas sencilla para agilizar el proceso.  

### Elaborado por:
    Lorena Fajardo Díaz

