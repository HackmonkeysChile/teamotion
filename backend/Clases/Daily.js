const Conexion = require('../Conexion/Conexion');
const dbconfig = require('../Conexion/Credenciales');
const sql = require('mssql');

class Daily {
    constructor(ID_DAILY, FECHA, ID_PERSONA, ID_EMOCION) {
        this.ID_DAILY = ID_DAILY;
        this.FECHA = FECHA;
        this.ID_PERSONA = ID_PERSONA;
        this.ID_EMOCION = ID_EMOCION;
    }

    Crear(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        parametros.input('FECHA', sql.Date, this.FECHA);
        parametros.input('ID_PERSONA', sql.Int, this.ID_PERSONA);
        parametros.input('ID_EMOCION', sql.Int, this.ID_EMOCION);

        const Procedimiento = 'INSERTAR_DAILY';

        return new Promise((resolve, reject) => {
            Conexion.ConsultaQuery(Procedimiento, parametros, conexion, (err, dailyDB) => {
                if(err){
                    reject(err);
                }else{
                    resolve(dailyDB);
                }
            });
        });
    }

    Consultar_Todos(){}

    Consultar_Por_ID(){}

    Actualizar_Por_ID(){}

    Eliminar_Por_ID(){}
}

module.exports = Daily;