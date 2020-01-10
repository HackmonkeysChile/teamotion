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
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        parametros.input('CORREO', sql.VarChar, this.CORREO);
        parametros.input('CLAVE', sql.VarChar, this.CLAVE);
    
        const Procedimiento = 'AUTENTICAR_PERSONA'
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

        parametros.input('NOMBRE', sql.VarChar, this.NOMBRE);
        parametros.input('APELLIDO', sql.VarChar, this.APELLIDO);
        parametros.input('FECHA_NACIMIENTO', sql.Date, this.FECHA_NACIMIENTO);
        parametros.input('CORREO', sql.VarChar, this.CORREO);
        parametros.input('CLAVE', sql.VarChar, this.CLAVE);
        parametros.input('ID_ROL', sql.Int, this.ID_ROL);

        const Procedimiento = 'INSERTAR_PERSONA';

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


    Consultar_Todos(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        const Procedimiento = 'CONSULTAR_PERSONAS';

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

    Consultar_Por_ID(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        parametros.input('ID_PERSONA', sql.Int, this.ID_PERSONA);

        const Procedimiento = 'CONSULTAR_PERSONA_POR_ID';

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

    Actualizar_Por_ID(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        parametros.input('ID_PERSONA', sql.Int, this.ID_PERSONA);
        parametros.input('NOMBRE', sql.VarChar, this.NOMBRE);
        parametros.input('APELLIDO', sql.VarChar, this.APELLIDO);
        parametros.input('FECHA_NACIMIENTO', sql.Date, this.FECHA_NACIMIENTO);
        parametros.input('CORREO', sql.VarChar, this.CORREO);
        parametros.input('CLAVE', sql.VarChar, this.CLAVE);
        parametros.input('ID_ROL', sql.Int, this.ID_ROL);
        parametros.input('ID_ESTADO', sql.Int, this.ID_ESTADO);

        const Procedimiento = 'ACTUALIZAR_PERSONA_POR_ID';

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

    Eliminar_Por_ID(){
        const conexion = new sql.ConnectionPool(dbconfig);
        const parametros = new sql.Request(conexion);

        parametros.input('ID_PERSONA', sql.Int, this.ID_PERSONA);

        const Procedimiento = 'ELIMINAR_PERSONA_POR_ID';

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

module.exports = Personas;