import Equipos from '../../models/Equipos';


export const OBTENER_EQUIPOS = 'OBTENER_EQUIPOS';
export const obtenerEquipos = () => {
    
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.12:3000/Equipos/Obtener", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!respuesta.ok) {
                throw new Error('Vuelva a ingresar sus datos');
            }
            const respuestaJson = await respuesta.json();
            let equipos = [];
            respuestaJson.Descripcion.forEach(equipo => {
                equipos.push(new Equipos(
                    equipo.ID_EQUIPO,
                    equipo.NOMBRE,
                    equipo.ID_ESTADO
                    ));
            });

            dispatch({ type: OBTENER_EQUIPOS, equipos: equipos });
        } catch (e) {
            throw new Error(e);
        }
    }
};