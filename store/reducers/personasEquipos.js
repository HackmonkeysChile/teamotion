import { OBTENER_PERSONAS_EQUIPO } from '../actions/personasEquipos';

const estadoInicial = {
    personasEquipos: []
}

const personasEquiposReducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case OBTENER_PERSONAS_EQUIPO:
            return {
                personasEquipos: accion.personasEquipos
            }

    }
    return estado;
}
export default personasEquiposReducer;