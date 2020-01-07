const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Personas {
    constructor(ID_PERSONA, NOMBRE, APELLIDO, FECHA_NACIMIENTO, CORREO, CLAVE, ID_ROL, ID_ESTADO) {
        this.ID_PERSONA = ID_PERSONA;
        this.NOMBRE = NOMBRE;
        this.APELLIDO = APELLIDO;
        this.FECHA_NACIMIENTO = FECHA_NACIMIENTO;
        this.CORREO = CORREO;
        this.CLAVE = CLAVE;
        this.ID_ROL = ID_ROL;
        this.ID_ESTADO = ID_ESTADO;
    }

    Login(){
        
    }
}

module.exports = Personas;