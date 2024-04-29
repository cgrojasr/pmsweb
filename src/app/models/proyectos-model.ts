export interface ProyectosItem{
    id_proyecto:number,
    nombre:string,
    pm_asignado: string
    estado: string
}

export interface Proyecto{
    id_proyecto: number,
    nombre: string,
    id_pm_asignado: number,
    id_po_asignado: number,
    prosupuesto: number,
    fecha_inicio:Date, //no son parte de la trama del API
    id_estado: number  //no son parte de la trama del API
}