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
import { VerifyProgramListComponent } from './verify-program-list/verify-program-list.component';
import { GenerateAdmitCardComponent } from './generate-admit-card/generate-admit-card.component';

const routes: Routes = [{ path: '', component: SuperAdminComponent },
{ path: 'runCompute', component: RunComputationComponent },
{ path: 'runMerit', component: RunMeritListComponent },
{ path: 'verifyMerit', component: VerifyMeritListComponent },
{ path: 'marksUpload', component: MarksUploadComponent },
{ path: 'transfer', component: TransferAppComponent },
{ path: 'viewMarks', component: ViewMarksComponent },
{path: 'verifyComputation', component: VerifyComputationComponent},
{path: 'counselling', component: CounsellingComponent, runGuardsAndResolvers: 'always'},
{path: 'verifyProgramList', component:VerifyProgramListComponent}, //added by Jyoti on 18 Jun 2025
{path: 'generateAdmitCard', component:GenerateAdmitCardComponent}, //added by Pragya on 03 Sep 2025
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
