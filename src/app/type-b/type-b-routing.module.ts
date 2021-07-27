import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeBComponent } from './type-b.component';

const routes: Routes = [{ path: '', component: TypeBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeBRoutingModule { }
