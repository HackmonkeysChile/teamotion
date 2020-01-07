const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Tareas {
    constructor(ID_TAREA, TITUTLO, FECHA, ID_ESTAOO, ID_PERSONAS) {
        this.ID_TAREA = ID_TAREA;
        this.TITUTLO = TITUTLO;
        this.ID_ESTAOO = ID_ESTAOO;
        this.ID_PERSONAS = ID_PERSONAS;
    }
}

module.exports = Tareas;