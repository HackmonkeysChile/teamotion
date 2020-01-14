
import { ACTUALIZAR_ESTADO_TAREA } from '../actions/estadoTareas';
import Tareas from "../../models/Tareas";

const estadoInicial = {
    tareas: []
}

const estadoTareasReducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case ACTUALIZAR_ESTADO_TAREA:
            return {
                tareas: accion.tareas
            };

    }
    return estado;
}
export default estadoTareasReducer;