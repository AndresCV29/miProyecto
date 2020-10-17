import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DocsComponent} from './docs.component';
import {DocsPageRoutingModule} from './docs-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule, NzResultModule} from 'ng-zorro-antd';



@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        DocsPageRoutingModule,
        LayoutModule,
        NzResultModule,
        NgZorroAntdModule
    ],
  declarations: [DocsComponent],
  exports: [

  ]

})
export class DocsPageModule {}
