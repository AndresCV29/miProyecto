import { NgModule } from '@angular/core';
import {ShopallComponent} from './shopall.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: ShopallComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ShopallPageRoutingModule {}
