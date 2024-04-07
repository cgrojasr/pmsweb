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
      nombre: '',
      estado: '',
      pm_asignado: ''
    },
    {
      id_proyecto: 2,
      nombre: '',
      estado: '',
      pm_asignado: ''
    }
  ]

  listar():Observable<ProyectosItem[]>{
    return of(this.proyectos)
  }

  registrar(proyecto: Proyecto):Observable<Proyecto>{
    return of(proyecto)
  }
}
