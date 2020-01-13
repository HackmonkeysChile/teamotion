import {OBTENER_TAREAS_PERSONA} from '../actions/tareas';
import Tareas from "../../models/Tareas";

const estadoInicial ={
    tareas:[]
}

const tareasReducer=(estado=estadoInicial, accion)=>{
    switch (accion.type){
        case OBTENER_TAREAS_PERSONA:
            return{
                tareas:accion.tareas
            }; 
    }
    return estado;
}
export default tareasReducer;