import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactoComponent} from './contacto.component';
import {ContactoPageRoutingModule} from './contacto-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {
  NzBadgeModule,
  NzCalendarModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzInputNumberModule,
  NzRadioModule, NzSelectModule,
  NzTabsModule
} from 'ng-zorro-antd';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ContactoPageRoutingModule,
    LayoutModule,
    NzRadioModule,
    NzInputNumberModule,
    NzTabsModule,
    NzCalendarModule,
    NzBadgeModule,
    NzGridModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
  ],
  declarations: [ContactoComponent],
  exports: [

  ]

})
export class ContactoPageModule {}
