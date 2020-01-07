const express = require('express');
const router = express.Router();
const Emocion = require('../Clases/Emociones');
const Response = require('../tools/Response');
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

router.get('/Obtener/:id', (req, res) => {
    const emocion = new Emocion;

    emocion.ID_EMOCION = req.body.ID_EMOCION;
});

module.exports = router;