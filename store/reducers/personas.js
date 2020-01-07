import {AUTENTICAR_PERSONAS} from '../actions/personas';
import Personas from "../../models/Personas";

const estadoInicial ={
    personas:[]
}

const personasReducer=(estado=estadoInicial, accion)=>{
    switch (accion.type){
        case AUTENTICAR_PERSONAS:
            
    }
    return estado;
}
export default personasReducer;