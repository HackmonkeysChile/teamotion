import {AUTENTICAR_PERSONAS} from '../actions/personas';
import Personas from "../../models/Personas";
import {OBTENER_PERSONAS} from '../actions/personas';
const estadoInicial ={
    personas:[],
    todaspersonas:[]
}

const personasReducer=(estado=estadoInicial, accion)=>{
    switch (accion.type){
        case AUTENTICAR_PERSONAS:
            return{
                personas:accion.personas
            }; 
            case OBTENER_PERSONAS:
                return{
                    todaspersonas:accion.todaspersonas
                }; 
    }
    return estado;
}
export default personasReducer;