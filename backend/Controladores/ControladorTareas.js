const express = require('express');
const router = express.Router();
const Tarea = require('../Clases/Tareas');
const Response = require('../tools/Response');
const _ = require('underscore');
const RespuestaServicio = require('../Clases/RespuestaServicio');
// objeto para respuestas estandarizadas
let ObjRespuestaServicio = new RespuestaServicio;

router.get('/Obtener', (req, res) => {
    const tarea = new Tarea;

    tarea.Consultar_Todos()
        .then(resp => {
            ObjRespuestaServicio.Respuesta = 'OK';
            ObjRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, ObjRespuestaServicio, 200);
        })
        .catch(err => {
            ObjRespuestaServicio.Respuesta = 'NOK';
            ObjRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, ObjRespuestaServicio, 404, 'Se cae al consultar todas las tareas');
        });
});

router.delete('/EliminarPorId', (req, res) => {
    const id = req.body.id_tarea;
    const tarea = new Tarea;

    tarea.ID_TAREA = id;
    
    tarea.Eliminar_Por_ID()
        .then(resp => {
            ObjRespuestaServicio.Respuesta = 'OK';
            ObjRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, ObjRespuestaServicio, 200);
        })
        .catch(err => {
            ObjRespuestaServicio.Respuesta = 'NOK';
            ObjRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, ObjRespuestaServicio, 404, 'Se cae al eliminar una tarea por id');
        });
});

module.exports = router;