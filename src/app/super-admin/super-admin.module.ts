import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { RunComputationComponent } from './run-computation/run-computation.component';
import { VerifyComputationComponent } from './verify-computation/verify-computation.component';
import { RunMeritListComponent } from './run-merit-list/run-merit-list.component';
import { VerifyMeritListComponent } from './verify-merit-list/verify-merit-list.component';
import { SharedModule3 } from '../shared/shared3';
import { SharedModule } from '../shared/shared';
import { SharedModule2 } from '../shared/shared2';
import { MarksUploadComponent } from './marks-upload/marks-upload.component';
import { TransferAppComponent } from './transfer-app/transfer-app.component';
import { ViewMarksComponent } from './view-marks/view-marks.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ButtonModule} from 'primeng/button';
import { CounsellingComponent } from './counselling/counselling.component';


@NgModule({
  declarations: [SuperAdminComponent,
     RunComputationComponent,
      VerifyComputationComponent,
       RunMeritListComponent,
        VerifyMeritListComponent,
        MarksUploadComponent,
        TransferAppComponent,
        ViewMarksComponent,
        CounsellingComponent],

  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    SharedModule2,
    SharedModule3,
    TableModule,
    CardModule,
    AccordionModule,
    ToastModule,
    TabViewModule,
    CodeHighlighterModule,
    ButtonModule
  ]
})
export class SuperAdminModule { }
