import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'security',
    pathMatch: 'full'
  },
  {
    path: 'security',
    loadChildren: ()=>import('./security/security.module').then(m=>m.SecurityModule)
  },
  {
    path: 'management',
    loadChildren: ()=>import('./management/management.module').then(m=>m.ManagementModule)
  },
  {
    path: 'maintenance',
    loadChildren: ()=>import('./maintenance/maintenance.module').then(m=>m.MaintenanceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
