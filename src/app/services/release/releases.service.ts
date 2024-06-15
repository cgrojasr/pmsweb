import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { release_table } from 'src/app/models/release-model';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  releases: release_table[] = [
    {
      id_release: 1,
      nombre: 'release dummy 1',
      fecha_inicio: new Date('2024-01-01'),
      fecha_fin: new Date('2024-03-31') 
    },
    {
      id_release: 2,
      nombre: 'release dummy 2',
      fecha_inicio: new Date('2024-02-15'),
      fecha_fin: new Date('2024-05-10') 
    }
  ]

  constructor() { }

  listar(id_proyecto: number):Observable<release_table[]>{
    return of(this.releases)
  }
}
