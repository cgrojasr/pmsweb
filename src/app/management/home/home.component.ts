import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ColaboradorToken } from 'src/app/models/colaborador-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colaboradorToken: ColaboradorToken = {
    id_colaborador: 0,
    apellidos: "",
    nombre: ""
  }

  /**
   *
   */
  constructor(
    private cookie: CookieService) {
  }

  ngOnInit(): void {
    this.colaboradorToken = JSON.parse(this.cookie.get('token')) 
  }
}
