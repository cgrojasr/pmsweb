import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReleaseItem } from 'src/app/models/release-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  /**
   *
   */
  constructor(
    private http: HttpClient
  ) {
  }
  // releases: ReleaseItem[] = [
  //   {
  //     id_release: 1,
  //     nombre: 'release dummy 1',
  //     fecha_inicio: new Date('2024-01-01'),
  //     fecha_fin: new Date('2024-03-31') 
  //   },
  //   {
  //     id_release: 2,
  //     nombre: 'release dummy 2',
  //     fecha_inicio: new Date('2024-02-15'),
  //     fecha_fin: new Date('2024-05-10') 
  //   }
  // ]

  listarPorProyecto(id_proyecto: number):Observable<ReleaseItem[]>{
    // return of(this.releases)
    return this.http.get<ReleaseItem[]>(`${environment.url}release/listarporproyecto/${id_proyecto}`)
  }
}
