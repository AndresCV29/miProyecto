import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SamsungComponent} from './samsung.component';
import {SamsungPageRoutingModule} from './samsung-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NzAlertModule, NzCardModule, NzGridModule} from 'ng-zorro-antd';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    SamsungPageRoutingModule,
    LayoutModule,
    NzAlertModule,
    NzGridModule,
    NzCardModule,
  ],
  declarations: [SamsungComponent],
  exports: [

  ]

})
export class SamsungPageModule {}
