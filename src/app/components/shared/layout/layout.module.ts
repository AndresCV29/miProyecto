import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import en from '@angular/common/locales/en';
import {NgZorroAntdModule} from 'ng-zorro-antd';

registerLocaleData(en);

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],

  providers: [],

})
export class LayoutModule {}
