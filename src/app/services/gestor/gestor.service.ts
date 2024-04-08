import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GestorItem } from 'src/app/models/gestor-model';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  constructor() { }

  gestores: GestorItem[] = [
    {
      id_gestor: 1, 
      nombre: 'Cristiano Ronaldo'
    },
    {
      id_gestor: 2, 
      nombre: 'Chiquito Romero'
    }
  ]

  listartodo():Observable<GestorItem[]> {
    return of(this.gestores)
  }
}
