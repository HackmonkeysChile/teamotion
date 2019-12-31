import Colaborador from "./Colaborador";

class Tareas{
    constructor (id, descripcion, estado, colaborador){
        this.id=id;
        this.descripcion=descripcion;
        this.estado=estado;
        this.colaborador = colaborador;
    }
}
export default Tareas;