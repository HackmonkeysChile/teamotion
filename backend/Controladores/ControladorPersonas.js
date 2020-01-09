const express = require('express');
const router = express.Router();
const Persona = require('../Clases/Personas');
const Response = require('../tools/Response');
const _ = require('underscore');
const RespuestaServicio = require('../Clases/RespuestaServicio');

router.post('/Autenticar', (req, res) => {
    const persona = new Persona;
    const objRespuestaServicio = new RespuestaServicio;

    const data = _.pick(req.body, ['correo', 'clave']);

    console.log(req.body);

    persona.CORREO = data.correo;
    persona.CLAVE = data.clave;

    persona.Login()
        .then(resp => {

            console.log(resp);
    
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = erter;

            Response.error(req, res, objRespuestaServicio, 500, 'Se cae al autenticar una persona');
        });
})

router.get('/Obtener', (req, res) => {
    const persona = new Persona;
    const objRespuestaServicio = new RespuestaServicio;

    persona.Consultar_Todos()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al consultar todas las personas');
        });
});

router.get('/Obtener/:id_persona', (req, res) => {
    const persona = new Persona;
    const objRespuestaServicio = new RespuestaServicio;

    persona.ID_PERSONA = req.params.id_persona;

    persona.Consultar_Por_ID()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al obtener una persona por el id');
        })
});

router.post('/Crear', (req, res) => {
    const persona = new Persona;
    const objRespuestaServicio = new RespuestaServicio;

    const data = _.pick(req.body, ['nombre', 'apellido','fecha_nacimiento','correo', 'clave', 'id_rol', 'id_estado']);

    persona.NOMBRE = data.nombre;
    persona.APELLIDO = data.apellido;
    persona.FECHA_NACIMIENTO = data.fecha_nacimiento;
    persona.CORREO = data.correo;
    persona.CLAVE = data.clave;
    persona.ID_ROL = data.id_rol;
    persona.ID_ESTADO = data.id_estado;

    persona.Crear()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = 'pasa';

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al crear una persona');
        });
});

router.put('/Actualizar/:id_persona', (req, res) => {
    const persona = new Persona;
    const objRespuestaServicio = new RespuestaServicio;

    const data = _.pick(req.body, ['nombre', 'apellido','fecha_nacimiento','correo', 'clave', 'id_rol', 'id_estado']);

    persona.ID_PERSONA = req.params.id_persona;
    persona.NOMBRE = data.nombre;
    persona.APELLIDO = data.apellido;
    persona.FECHA_NACIMIENTO = data.fecha_nacimiento;
    persona.CORREO = data.correo;
    persona.CLAVE = data.clave;
    persona.ID_ROL = data.id_rol;
    persona.ID_ESTADO = data.id_estado;

    persona.Actualizar_Por_ID()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req,res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al actualizar una persona por id');
        })
});

router.delete('/Eliminar/:id_persona', (req, res) => {
    const persona = new Persona;
    const objRespuestaServicio = new RespuestaServicio;

    persona.ID_PERSONA = req.params.id_persona;

    persona.Eliminar_Por_ID()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al eliminar una persona por id');
        })
});

module.exports = router;