import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableRoutingModule } from './time-table-routing.module';
import { TimeTableComponent } from './time-table.component';
import { SharedModule } from '../shared/shared';
import { SharedModule3 } from '../shared/shared3';
import { EntitySelectorComponent } from './entity-selector/entity-selector.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { CustomComboComponent } from './custom-combo/custom-combo.component';
import { TeacherSelectorComponent } from './teacher-selector/teacher-selector.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ButtonModule} from 'primeng/button';
import { SharedModule2 } from '../shared/shared2';

import { RoomSelectorComponent } from './room-selector/room-selector.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { AddCourseComponent } from './add-course/add-course.component';


@NgModule({
  declarations: [
    TimeTableComponent, 
    EntitySelectorComponent, 
    CourseGridComponent, 
    CustomComboComponent,
    TeacherSelectorComponent,
    DynamicFieldsComponent,
    RoomSelectorComponent,
    DataEntryComponent,
    AddCourseComponent],

  imports: [
    CommonModule,
    TimeTableRoutingModule,
    SharedModule,
    SharedModule2,
    TableModule,
    CardModule,
    AccordionModule,
    ToastModule,
    TabViewModule,
    CodeHighlighterModule,
    ButtonModule,
    SharedModule3,
  ],

  entryComponents:[
    DataEntryComponent,CourseGridComponent,
    CustomComboComponent,AddCourseComponent]
    
})
export class TimeTableModule { }
