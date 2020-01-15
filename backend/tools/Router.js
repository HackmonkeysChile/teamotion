//using de componentes
// ej: const Demonio = require('../Controladores/Demonio')
const Emociones = require('../Controladores/ControladorEmociones');
const Personas = require('../Controladores/ControladorPersonas');
const Tareas = require('../Controladores/ControladorTareas');
const Daily = require('../Controladores/ControladorDaily');
const Equipos = require('../Controladores/ControladorEquipos');
const PersonasEquipos = require('../Controladores/ControladorPersonasEquipo');

const routes = (server) => {
    // server.use('/nombre', controlador)
    // ej: server.use('/Demonio', Demonio)
    server.use('/Emociones', Emociones);
    server.use('/Personas', Personas);
    server.use('/Tareas', Tareas);
    server.use('/Daily', Daily);
    server.use('/Equipos', Equipos);
    server.use('/PersonasEquipos', PersonasEquipos);
};

module.exports = routes;