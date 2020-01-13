import {INSERTAR_DAILY} from '../actions/daily';
import Daily from "../../models/Daily";

const estadoInicial ={
    daily:[]
}

const dailyReducer=(estado=estadoInicial, accion)=>{
    switch (accion.type){
        case INSERTAR_DAILY:
            return{
                daily: accion.daily
            }; 
    }
    return daily;
}
export default dailyReducer;