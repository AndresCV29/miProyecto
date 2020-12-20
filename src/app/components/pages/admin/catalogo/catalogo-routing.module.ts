import { NgModule } from '@angular/core';
import {CatalogoComponent} from './catalogo.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: CatalogoComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CatalogoPageRoutingModule {}
