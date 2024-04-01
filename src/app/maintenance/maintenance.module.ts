import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { ReleasesComponent } from './releases/releases.component';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [
    MaintenanceComponent,
    ProcesoComponent,
    ReleasesComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaintenanceModule { }
