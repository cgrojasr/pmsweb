import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { HomeComponent } from './home/home.component';
import { MaestroComponent } from './maestro/maestro.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReleaseComponent } from './release/release.component';
import { ReleaseTableComponent } from './release-table/release-table.component';
import { ReleaseItemComponent } from './release-item/release-item.component';
import { ProyectoTableComponent } from './proyecto-table/proyecto-table.component';
import { ProyectoItemComponent } from './proyecto-item/proyecto-item.component';
import { ProyectoEtapaTableComponent } from './proyecto-etapa-table/proyecto-etapa-table.component';
import { ReleaseProyectoTableComponent } from './release-proyecto-table/release-proyecto-table.component';
import { ReleaseProyectoComponent } from './release-proyecto/release-proyecto.component';



@NgModule({
  declarations: [
    ManagementComponent,
    HomeComponent,
    MaestroComponent,
    ProcesoComponent,
    ReleaseComponent,
    ReleaseTableComponent,
    ReleaseItemComponent,
    ProyectoTableComponent,
    ProyectoItemComponent,
    ProyectoEtapaTableComponent,
    ReleaseProyectoTableComponent,
    ReleaseProyectoComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule
  ]
})
export class ManagementModule { }
