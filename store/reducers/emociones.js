import {SET_EMOCIONES} from "../actions/emociones";
import Emociones from "../../models/Emociones";

const estadoInicial = {
    emociones: []
}

const emocionesReducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case SET_EMOCIONES:
            return {
                emociones: accion.emociones
            };
    }
    return estado;
}

export default emocionesReducer;