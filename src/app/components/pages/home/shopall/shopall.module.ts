import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ShopallComponent} from './shopall.component';
import {ShopallPageRoutingModule} from './shopall-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NzAlertModule, NzCardModule, NzGridModule, NzListModule, NzSkeletonModule, NzSpinModule, NzSwitchModule} from 'ng-zorro-antd';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ShopallPageRoutingModule,
    LayoutModule,
    NzSwitchModule,
    NzListModule,
    NzSkeletonModule,
    NzSpinModule,
    NzAlertModule,
    NzCardModule,
    NzGridModule,
  ],
  declarations: [ShopallComponent],
  exports: [

  ]

})
export class ShopallPageModule {}
