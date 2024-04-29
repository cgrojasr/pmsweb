import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto, ProyectosItem } from 'src/app/models/proyectos-model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(
    private http: HttpClient
  ) { }

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
    //return of(this.proyectos)
    return this.http.get<ProyectosItem[]>("http://localhost:5239/api/proyecto");
  }

  registrar(proyecto: Proyecto):Observable<Proyecto>{
    //return of(proyecto)
    return this.http.post<Proyecto>("http://localhost:5239/api/proyecto", proyecto)
  }

  actualizar(proyecto: Proyecto):Observable<boolean>{
    return this.http.put<boolean>("http://localhost:5239/api/proyecto", proyecto)
  }

  buscarPorId(id_proyecto: number):Observable<Proyecto>{
    return this.http.get<Proyecto>("http://localhost:5239/api/proyecto/"+id_proyecto)
  }

  eliminar(id_proyecto: number):Observable<boolean>{
    console.log("http://localhost:5239/api/proyecto/"+id_proyecto)
    return this.http.delete<boolean>("http://localhost:5239/api/proyecto/"+id_proyecto);
  }
}
