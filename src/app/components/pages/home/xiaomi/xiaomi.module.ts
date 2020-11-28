import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {XiaomiComponent} from './xiaomi.component';
import {XiaomiPageRoutingModule} from './xiaomi-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule, NzResultModule} from 'ng-zorro-antd';



@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        XiaomiPageRoutingModule,
        LayoutModule,
        NzResultModule,
        NgZorroAntdModule
    ],
  declarations: [XiaomiComponent],
  exports: [

  ]

})
export class XiaomiPageModule {}
