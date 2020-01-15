import { OBTENER_TAREAS_PERSONA } from '../actions/tareas';
import { ACTUALIZAR_ESTADO_TAREA } from '../actions/tareas';
import { OBTENER_TAREAS } from '../actions/tareas';
import { INGRESAR_TAREA } from '../actions/tareas';
import Tareas from "../../models/Tareas";

const estadoInicial = {
    tareas: []
}

const tareasReducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case OBTENER_TAREAS_PERSONA:
            return {
                tareas: accion.tareas
            }
        case OBTENER_TAREAS:
            return {
                tareas: accion.tareas
            }
        case ACTUALIZAR_ESTADO_TAREA:
            return {
                tareas: accion.tareas
            }
        case INGRESAR_TAREA:
            return {
                tareas: accion.tareas
            }

    }
    return estado;
}
export default tareasReducer;