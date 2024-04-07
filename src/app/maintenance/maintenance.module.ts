import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { ReleasesComponent } from './releases/releases.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectosTableComponent } from './proyectos-table/proyectos-table.component';
import { ProyectosItemComponent } from './proyectos-item/proyectos-item.component';
import { ReleasesTableComponent } from './releases-table/releases-table.component';
import { ReleasesItemComponent } from './releases-item/releases-item.component';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MaintenanceComponent,
    ProcesoComponent,
    ReleasesComponent,
    ProyectosComponent,
    ProyectosTableComponent,
    ProyectosItemComponent,
    ReleasesTableComponent,
    ReleasesItemComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MaintenanceModule { }
