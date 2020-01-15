const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Personas_Equipos {
    constructor(ID_PERSONAS_EQUIPOS, ID_PERSONA, ID_EQUIPO) {
        this.ID_PERSONAS_EQUIPOS = ID_PERSONAS_EQUIPOS;
        this.ID_PERSONA = ID_PERSONA;
        this.ID_EQUIPO = ID_EQUIPO;
    }


    Obtener_Por_Id_Equipo() {
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);
        parametros.input('ID_EQUIPO', sql.Int, this.ID_EQUIPO);

        const Prodecimiento = 'CONSULTAR_PERSONAS_EQUIPO_DE_EQUIPO';

        return new Promise((resolve, reject) => {
            Conexion.ConsultaQuery(Prodecimiento, parametros, conexion, (err, tareaDB) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(tareaDB);
                }
            });
        });
    }
}


module.exports = Personas_Equipos;