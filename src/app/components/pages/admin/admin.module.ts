import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AdminComponent} from './admin.component';
import {AdminPageRoutingModule} from './admin-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule, NzCarouselModule} from 'ng-zorro-antd';
import { NavAdminComponent } from './nav-admin/nav-admin.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,
    NzCarouselModule,
  ],
  declarations: [AdminComponent, NavAdminComponent ],
  exports: []
})
export class AdminPageModule {}
