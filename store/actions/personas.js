import Personas from '../../models/Personas';

export const AUTENTICAR_PERSONAS = 'AUTENTICAR_PERSONAS';
export const autenticarPersona = (correo, clave) => {

    return async dispatch => {

        try {
            const respuesta = await fetch("http://192.168.0.14:3000/Personas/Autenticar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ correo: correo, clave: clave })
            })

            if (!respuesta.ok) {
                throw new Error('Something went wrong!');
            }
            const respuestaJson = await respuesta.json();
            let personas = [];
            respuestaJson.Descripcion.forEach(persona => {
                personas.push(new Personas(persona.ID_PERSONA, persona.NOMBRE, persona.APELLIDO, persona.FECHA_NACIMIENTO,
                    persona.CORREO,
                    persona.ID_ROL,
                    persona.ED_ESTADO));
            });
            dispatch({ type: AUTENTICAR_PERSONAS, personas: personas });
        } catch (e) {
            throw new Error(e);
        }
    }
}