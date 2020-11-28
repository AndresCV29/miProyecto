import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./client/client.module').then(n => n.ClientPageModule),
      },
      {
        path: 'shopall',
        loadChildren: () => import('./shopall/shopall.module').then(n => n.ShopallPageModule),
      },
      {
        path: 'xiaomi',
        loadChildren: () => import('./xiaomi/xiaomi.module').then(n => n.XiaomiPageModule),
      },
      {
        path: 'samsung',
        loadChildren: () => import('./samsung/samsung.module').then(n => n.SamsungPageModule),
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contacto/contacto.module').then(n => n.ContactoPageModule),
      },
    ],
  }
 ];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomePageRoutingModule {}
