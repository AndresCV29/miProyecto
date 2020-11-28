import { NgModule } from '@angular/core';
import {ContactoComponent} from './contacto.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: ContactoComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ContactoPageRoutingModule {}
