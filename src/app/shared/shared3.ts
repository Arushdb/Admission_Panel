import { NgModule } from '@angular/core';
import { MarksGridComponent } from '../marks-grid/marks-grid.component';
import {StudentInfoComponent} from '../student-info/student-info.component'
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
import {EntityProgramSelectorComponent} from '../entity-program-selector/entity-program-selector.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { materialLibraries } from '../materialLibraries';
import { CustomGridComponent } from '../custom-grid/custom-grid.component';
@NgModule
({
    declarations:[
       // ProgressSpinnerComponent,
        EntityProgramSelectorComponent,
        CustomGridComponent
    ],

    imports:[CommonModule,
        FormsModule,
        materialLibraries,],

    exports:[
       //ProgressSpinnerComponent,
        EntityProgramSelectorComponent,
        CustomGridComponent
    ],
        
        entryComponents:[//ProgressSpinnerComponent,
            CustomGridComponent]
})
export class SharedModule3{}