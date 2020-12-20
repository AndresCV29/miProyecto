import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {LayoutModule} from '../../shared/layout/layout.module';
import {HomePageRoutingModule} from './home-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ModalModule} from '../../shared/modal/modal.module';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    HomePageRoutingModule,
    NgZorroAntdModule,
    ModalModule
  ],
  declarations: [HomeComponent],
  exports: []

})
export class HomePageModule {}
