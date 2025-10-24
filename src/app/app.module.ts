import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';               // <-- Needed for [(ngModel)]
import { HttpClientModule } from '@angular/common/http';   // <-- Needed for HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenueComponent } from './menue/menue.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { EntityProgramSelectorComponent } from './entity-program-selector/entity-program-selector.component';
import { MarksGridComponent } from './marks-grid/marks-grid.component';
import { WebServiceService } from './service/web-service.service';
import { SharedModule } from './shared/shared';
import { ExcelReportComponent } from './excel-report/excel-report.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { ProgramSelectorComponent } from './program-selector/program-selector.component';
import { DynamicBoxComponent } from './dynamic-box/dynamic-box.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { RemarksComponent } from './remarks/remarks.component';
import { RemarkDialogComponent } from './remark-dialog/remark-dialog.component';
import { StudentViewCouncellingComponent } from './student-view-councelling/student-view-councelling.component';
import { VerifySignatureComponent } from './verify-signature/verify-signature.component';
import { QrVerifierComponent } from './qr-verifier/qr-verifier.component';

//import { AdmitCardComponent } from './admit-card/admit-card.component'; // optional, provides moment-style pipes for date formatting
//import {TableModule} from 'primeng/table';
//import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    VerifySignatureComponent,
    QrVerifierComponent,
    
    //AdmitCardComponent,
   // StudentViewCouncellingComponent,
  //  RemarkDialogComponent,
   // ConfirmDialogComponent,
   // RemarksComponent,
    //DynamicBoxComponent,
  //  ProgramSelectorComponent,
    //StudentViewComponent,
   // CustomGridComponent,
    
   //  MenueComponent,
   //  LoginPageComponent,
     ProgressSpinnerComponent,
     StudentInfoComponent,
    // EntityProgramSelectorComponent,
    // MarksGridComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,              // <-- Added
    HttpClientModule,         // <-- Added
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    ZXingScannerModule
   // NgxBarcodeScannerModule
   // CountdownModule
    //TableModule
  ],
    // entryComponents:[ConfirmDialogComponent,
    //         ,RemarksComponent],

  providers: [WebServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
