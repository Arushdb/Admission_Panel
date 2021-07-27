import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArbitrationRoutingModule } from './arbitration-routing.module';
import { ArbitrationComponent } from './arbitration.component';
import { SharedModule2 } from '../shared/shared2';
import { SharedModule } from '../shared/shared';


@NgModule({
  declarations: [ArbitrationComponent],
  imports: [
    CommonModule,
    ArbitrationRoutingModule,
    SharedModule,
    SharedModule2
  ]
})
export class ArbitrationModule { }
