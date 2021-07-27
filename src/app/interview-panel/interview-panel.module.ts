import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewPanelRoutingModule } from './interview-panel-routing.module';
import { InterviewPanelComponent } from './interview-panel.component';
import { SharedModule } from '../shared/shared';
import { SharedModule2 } from '../shared/shared2';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [InterviewPanelComponent],
  imports: [
    
    InterviewPanelRoutingModule,
    SharedModule,
    SharedModule2,
   // NgxExtendedPdfViewerModule,
    PdfViewerModule
  ]
})
export class InterviewPanelModule { }
