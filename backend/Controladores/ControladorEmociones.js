const express = require('express');
const router = express.Router();
const Emocion = require('../Clases/Emociones');
const Response = require('../tools/Response');
const _ = require('underscore');
const RespuestaServicio = require('../Clases/RespuestaServicio');

router.get('/Obtener', (req, res) => {
    const emocion = new Emocion;
    const objRespuestaServicio = new RespuestaServicio;
    emocion.Consultar_Todos()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al consultar todas las emociones');
        });
});

router.get('/Obtener/:id_emocion', (req, res) => {
    const emocion = new Emocion;
    const objRespuestaServicio = new RespuestaServicio;

    emocion.ID_EMOCION = req.params.id_emocion;

    emocion.Consultar_Por_ID()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al obtener una emocion por el id');
        })
});

router.post('/Crear', (req, res) => {
    const emocion = new Emocion;
    const objRespuestaServicio = new RespuestaServicio;

    const data = _.pick(req.body, ['nombre', 'valor']);

    emocion.NOMBRE = data.nombre;
    emocion.VALOR = data.valor;

    emocion.Crear()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = 'pasa';

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al crear una emocion');
        });
});

router.put('/Actualizar/:id_emocion', (req, res) => {
    const emocion = new Emocion;
    const objRespuestaServicio = new RespuestaServicio;

    const data = _.pick(req.body, ['nombre', 'valor']);

    emocion.ID_EMOCION = req.params.id_emocion;
    emocion.NOMBRE = data.nombre;
    emocion.VALOR = data.valor;

    emocion.Actualizar_Por_Id()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req,res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al actualizar una emocion por id');
        })
});

router.delete('/Eliminar/:id_emocion', (req, res) => {
    const emocion = new Emocion;
    const objRespuestaServicio = new RespuestaServicio;

    emocion.ID_EMOCION = req.params.id_emocion;

    emocion.Eliminar_Por_Id()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 200, 'Se cae al eliminar una emocion por id');
        })
});

module.exports = router;