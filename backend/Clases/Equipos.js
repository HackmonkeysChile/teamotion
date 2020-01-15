const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Equipos {
    constructor(ID_EQUIPO, NOMBRE, ID_ESTADO) {
        this.ID_EQUIPO = ID_EQUIPO;
        this.NOMBRE = NOMBRE;
        this.ID_ESTADO = ID_ESTADO;
    }

    Consultar_Todos(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const Parametros = new sql.Request(conexion);

        const Prodecimiento = 'CONSULTAR_EQUIPOS';

        return new Promise((resolve, reject) => {
            Conexion.ConsultaQuery(Prodecimiento, Parametros, conexion, (err, equipoDB) => {
                if(err){
                    reject(err);
                }else{
                    resolve(equipoDB);
                }
            });
        });
    }
    
}

module.exports = Equipos;