import { Component, OnInit } from '@angular/core';
import { ProyectosItem } from 'src/app/models/proyectos-model';
import { ProyectosService } from 'src/app/services/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos-table',
  templateUrl: './proyectos-table.component.html',
  styleUrls: ['./proyectos-table.component.css']
})
export class ProyectosTableComponent implements OnInit {
  proyectos: ProyectosItem[] = []

  constructor(
    private proyectosService: ProyectosService
  ) {
  }

  ngOnInit(): void {
    this.proyectosService.listar().subscribe(result => {
      this.proyectos = result
    })
  }
}
