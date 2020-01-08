import Emociones from "../../models/Emociones";


export const SET_EMOCIONES = 'SET_EMOCIONES';

export const traerEmociones = () => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.32:3000/Emociones/Obtener"); 
            const respuestaJson = await respuesta.json();
            let emociones = [];
            respuestaJson.Descripcion.forEach(emocion => {
                emociones.push(new Emociones(emocion.id_emocion, emocion.nombre, emocion.valor));
                console.log(emocion);
            });
            dispatch({type: SET_EMOCIONES, emociones: emociones});
        }
        catch (e) {
            console.log(e);
        }
    }
}