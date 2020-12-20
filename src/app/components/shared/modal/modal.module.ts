import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {DescripcionComponent} from './descripcion/descripcion.component';
import { LoginComponent } from './login/login.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
  ],
  declarations: [DescripcionComponent, LoginComponent, AgregarComponent],
  exports: [DescripcionComponent],

  entryComponents: [
    DescripcionComponent,
  ],

  providers: [],

})
export class ModalModule {}
