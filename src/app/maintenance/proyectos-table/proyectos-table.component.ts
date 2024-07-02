import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoItem } from 'src/app/models/proyecto-model';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-proyectos-table',
  templateUrl: './proyectos-table.component.html',
  styleUrls: ['./proyectos-table.component.css']
})
export class ProyectosTableComponent implements OnInit {
  proyectos: ProyectoItem[] = []
  id_proyecto_selected: number = 0

  constructor(
    private proyectosService: ProyectoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.proyectosService.listar().subscribe(result => {
      this.proyectos = result
    })
  }


  btnEditar_Click(id_proyecto:number){
    this.router.navigateByUrl('maintenance/proyecto-item/'+id_proyecto)
  }

  btnEliminarPopUp_Click(id_proyecto: number): void {
    this.id_proyecto_selected = id_proyecto
  }

  eliminar_proyecto(result: boolean){
    if(result)
      this.proyectosService.listar().subscribe(
        result=>{
          this.proyectos = result
        }
    )
  }

  btnRelease_Click(id_proyecto: number):void{
    this.router.navigateByUrl('maintenance/release/'+id_proyecto)
  }
}
