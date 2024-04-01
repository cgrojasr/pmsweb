import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { HomeComponent } from './home/home.component';
import { MaestroComponent } from './maestro/maestro.component';
import { ReleasesComponent } from './releases/releases.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ManagementComponent,
    HomeComponent,
    MaestroComponent,
    ReleasesComponent,
    ProcesoComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule
  ]
})
export class ManagementModule { }
