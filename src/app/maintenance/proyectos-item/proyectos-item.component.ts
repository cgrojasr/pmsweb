import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { combo_box } from 'src/app/models/base-model';
import { Proyecto } from 'src/app/models/proyectos-model';
import { ColaboradorService } from 'src/app/services/colaborador/colaborador.service';
import { ProyectosService } from 'src/app/services/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {

  id_proyecto: number = 0

  proyecto: Proyecto = {
    id_proyecto: 0,
    nombre: '',
    id_pm_asignado: 0,
    id_po_asignado: 0,
    prosupuesto: 0,
    fecha_inicio: new Date(),
    id_estado: 0
  }

  colaboradores_pm: combo_box[] = []
  colaboradores_po: combo_box[] = []

  constructor(
    private colaboradorService: ColaboradorService,
    private proyectoService: ProyectosService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private coookie: CookieService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      params => {
        if(params["id_proyecto"] !== undefined){
          this.id_proyecto = params["id_proyecto"]
          this.proyectoService.buscarPorId(this.id_proyecto).subscribe(
            result => {
              this.proyecto = result
              this.coookie.set("proyecto_cookie", JSON.stringify(result))
              this.proyecto = JSON.parse(this.coookie.get("proyecto_cookie"))
              console.log(this.proyecto)
              console.log(this.coookie.get("proyecto_cookie"))
            }
          )
        }
      }
    )

    this.colaboradorService.PM_Combobox().subscribe(
      result => {
        this.colaboradores_pm = result
      }
    )
  }

  btnRegistra_Click():void{
    this.proyectoService.registrar(this.proyecto).subscribe(
      result => {
        this.router.navigateByUrl('maintenance/proyectos')
      }
    )
  }
}
