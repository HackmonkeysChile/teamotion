import Daily from '../../models/Daily';

export const INSERTAR_DAILY = 'INSERTAR_DAILY';
export const ingresarDaily = (fecha, idPersona, idEmocion) => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.14:3000/Daily/Crear", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fecha: fecha, idPersona: idPersona, idEmocion: idEmocion })
            })
            if(!respuesta.ok){
                throw new Error('No se inrgesa la daily');
            }

            const respuestaJson= await respuesta.json();
            
        } catch (e) {
            throw new Error(e);
        }
    }
}