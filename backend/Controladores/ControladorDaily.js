const express = require('express');
const router = express.Router();
const Daily = require('../Clases/Daily');
const Response = require('../tools/Response');
const _ = require('underscore');
const RespuestaServicio = require('../Clases/RespuestaServicio');

router.post('/Crear', (req, res) =>{
    const daily = new Daily;
    const objRespuestaServicio = new RespuestaServicio;

    const data = _.pick(req.body, ['fecha', 'id_persona', 'id_emocion']);

    daily.FECHA = data.fecha;
    daily.ID_PERSONA = data.id_persona;
    daily.ID_EMOCION = data.id_emocion;

    daily.Crear()
        .then(resp => {
            objRespuestaServicio.Respuesta = 'OK';
            objRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, objRespuestaServicio, 200);
        })
        .catch(err => {
            objRespuestaServicio.Respuesta = 'NOK';
            objRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, objRespuestaServicio, 500, 'Se cae al ingresar un Daily');
        });
})

module.exports = router;