import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineEntranceComponent } from './online-entrance.component';

const routes: Routes = [{ path: '', component: OnlineEntranceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineEntranceRoutingModule { }
