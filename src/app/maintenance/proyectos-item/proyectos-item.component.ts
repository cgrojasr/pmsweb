import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestorItem } from 'src/app/models/gestor-model';
import { Proyecto } from 'src/app/models/proyectos-model';
import { GestorService } from 'src/app/services/gestor/gestor.service';
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
    fecha_inicio: new Date(),
    id_estado: 0
  }

  gestores: GestorItem[] = []
  /**
   *
   */
  constructor(
    private gestorService: GestorService,
    private proyectoService: ProyectosService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      params => {
        if(params["id_proyecto"] !== undefined){
          this.id_proyecto = params["id_proyecto"]
          //cargar los datos de la base de datos con el id
        }
      }
    )
    this.gestorService.listartodo().subscribe(
      result => {
        this.gestores = result
      }
    )
    
  }

  btnRegistra_Click():void{
    this.proyectoService.registrar(this.proyecto).subscribe(
      result => {
        console.log(result)
        this.router.navigateByUrl('maintenance/proyectos')
      }
    )
  }
}
