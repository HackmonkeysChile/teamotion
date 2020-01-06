import Emociones from "../../models/Emociones";


export const SET_EMOCIONES = 'SET_EMOCIONES';

export const traerEmociones = () => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.32:8080/emociones/emociones");
            const respuestaJson = await respuesta.json();
            let emociones = [];
            respuestaJson.forEach(emocion => {
               emociones.push(new Emociones(emocion.id, emocion.nombre, emocion.valor));
            });
            dispatch({type: SET_EMOCIONES, emociones: emociones});
        }
        catch (e) {
            console.log(e);
        }
    }
}