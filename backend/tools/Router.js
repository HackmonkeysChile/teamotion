//using de componentes
// ej: const Demonio = require('../Controladores/Demonio')
const Emociones = require('../Controladores/ControladorEmociones');
const Personas = require('../Controladores/ControladorPersonas');

const routes = (server) => {
    // server.use('/nombre', controlador)
    // ej: server.use('/Demonio', Demonio)
    server.use('/Emociones', Emociones);
    server.use('/Personas', Personas);
};

module.exports = routes;