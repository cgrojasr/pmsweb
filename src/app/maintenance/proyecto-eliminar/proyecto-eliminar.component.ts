import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-eliminar',
  templateUrl: './proyecto-eliminar.component.html',
  styleUrls: ['./proyecto-eliminar.component.css']
})
export class ProyectoEliminarComponent {

  @Input() id_proyecto:number = 0
  constructor() {
  }

  btnEliminar_Click(){
    console.log(this.id_proyecto)
    console.log('Me eliminaste :( = '+this.id_proyecto)
  }
}
