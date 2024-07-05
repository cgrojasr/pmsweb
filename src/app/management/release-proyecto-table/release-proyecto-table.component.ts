import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ColaboradorToken } from 'src/app/models/colaborador-model';
import { ProyectoPorPM } from 'src/app/models/proyecto-model';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-release-proyecto-table',
  templateUrl: './release-proyecto-table.component.html',
  styleUrls: ['./release-proyecto-table.component.css']
})
export class ReleaseProyectoTableComponent implements OnInit {
  proyectos: ProyectoPorPM[] = []

  constructor(
    private proyectoService: ProyectoService,
    private cookie: CookieService,
    private router: Router
  ) {    
  }

  ngOnInit(): void {
    let colaboradorLogin: ColaboradorToken = JSON.parse(this.cookie.get('token'))
    this.proyectoService.listarPorPM(colaboradorLogin.id_colaborador).subscribe(
      result => {
        console.log(result)
        this.proyectos = result
      }
    )
  }

  btnRelease_Click(id_proyecto: number): void {
    this.router.navigateByUrl(`management/release_proyecto/${id_proyecto}`)
  }
}
