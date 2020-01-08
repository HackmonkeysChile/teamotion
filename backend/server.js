// Librerias y funcionalidades base
// Comunicacion y creacion del server
const express = require('express');
const app = express();
const server = require('http').Server(app);
// Seguridad de conexion
const cors = require('cors');
// Parseo de los datos
const bodyParser = require('body-parser');
// Configuraciones del servidor
const { host, port } = require('./config');
// Rutas de las paginas y controladores
const router = require('./tools/Router');
// Rutas del almacenamiento del sistema ya sea linux,max,windows
const path = require('path');
// Politicas de seguridada para las conexiones ajenas y local
app.use(cors());
// Parseo de todo el envio de datos al servidor a json y poder ingresar variables mediante la url
// Se estable un limite tanto para los json y peticiones rest(urlencoded) para poder recibir imagenes de gran tamaño hasta 50mb
app.use(bodyParser.json({ limit: '5mb' }));
// Se cambio a true para poder trabajar con array ya que no permititia usarlos como arreglo sino como json
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
// Establecer las rutas
router(app);
//Establecer el servidor(activar) y que nos indique en donde esta su direccion y puerto por el cual esta a la escucha

server.listen(port, () => {
    console.log(`La aplicacion esta escuchando en ${host}:${port}`);
});