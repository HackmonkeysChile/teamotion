const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Emociones {
    constructor(ID_EMOCION, NOMBRE, VALOR) {
        this.ID_EMOCION = ID_EMOCION;
        this.NOMBRE = NOMBRE;
        this.VALOR = VALOR;
    }

    Consultar_Todos(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        const Procedimiento = 'CONSULTAR_EMOCIONES';

        return new Promise((resolve, reject) => {
            Conexion.ConsultaQuery(Procedimiento, parametros, conexion, (err, respuesta) => {
                if(err){
                    reject(err);
                }else{
                    resolve(respuesta);
                }
            });
        });
    }


    Crear(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        const Procedimiento = 'INSERTAR_EMOCIONES';

        return new Promise((resolve, reject) => {
            Conexion.ConsultaQuery(Procedimiento, parametros, conexion, (err, respuesta) => {
                if(err){
                    reject(err);
                }else{
                    resolve(respuesta);
                }
            });
        });
    }
}

module.exports = Emociones;