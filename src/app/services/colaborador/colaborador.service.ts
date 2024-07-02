import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { combo_box } from 'src/app/models/base-model';
import { ColaboradorAutenticar, ColaboradorToken } from 'src/app/models/colaborador-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(
    private http: HttpClient
  ) { }

  PM_Combobox():Observable<combo_box[]> {
    return this.http.get<combo_box[]>(`${environment.url}colaborador/cbpmactivos`)
  }

  Autenticar(colaborador: ColaboradorAutenticar):Observable<ColaboradorToken>{
    console.log(colaborador)
    console.log(`${environment.url}colaborador/autenticar`)
    return this.http.post<ColaboradorToken>(`${environment.url}colaborador/autenticar`, colaborador)
  }
}
