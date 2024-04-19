import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto, ProyectosItem } from 'src/app/models/proyectos-model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  proyectos: ProyectosItem[] = [
    {
      id_proyecto: 1,
      nombre: 'App Movil Banco Nacional',
      estado: 'Planificación',
      pm_asignado: 'Cristiano Ronaldo'
    },
    {
      id_proyecto: 2,
      nombre: 'Backup de servidores',
      estado: 'Ejecución',
      pm_asignado: 'Chiquito Romero'
    },
    {
      id_proyecto: 3,
      nombre: 'App de Beneficios',
      estado: 'Maduración',
      pm_asignado: 'Reymond Manco'
    }
  ]

  listar():Observable<ProyectosItem[]>{
    return of(this.proyectos)
  }

  registrar(proyecto: Proyecto):Observable<Proyecto>{
    return of(proyecto)
  }
}
