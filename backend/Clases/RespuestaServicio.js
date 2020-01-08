
class RespuestaServicio {
    constructor(
        Respuesta,
        Descripcion,
        Descripcion_Error
    ) {
        this.Respuesta = Respuesta;
        this.Descripcion = Descripcion;
        this.Descripcion_Error = Descripcion_Error;
    }
}

module.exports = RespuestaServicio;