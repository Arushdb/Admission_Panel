import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitrationComponent } from './arbitration.component';

const routes: Routes = [{ path: '', component: ArbitrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArbitrationRoutingModule { }
