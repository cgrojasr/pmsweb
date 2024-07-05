export interface Release {
    id_release: number,
    id_proyecto: number,
    nombre: string,
    fecha_inicio: Date,
    fecha_final: Date,
    descripcion: string
}

export interface ReleaseItem {
    id_release: number,
    nombre: string,
    fecha_inicio: Date,
    fecha_final: Date
}