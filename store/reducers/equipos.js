import { OBTENER_EQUIPOS } from '../actions/equipos';

const estadoInicial = {
    equipos: []
}

const equiposReducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case OBTENER_EQUIPOS:
            return {
                equipos: accion.equipos
            }

    }
    return estado;
}
export default equiposReducer;