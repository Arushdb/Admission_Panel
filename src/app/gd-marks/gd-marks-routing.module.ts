import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GdMarksComponent } from './gd-marks.component';

const routes: Routes = [{ path: '', component: GdMarksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GdMarksRoutingModule { }
