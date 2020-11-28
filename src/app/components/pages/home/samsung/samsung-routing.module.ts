import { NgModule } from '@angular/core';
import {SamsungComponent} from './samsung.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: SamsungComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SamsungPageRoutingModule {}
