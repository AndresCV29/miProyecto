import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../admin/home/home.module').then(m => m.HomePageModules),
      },
      {
        path: 'catalogo',
        loadChildren: () => import('../admin/catalogo/catalogo.module').then(m => m.CatalogoPageModule),
      },
    ],
  },
  //caa debe ir la ruta del loguin
  {
    path: 'login',
    //loadChildren: () => import('').then(m => m.HomePageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
