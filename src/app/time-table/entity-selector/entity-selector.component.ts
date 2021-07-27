import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { WebServiceService } from 'src/app/service/web-service.service';
import { CourseClass } from 'src/app/bean/CourseClass';
import { commonBean } from 'src/app/bean/commonBean';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { CustomGridComponent } from 'src/app/custom-grid/custom-grid.component';
import { CourseGridComponent } from '../course-grid/course-grid.component';
import { AddCourseComponent } from '../add-course/add-course.component';


@Component({
  selector: 'entity-selector',
  templateUrl: './entity-selector.component.html',
  styleUrls: ['./entity-selector.component.css']
})
export class EntitySelectorComponent implements OnInit {

  @ViewChild('bran', {static: false}) bran: ElementRef;
  @ViewChild('seme', {static: false}) seme: ElementRef;

  ownerFaculty:CourseClass[] ;
  sessionArray:CourseClass[] ;
  sessionDates:string[] ;
  ownerProgram:CourseClass[] ;
  ownerSemester:CourseClass[] ;
  ownerBranch:CourseClass[] ;
  courseObject:CourseClass;
  beanArray:commonBean[];
  courseInfotoLoad:commonBean[];
  valA="";
  valB="";
  valC="";
  valD="";
  start:any="";
  end:any="";
  
  constructor(private myService:WebServiceService,
    private dialog: MatDialog) { }

  ngOnInit() {

    this.courseObject=new CourseClass();
    this.getSession();
    this.getFaculty();
  }

  getSession()
  {
    this.myService.getSession().subscribe
    (
      (data) => {
      this.sessionArray = Array.from(Object.keys(data), k=>data[k]);
     // console.log(this.sessionArray);
    });
  }

  onsessionChange(val)
  {
    console.log(val);
   this.start= this.sessionArray[this.sessionArray.findIndex(x=>x.sessionDate===val)].session_start_date;
   this.end= this.sessionArray[this.sessionArray.findIndex(x=>x.sessionDate===val)].session_end_date;
   sessionStorage.setItem('start_date', this.start);
   sessionStorage.setItem('end_date', this.end);
  }

  getFaculty()
  {
    this.myService.getOwnerFacultyCMS().subscribe
    (
      (data) => {
      this.ownerFaculty = Array.from(Object.keys(data), k=>data[k]);
      //console.log(this.ownerFaculty);
    });
  }


  loadProgramCombo(entity)
  {
    sessionStorage.setItem('entity_id', entity);
    this.valA=entity;
    this.myService.getOwnerProgramCMS(entity).subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
     // console.log(this.ownerProgram);
    });

    this.courseObject.semester_code='0';
    this.courseObject.branch_id='0';
    this.courseObject.program_id='0';

  }

  OwnerProgramChange(program)
  {
    sessionStorage.setItem('program_id', program);
    this.valB=program;
   // this.bran.nativeElement="";
   //this.seme.nativeElement.value="";
   //this.bran.nativeElement.value="";
  // this.ownerSemester=null;
   //this.ownerBranch=null;
 //sessionStorage.setItem('pck','0');
    //console.log("i"+this.bran.nativeElement.value);
    //this.seme.nativeElement.style="font-weight:bold";
    this.myService.getOwnerSemesterCMS(program).subscribe
    (
      (data) => {
      this.ownerSemester = Array.from(Object.keys(data), k=>data[k]);
      //console.log(this.ownerSemester);
    });
//this.seme.nativeElement.value=0;
    this.courseObject.semester_code='0';
    this.courseObject.branch_id='0';
 // console.log("sem-"+this.seme.nativeElement.value);
  }

  OwnerSemChange(sem)
  {
    sessionStorage.setItem('semester_code', sem);
    this.valC=sem;

    this.myService.getOwnerBranchCMS(sem).subscribe
    (
      (data) => {
      this.ownerBranch = Array.from(Object.keys(data), k=>data[k]);
      //console.log(this.ownerBranch);
    });
    this.courseObject.branch_id='0';
  }

  OwnerBranchChange(branch)
  {
    //sessionStorage.setItem('pck','0');
    //this.OwnerSemChange(sessionStorage.getItem('semester_code'));
    sessionStorage.setItem('branch_id', branch);
    sessionStorage.setItem('pck', this.ownerBranch[this.ownerBranch.findIndex(x=>x.branch_id===branch)].pck);
    this.valD=branch;
  }

  ViewCourses()
  {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="95%";
    dialogConfig.height="60%";
    dialogConfig.data={message:'TTView'};
  //this.dialog.open(CustomGridComponent,dialogConfig).afterClosed().subscribe
     this.dialog.open(CourseGridComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        //console.log(res);
        sessionStorage.setItem('course_code',res);
       // this.myOutput.emit(res);
      }
    );
//alert("view");
  }

  AddCourses()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    dialogConfig.height="95%";
    dialogConfig.data={message:'TTView'};
  //this.dialog.open(CustomGridComponent,dialogConfig).afterClosed().subscribe
     this.dialog.open(AddCourseComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        //console.log(res);
        sessionStorage.setItem('course_code',res);
       // this.myOutput.emit(res);
      }
    );
  }
}
