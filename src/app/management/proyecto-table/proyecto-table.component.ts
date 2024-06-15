import { Component } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos-model';

@Component({
  selector: 'app-proyecto-table',
  templateUrl: './proyecto-table.component.html',
  styleUrls: ['./proyecto-table.component.css']
})
export class ProyectoTableComponent {
  proyectos: Proyecto[] = []

  /**
   *
   */
  constructor() {
  }
}
