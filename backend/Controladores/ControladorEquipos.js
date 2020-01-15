const express = require('express');
const router = express.Router();
const Equipos = require('../Clases/Equipos');
const Response = require('../tools/Response');
const _ = require('underscore');
const RespuestaServicio = require('../Clases/RespuestaServicio');
// objeto para respuestas estandarizadas
let ObjRespuestaServicio = new RespuestaServicio;

router.get('/Obtener', (req, res) => {
    const equipo = new Equipos;

    equipo.Consultar_Todos()
        .then(resp => {
            ObjRespuestaServicio.Respuesta = 'OK';
            ObjRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, ObjRespuestaServicio, 200);
        })
        .catch(err => {
            ObjRespuestaServicio.Respuesta = 'NOK';
            ObjRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, ObjRespuestaServicio, 404, 'Se cae al consultar los equipos');
        });
});

module.exports = router;