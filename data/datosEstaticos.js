import Emociones from '../models/Emociones';
import Tarea from '../models/Tareas';
import Colaborador from '../models/Colaborador';

export const Emocion =[
    new Emociones (1, 'Enojado', '#e60000'),
    new Emociones (2, 'Triste','#1a1aff'),
    new Emociones (3, 'Neutral', '#595959'),
    new Emociones (4, 'Feliz', '#ff3399'),
    new Emociones (5, 'Muy feliz', '#ffcc00')
];

export const Tareas=[
    new Tarea(1, 'Login app 1', 1, new Colaborador(1,"Juan")),
    new Tarea(2, 'Login app 2', 2, new Colaborador(1,"Juan")),
    new Tarea(3, 'Login app 3', 2, new Colaborador(1,"Juan")),
    new Tarea(4, 'Login app 4', 1, new Colaborador(1,"Juan")),
    new Tarea(5, 'Login app 5', 1, new Colaborador(1,"Juan")),
];