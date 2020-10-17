import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContentComponent} from './content.component';
import {ContentPageRoutingModule} from './content-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ContentPageRoutingModule,
    LayoutModule,
  ],
  declarations: [ContentComponent],
  exports: [

  ]

})
export class ContentPageModule {}
