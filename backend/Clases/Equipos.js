const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Equipos {
    constructor(ID_EQUIPO, NOMBRE, ID_ESTADO) {
        this.ID_EQUIPO = ID_EQUIPO;
        this.NOMBRE = NOMBRE;
        this.ID_ESTADO = ID_ESTADO;
    }

    
}

module.exports = Equipos;