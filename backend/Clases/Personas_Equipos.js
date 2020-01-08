const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Personas_Equipos {
    constructor(ID_PERSONAS_EQUIPOS, ID_PERSONA, ID_EQUIPO) {
        this.ID_PERSONAS_EQUIPOS = ID_PERSONAS_EQUIPOS;
        this.ID_PERSONA = ID_PERSONA;
        this.ID_EQUIPO = ID_EQUIPO;
    }
}

module.exports = Personas_Equipos;