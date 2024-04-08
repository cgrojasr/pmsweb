import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  proyecto: Proyecto = {
    id_proyecto: 0,
    nombre: '',
    id_pm_asignado: 0,
    fecha_inicio: new Date(),
    id_estado: 0
  }

  proyecto_result: Proyecto = {
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
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.gestorService.listartodo().subscribe(
      result => {
        this.gestores = result
      }
    )
  }

  btnRegistra_Click():void{
    this.proyectoService.registrar(this.proyecto).subscribe(
      result => {
        this.proyecto_result = result
        console.log(this.proyecto_result)
        this.router.navigateByUrl('maintenance/proyectos')
      }
    )
  }
}
