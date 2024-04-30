import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { combo_box } from 'src/app/models/base-model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(
    private http: HttpClient
  ) { }

  // gestores: GestorItem[] = [
  //   {
  //     id_gestor: 1,
  //     nombre: 'Cristiano Ronaldo'
  //   },
  //   {
  //     id_gestor: 2,
  //     nombre: 'Chiquito Romero'
  //   }
  // ]

  PM_Combobox():Observable<combo_box[]> {
    //return of(this.gestores)
    return this.http.get<combo_box[]>("http://localhost:5239/api/colaborador/cbpmactivos")
  }

  PO_Combobox():Observable<combo_box[]> {
    //return of(this.gestores)
    return this.http.get<combo_box[]>("http://localhost:5239/api/colaborador/cbpoactivos")
  }
}
