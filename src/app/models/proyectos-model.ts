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
    id_estado: number,
    fecha_inicio: Date,
}