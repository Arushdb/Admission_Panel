import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AgGridModule} from 'ag-grid-angular';


import { CcaPanelRoutingModule } from './cca-panel-routing.module';
import { CcaPanelComponent } from './cca-panel.component';
import { SharedModule2 } from '../shared/shared2';
import { SharedModule } from '../shared/shared';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';
import { VerifymarksComponent } from './verifymarks/verifymarks.component';


@NgModule({
  declarations: [CcaPanelComponent, 
    ViewCertificateComponent, VerifymarksComponent
  ],
  imports: [
    CommonModule,
    CcaPanelRoutingModule,
    SharedModule,
    SharedModule2,
    PdfViewerModule,
    AgGridModule
    
  ],
  
 // entryComponents:[ViewCertificateComponent]
  //entryComponents:[]
})
export class CcaPanelModule { }
