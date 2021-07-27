import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineEntranceRoutingModule } from './online-entrance-routing.module';
import { OnlineEntranceComponent } from './online-entrance.component';
import { SharedModule } from '../shared/shared';


@NgModule({
  declarations: [OnlineEntranceComponent],
  imports: [
    CommonModule,
    OnlineEntranceRoutingModule,
    SharedModule
  ]
})
export class OnlineEntranceModule { }
