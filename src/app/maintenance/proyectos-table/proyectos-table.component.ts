import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosItem } from 'src/app/models/proyectos-model';
import { ProyectosService } from 'src/app/services/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos-table',
  templateUrl: './proyectos-table.component.html',
  styleUrls: ['./proyectos-table.component.css']
})
export class ProyectosTableComponent implements OnInit {
  proyectos: ProyectosItem[] = []
  id_proyecto_selected: number = 0

  constructor(
    private proyectosService: ProyectosService,
    private router: Router
  ) {
  }

  @Input() saldo: number = 0

  ngOnInit(): void {
    this.proyectosService.listar().subscribe(result => {
      this.proyectos = result
    })
  }


  btnEditar_Click(id_proyecto:number){
    this.router.navigateByUrl('maintenance/proyecto-item/'+id_proyecto)
  }

  btnEliminar_Click(id_proyecto: number): void {
    this.id_proyecto_selected = id_proyecto
  }
}
