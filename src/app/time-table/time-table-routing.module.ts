import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeTableComponent } from './time-table.component';

const routes: Routes = [{ path: '', component: TimeTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTableRoutingModule { }
