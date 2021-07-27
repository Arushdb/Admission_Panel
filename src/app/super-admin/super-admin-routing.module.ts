import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperAdminComponent } from './super-admin.component';
import { RunComputationComponent } from './run-computation/run-computation.component';
import { RunMeritListComponent } from './run-merit-list/run-merit-list.component';
import { VerifyMeritListComponent } from './verify-merit-list/verify-merit-list.component';
import { MarksUploadComponent } from './marks-upload/marks-upload.component';
import { VerifyComputationComponent } from './verify-computation/verify-computation.component';
import { TransferAppComponent } from './transfer-app/transfer-app.component';
import { ViewMarksComponent } from './view-marks/view-marks.component';
import { CounsellingComponent } from './counselling/counselling.component';

const routes: Routes = [{ path: '', component: SuperAdminComponent },
{ path: 'runCompute', component: RunComputationComponent },
{ path: 'runMerit', component: RunMeritListComponent },
{ path: 'verifyMerit', component: VerifyMeritListComponent },
{ path: 'marksUpload', component: MarksUploadComponent },
{ path: 'transfer', component: TransferAppComponent },
{ path: 'viewMarks', component: ViewMarksComponent },
{path: 'verifyComputation', component: VerifyComputationComponent},
{path: 'counselling', component: CounsellingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
