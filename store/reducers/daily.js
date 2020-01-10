import {INSERTAR_DAILY} from '../actions/daily';
import Daily from "../../models/Daily";

const estadoInicial ={
    daily:[]
}

const personasReducer=(estado=estadoInicial, accion)=>{
    switch (accion.type){
        case INSERTAR_DAILY:
            return{
                
            }; 
    }
    return estado;
}
export default dailyReducer;