import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto, ProyectoItem, ProyectoPorPM } from 'src/app/models/proyecto-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(
    private http: HttpClient
  ) { }

  // proyectos: ProyectosItem[] = [
  //   {
  //     id_proyecto: 1,
  //     nombre: 'App Movil Banco Nacional',
  //     estado: 'Planificación',
  //     pm_asignado: 'Cristiano Ronaldo'
  //   },
  //   {
  //     id_proyecto: 2,
  //     nombre: 'Backup de servidores',
  //     estado: 'Ejecución',
  //     pm_asignado: 'Chiquito Romero'
  //   },
  //   {
  //     id_proyecto: 3,
  //     nombre: 'App de Beneficios',
  //     estado: 'Maduración',
  //     pm_asignado: 'Reymond Manco'
  //   }
  // ]

  listarPorPM(id_colaborador: number):Observable<ProyectoPorPM[]>{
    return this.http.get<ProyectoPorPM[]>(`${environment.url}proyecto/listarporpm/${id_colaborador}`)
  }
  
  listar():Observable<ProyectoItem[]>{
    //return of(this.proyectos)
    return this.http.get<ProyectoItem[]>(`${environment.url}proyecto`);
  }

  registrar(proyecto: Proyecto):Observable<Proyecto>{
    //return of(proyecto)
    return this.http.post<Proyecto>(`${environment.url}proyecto`, proyecto)
  }

  actualizar(proyecto: Proyecto):Observable<boolean>{
    return this.http.put<boolean>(`${environment.url}proyecto`, proyecto)
  }

  buscarPorId(id_proyecto: number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${environment.url}proyecto/${id_proyecto}`)
  }

  eliminar(id_proyecto: number):Observable<boolean>{
    return this.http.delete<boolean>(`${environment.url}proyecto/${id_proyecto}`);
  }
}
