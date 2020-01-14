import Tareas from '../../models/Tareas';

export const ACTUALIZAR_ESTADO_TAREA = 'ACTUALIZAR_ESTADO_TAREA';
export const actualizarEstado = (idTarea) => {
    let id_estado = 2;
    
    return async dispatch => {
        console.log('DISPATCH');
        try {
            const respuesta = await fetch("http://192.168.0.12:3000/Tareas/ActualizarEstado/" + idTarea,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id_estado: id_estado })
            })

            dispatch({ type: ACTUALIZAR_ESTADO_TAREA });
        } catch (e) {
            throw new Error(e);
        }
    }
}