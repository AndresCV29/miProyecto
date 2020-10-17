import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContentComponent} from './content.component';
import {ContentPageRoutingModule} from './content-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NzAlertModule, NzListModule, NzSkeletonModule, NzSpinModule, NzSwitchModule} from 'ng-zorro-antd';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ContentPageRoutingModule,
    LayoutModule,
    NzSwitchModule,
    NzListModule,
    NzSkeletonModule,
    NzSpinModule,
    NzAlertModule,
  ],
  declarations: [ContentComponent],
  exports: [

  ]

})
export class ContentPageModule {}
