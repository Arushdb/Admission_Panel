import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdMarksRoutingModule } from './gd-marks-routing.module';
import { GdMarksComponent } from './gd-marks.component';
import { SharedModule } from '../shared/shared';
import { SharedModule2 } from '../shared/shared2';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [GdMarksComponent],
  imports: [
    CommonModule,
    GdMarksRoutingModule,
    SharedModule,
    SharedModule2,
   // NgxExtendedPdfViewerModule,
    PdfViewerModule
  ]
})
export class GdMarksModule { }
