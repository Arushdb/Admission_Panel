import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeBRoutingModule } from './type-b-routing.module';
import { TypeBComponent } from './type-b.component';


@NgModule({
  declarations: [TypeBComponent],
  imports: [
    CommonModule,
    TypeBRoutingModule
  ]
})
export class TypeBModule { }
