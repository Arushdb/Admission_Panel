import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeAComponent } from './type-a.component';

const routes: Routes = [{ path: '', component: TypeAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeARoutingModule { }
