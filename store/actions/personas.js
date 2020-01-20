import Personas from '../../models/Personas';

export const AUTENTICAR_PERSONAS = 'AUTENTICAR_PERSONAS';
export const autenticarPersona = (correo, clave) => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.25:3000/Personas/Autenticar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ correo: correo, clave: clave })
            })

            if (!respuesta.ok) {
                throw new Error('Vuelva a ingresar sus datos');
            }
            const respuestaJson = await respuesta.json();
            let personas = [];

            respuestaJson.Descripcion.forEach(persona => {
                personas.push(new Personas(
                    persona.ID_PERSONA, 
                    persona.NOMBRE, 
                    persona.APELLIDO, 
                    persona.FECHA_NACIMIENTO,
                    persona.CORREO,
                    persona.CLAVE=null,
                    persona.ID_ROL,
                    persona.ID_ESTADO));
            });
            
            dispatch({ type: AUTENTICAR_PERSONAS, personas: personas });
        } catch (e) {
            throw new Error(e);
        }
    }
}

export const OBTENER_PERSONAS = 'OBTENER_PERSONAS';
export const obtenerPersonas = () => {
    
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.25:3000/Personas/Obtener", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!respuesta.ok) {
                throw new Error('Vuelva a ingresar sus datos');
            }
            const respuestaJson = await respuesta.json();
            let todaspersonas = [];
            respuestaJson.Descripcion.forEach(persona => {
                todaspersonas.push(new Personas(
                    persona.ID_PERSONA,
                    persona.NOMBRE,
                    persona.APELLIDO,
                    persona.FECHA_NACIMIENTO,
                    persona.CORREO,
                    persona.CLAVE=null,
                    persona.ID_ROL,
                    persona.ID_ESTADO));
            });

            dispatch({ type: OBTENER_PERSONAS, todaspersonas: todaspersonas });
        } catch (e) {
            throw new Error(e);
        }
    }
};
