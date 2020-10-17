import { NgModule } from '@angular/core';
import {EventsComponent} from './events.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: EventsComponent,
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class EventsPageRoutingModule {}