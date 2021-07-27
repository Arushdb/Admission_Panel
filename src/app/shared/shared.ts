import { HttpClientModule } from '@angular/common/http';
import { MenueComponent } from './../menue/menue.component';

import { materialLibraries } from './../materialLibraries';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
import { StudentInfoComponent } from '../student-info/student-info.component';
import { ExcelReportComponent } from '../excel-report/excel-report.component';
import { MarksGridComponent } from '../marks-grid/marks-grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CountdownModule } from 'ngx-countdown';
@NgModule
({
    declarations:[MenueComponent,
      // ProgressSpinnerComponent
    //  MarksGridComponent,
    // ProgressSpinnerComponent,
    // StudentInfoComponent,
    // ExcelReportComponent
],

    imports:[
        CommonModule,
       // BrowserModule,
        materialLibraries,
        FormsModule,
        HttpClientModule,
      //  BrowserAnimationsModule,
        ReactiveFormsModule,
    ],

    exports:[
        CommonModule,
        FormsModule,
        materialLibraries,
        MenueComponent,
        CountdownModule,
    //     MarksGridComponent,
    //ProgressSpinnerComponent,
    // StudentInfoComponent,
    // ExcelReportComponent,
        //HttpClientModule,
       ReactiveFormsModule
    ],

        //  entryComponents:[//MarksGridComponent,
        //     ProgressSpinnerComponent]
})
export class SharedModule{}