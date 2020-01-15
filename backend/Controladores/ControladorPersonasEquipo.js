const express = require('express');
const router = express.Router();
const Personas_Equipos = require('../Clases/Personas_Equipos');
const Response = require('../tools/Response');
const _ = require('underscore');
const RespuestaServicio = require('../Clases/RespuestaServicio');
// objeto para respuestas estandarizadas
let ObjRespuestaServicio = new RespuestaServicio;

router.get('/PersonasPorEquipo/:id_equipo', (req, res) => {
    const personas_equipo = new Personas_Equipos;
    personas_equipo.ID_EQUIPO = req.params.id_equipo;
    
    personas_equipo.Obtener_Por_Id_Equipo()
        .then(resp => {
            if(resp.recordset.length === 0)
            {
                return Promise.reject('Datos invalidos');
            }
            ObjRespuestaServicio.Respuesta = 'OK';
            ObjRespuestaServicio.Descripcion = resp.recordset;

            Response.success(req, res, ObjRespuestaServicio, 200);
        })
        .catch(err => {
            ObjRespuestaServicio.Respuesta = 'NOK';
            ObjRespuestaServicio.Descripcion_Error = err;

            Response.error(req, res, ObjRespuestaServicio, 404, 'Se cae al consultar las personas por equipo');
        });
});



module.exports = router;