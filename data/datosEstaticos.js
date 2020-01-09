import Emociones from '../models/Emociones';
import Tarea from '../models/Tareas';

export const Emocion =[
    new Emociones (1, 'Excelente', 'rgba(255, 204, 0,0.7)'),
    new Emociones (2, 'Bien', '#ff3399'),
    new Emociones (3, 'No muy bien','#1a1aff'),
    new Emociones (4, 'Terrible', '#e60000'),
];

export const Tareas=[
    new Tarea(1, 'Login app 1', 1, new Colaborador(1,"Juan")),
    new Tarea(2, 'Login app 2', 2, new Colaborador(1,"Juan")),
    new Tarea(3, 'Login app 3', 2, new Colaborador(1,"Juan")),
    new Tarea(4, 'Login app 4', 1, new Colaborador(1,"Juan")),
    new Tarea(5, 'Login app 5', 1, new Colaborador(1,"Juan")),
];