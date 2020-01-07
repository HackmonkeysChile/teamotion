const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Roles {
    constructor(ID_ROL, NOMBRE) {
        this.ID_ROL = ID_ROL;
        this.NOMBRE = NOMBRE;
    }
} 

module.exports = Roles;