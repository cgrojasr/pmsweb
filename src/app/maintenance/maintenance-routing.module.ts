import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ReleasesComponent } from './releases/releases.component';
import { ProyectosItemComponent } from './proyectos-item/proyectos-item.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent,
    children: [
      {
        path: '',
        redirectTo: 'proyectos',
        pathMatch: 'full'
      },
      {
        path: 'proyectos',
        component: ProyectosComponent
      },
      {
        path: 'proyecto-item',
        component: ProyectosItemComponent
      },
      {
        path: 'proyecto-item/:id_proyecto',
        component: ProyectosItemComponent
      },
      {
        path: 'releases',
        component: ReleasesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaintenanceRoutingModule { }
