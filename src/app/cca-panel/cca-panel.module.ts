import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CcaPanelRoutingModule } from './cca-panel-routing.module';
import { CcaPanelComponent } from './cca-panel.component';
import { SharedModule2 } from '../shared/shared2';
import { SharedModule } from '../shared/shared';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';


@NgModule({
  declarations: [CcaPanelComponent, 
    ViewCertificateComponent
  ],
  imports: [
    CommonModule,
    CcaPanelRoutingModule,
    SharedModule,
    SharedModule2,
    PdfViewerModule
  ],
  
  entryComponents:[ViewCertificateComponent]
})
export class CcaPanelModule { }
