import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DocsComponent} from './docs.component';
import {DocsPageRoutingModule} from './docs-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    DocsPageRoutingModule,
    LayoutModule,
  ],
  declarations: [DocsComponent],
  exports: [

  ]

})
export class DocsPageModule {}
