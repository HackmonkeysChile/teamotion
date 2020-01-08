const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Estados {
    constructor(ID_ESTADO, NOMBRE) {
        this.ID_ESTADO = ID_ESTADO;
        this.NOMBRE = NOMBRE;
    }
}

module.exports = Estados;