import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterviewPanelComponent } from './interview-panel.component';

const routes: Routes = [{ path: '', component: InterviewPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewPanelRoutingModule { }
