import { NgModule } from '@angular/core';
import {XiaomiComponent} from './xiaomi.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: XiaomiComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class XiaomiPageRoutingModule {}
