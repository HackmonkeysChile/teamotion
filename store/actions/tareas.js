import Tareas from '../../models/Tareas';

export const OBTENER_TAREAS_PERSONA = 'OBTENER_TAREAS_PERSONA';
export const obtenerPorID = (idPersona) => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.12:3000:3000/Tareas/TareasPersona/" + idPersona, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!respuesta.ok) {
                throw new Error('Vuelva a ingresar sus datos');
            }
            const respuestaJson = await respuesta.json();
            let tareas = [];

            respuestaJson.Descripcion.forEach(tarea => {
                tareas.push(new Tareas(
                    tarea.ID_TAREA,
                    tarea.TITULO,
                    tarea.FECHA,
                    tarea.ID_ESTADO = null,
                    tarea.ID_PERSONA,
                    tarea.DESCRIPCION));
            });

            dispatch({ type: OBTENER_TAREAS_PERSONA, tareas: tareas });
        } catch (e) {
            throw new Error(e);
        }
    }
};


export const ACTUALIZAR_ESTADO_TAREA = 'ACTUALIZAR_ESTADO_TAREA';
export const actualizarEstado = (idTarea,idEstado) => {
    
    return async dispatch => {
        console.log('DISPATCH');
        try {
            await fetch("http://192.168.0.12:3000/Tareas/ActualizarEstado/" + idTarea, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id_estado: idEstado })
            })

            dispatch({ type: ACTUALIZAR_ESTADO_TAREA });
        } catch (e) {
            throw new Error(e);
        }
    }
}


export const OBTENER_TAREAS = 'OBTENER_TAREAS';
export const obtenerTareas = () => {
    return async dispatch => {
        try {
            const respuesta = await fetch("http://192.168.0.12:3000/Tareas/Obtener", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!respuesta.ok) {
                throw new Error('Vuelva a ingresar sus datos');
            }
            const respuestaJson = await respuesta.json();
            let todasTareas = [];

            respuestaJson.Descripcion.forEach(tarea => {
                todasTareas.push(new Tareas(
                    tarea.ID_TAREA,
                    tarea.TITULO,
                    tarea.FECHA,
                    tarea.ID_ESTADO,
                    tarea.ID_PERSONA,
                    tarea.DESCRIPCION));
            });

            dispatch({ type: OBTENER_TAREAS_PERSONA, todasTareas: todasTareas });
        } catch (e) {
            throw new Error(e);
        }
    }
};