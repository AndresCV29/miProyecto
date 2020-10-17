import { NgModule } from '@angular/core';
import {ContentComponent} from './content.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: ContentComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ContentPageRoutingModule {}
