import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRoutingModule } from './tabla-routing.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule
  ]
})
export class TablaModule { }
