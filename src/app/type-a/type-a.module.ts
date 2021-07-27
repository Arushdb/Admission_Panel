import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeARoutingModule } from './type-a-routing.module';
import { TypeAComponent } from './type-a.component';


@NgModule({
  declarations: [TypeAComponent],
  imports: [
    CommonModule,
    TypeARoutingModule
  ]
})
export class TypeAModule { }
