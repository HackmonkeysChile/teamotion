import Personas from '../../models/Personas';

export const AUTENTICAR_PERSONAS = 'SET_PERSONAS';
export const autenticarPersona = (correo, clave) => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.21:8080/autenticarPersona/autenticarPersona", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ correo: correo, clave: clave })
            });
            const respuestaJson = await respuesta.json();
            console.log(respuestaJson);
        } catch (e) {
            console.log(e);
        }
    }
}