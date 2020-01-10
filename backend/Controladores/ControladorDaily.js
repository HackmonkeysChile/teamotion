const express = require('express');
const router = express.Router();
const Daily = require('../Clases/Daily');
const Response = require('../tools/Response');
const _ = require('underscore');
const RespuestaServicio = require('../Clases/RespuestaServicio');
// objeto para respuestas estandarizadas
let ObjRespuestaServicio = new RespuestaServicio;