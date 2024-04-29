import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(
    private router: Router
  ) {
  }

  btnNuevo_Click():void{
        this.router.navigateByUrl('maintenance/proyecto-item')
  }
}
