import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {DescripcionComponent} from './descripcion/descripcion.component';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
  ],
  declarations: [DescripcionComponent],
  exports: [DescripcionComponent],

  entryComponents: [
    DescripcionComponent
  ],

})
export class ModalModule {}
