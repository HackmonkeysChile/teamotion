import Daily from '../../models/Daily';

export const INSERTAR_DAILY = 'INSERTAR_DAILY';
export const ingresarDaily = (idPersona, idEmocion) => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.25:3000/Daily/Crear", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id_persona: idPersona, id_emocion: idEmocion })
            })

            dispatch({ type: INSERTAR_DAILY });
        } catch (e) {
            throw new Error(e);
        }
    }
}

