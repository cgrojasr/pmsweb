export interface release {
    id_release: number,
    id_proyecto: number,
    nombre: string,
    fecha_inicio: Date,
    fecha_final: Date,
    descripcion: string
}

export interface release_table {
    id_release: number,
    nombre: string,
    fecha_inicio: Date,
    fecha_fin: Date
}

export interface ReleaseItem {
    nombre: string,
    fecha_inicio: Date,
    fecha_fin: Date
}