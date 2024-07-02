import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-proyecto-eliminar',
  templateUrl: './proyecto-eliminar.component.html',
  styleUrls: ['./proyecto-eliminar.component.css']
})
export class ProyectoEliminarComponent {

  @Input() id_proyecto:number = 0
  @Output() eventEliminarProyecto: EventEmitter<boolean> = new EventEmitter()
  constructor(
    private proyectoService: ProyectoService
  ) {
  }

  btnEliminar_Click(){
    this.proyectoService.eliminar(this.id_proyecto).subscribe(
      result=>{
        console.log(result)
        if(result)
          this.eventEliminarProyecto.emit(result)
        else {
          console.log("No se elimino el proyecto")
        }
      }
    )
  }
}
