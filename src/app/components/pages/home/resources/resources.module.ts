import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ResourcesComponent} from './resources.component';
import {ResourcesPageRoutingModule} from './resources-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ResourcesPageRoutingModule,
    LayoutModule,
  ],
  declarations: [ResourcesComponent],
  exports: [

  ]

})
export class ResourcesPageModule {}
