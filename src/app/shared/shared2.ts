
import { NgModule } from '@angular/core';
import { MarksGridComponent } from '../marks-grid/marks-grid.component';
import {StudentInfoComponent} from '../student-info/student-info.component'
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
import {EntityProgramSelectorComponent} from '../entity-program-selector/entity-program-selector.component';
import { materialLibraries } from '../materialLibraries';
import { ExcelReportComponent } from '../excel-report/excel-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomGridComponent } from '../custom-grid/custom-grid.component';
import { StudentViewComponent } from '../student-view/student-view.component';
import { ProgramSelectorComponent } from '../program-selector/program-selector.component';
import { DynamicBoxComponent } from '../dynamic-box/dynamic-box.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { RemarksComponent } from '../remarks/remarks.component';

import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { RemarkDialogComponent } from '../remark-dialog/remark-dialog.component';
import { StudentViewCouncellingComponent } from '../student-view-councelling/student-view-councelling.component';
@NgModule
({
    declarations:[
        MarksGridComponent,
        ProgressSpinnerComponent,
        StudentInfoComponent,
        ExcelReportComponent,
        StudentViewComponent,
        StudentViewCouncellingComponent,
        ProgramSelectorComponent,
        DynamicBoxComponent,
        ConfirmDialogComponent,
        RemarksComponent,
        RemarkDialogComponent
       // CustomGridComponent
        
    ],

    imports:[
        CommonModule,
        FormsModule,
        materialLibraries,

        TableModule, //this of for remarksComponent
        CardModule,    //this of for remarksComponent
        ButtonModule //this of for remarksComponent
       // ReactiveFormsModule,
      //  HttpClientModule
    ],

    exports:[MarksGridComponent,
       ProgressSpinnerComponent,
        StudentInfoComponent,
        ExcelReportComponent,
        StudentViewComponent,
        StudentViewCouncellingComponent,
        ProgramSelectorComponent,
        DynamicBoxComponent
    ],
        
        entryComponents:[MarksGridComponent,
          ProgressSpinnerComponent,
          ConfirmDialogComponent,
          RemarksComponent,
          RemarkDialogComponent
        ]
})
export class SharedModule2{}