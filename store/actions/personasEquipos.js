import PersonasEquipos from '../../models/PersonasEquipos';
import { Children } from 'react';


export const OBTENER_PERSONAS_EQUIPO = 'OBTENER_PERSONAS_EQUIPO';
export const obtenerPorID = (idEquipo) => {
    console.log(idEquipo);
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.25:3000/PersonasEquipos/PersonasPorEquipo/" + idEquipo, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!respuesta.ok) {
                throw new Error('Vuelva a ingresar sus datos');
            }
            const respuestaJson = await respuesta.json();
            
            let personasEquipos = [];
            respuestaJson.Descripcion.forEach(personasEquipo => {
                personasEquipos.push(new PersonasEquipos(
                    personasEquipo.ID_PERSONAS_EQUIPOS,
                    personasEquipo.ID_PERSONA,
                    personasEquipo.ID_EQUIPO,
                ));
            });
            dispatch({ type: OBTENER_PERSONAS_EQUIPO, personasEquipos: personasEquipos });
        } catch (e) {
            throw new Error(e);
        }
    }
};