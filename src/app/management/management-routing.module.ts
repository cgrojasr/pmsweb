import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management.component';
import { MaestroComponent } from './maestro/maestro.component';
import { ReleaseComponent } from './release/release.component';

const routes: Routes = [
  {
    path:'',
    component: ManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'maestro',
        component: MaestroComponent
      },
      {
        path: 'release',
        component: ReleaseComponent
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
export class ManagementRoutingModule { }
