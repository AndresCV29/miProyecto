import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EventsComponent} from './events.component';
import {EventsPageRoutingModule} from './events-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    EventsPageRoutingModule,
    LayoutModule,
  ],
  declarations: [EventsComponent],
  exports: [

  ]

})
export class EventsPageModule {}
