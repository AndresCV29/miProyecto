import { NgModule } from '@angular/core';
import {DocsComponent} from './docs.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: DocsComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class DocsPageRoutingModule {}
