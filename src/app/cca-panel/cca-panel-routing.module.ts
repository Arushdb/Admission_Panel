import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcaPanelComponent } from './cca-panel.component';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';
import { VerifymarksComponent } from './verifymarks/verifymarks.component';

const routes: Routes = [{ path: '', component: CcaPanelComponent },
{ path: 'verifyCertificate', component: ViewCertificateComponent },
{ path: 'verifyMarks', component: VerifymarksComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CcaPanelRoutingModule { }
