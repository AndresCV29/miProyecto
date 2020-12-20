import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CatalogoComponent} from './catalogo.component';
import {CatalogoPageRoutingModule} from './catalogo-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule, NzResultModule} from 'ng-zorro-antd';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    CatalogoPageRoutingModule,
    LayoutModule,
    NzResultModule,
    NgZorroAntdModule
  ],
  declarations: [CatalogoComponent],
  exports: [

  ]

})
export class CatalogoPageModule {}
