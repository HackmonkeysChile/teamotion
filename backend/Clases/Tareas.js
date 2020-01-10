const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Tareas {
    constructor(ID_TAREA, TITUTLO, FECHA, ID_ESTAOO, ID_PERSONAS) {
        this.ID_TAREA = ID_TAREA;
        this.TITUTLO = TITUTLO;
        this.ID_ESTAOO = ID_ESTAOO;
        this.ID_PERSONAS = ID_PERSONAS;
        this.FECHA = FECHA;
    }

    Crear(){}

    Consultar_Todos(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const Parametros = new sql.Request(conexion);

        const Prodecimiento = 'CONSULTAR_TAREAS';

        return new Promise((resolve, reject) => {
            Conexion.ConsultaQuery(Prodecimiento, Parametros, conexion, (err, tareaDB) => {
                if(err){
                    reject(err);
                }else{
                    resolve(tareaDB);
                }
            });
        });
    }

    Consultar_Por_ID(){}

    Actualizar_Por_ID(){}

    Eliminar_Por_ID(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const Parametros = new sql.Request(conexion);

        Parametros.input('ID_TAREA', sql.Int, this.ID_TAREA);

        const Prodecimiento = 'ELIMINAR_TAREA_POR_ID';

        return new Promise((resolve, reject) => {
            Conexion.ConsultaQuery(Prodecimiento, Parametros, conexion, (err, tareaDB) => {
                if(err){
                    reject(err);
                }else{
                    resolve(tareaDB);
                }
            });
        });
    }
}

module.exports = Tareas;