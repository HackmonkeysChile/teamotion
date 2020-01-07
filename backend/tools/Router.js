//using de componentes
// ej: const Demonio = require('../Controladores/Demonio')
const Emociones = require('../Controladores/ControladorEmociones');

const routes = (server) => {
    // server.use('/nombre', controlador)
    // ej: server.use('/Demonio', Demonio)
    server.use('/Emociones', Emociones);
};

module.exports = routes;