import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcaPanelComponent } from './cca-panel.component';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';

const routes: Routes = [{ path: '', component: CcaPanelComponent },
{ path: 'verifyCertificate', component: ViewCertificateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CcaPanelRoutingModule { }
