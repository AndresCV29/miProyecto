import { NgModule } from '@angular/core';
import {ResourcesComponent} from './resources.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: ResourcesComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ResourcesPageRoutingModule {}
