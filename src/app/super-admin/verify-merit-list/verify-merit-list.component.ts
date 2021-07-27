import { Component, OnInit } from '@angular/core';
import { CourseClass } from 'src/app/bean/CourseClass';
import { commonBean } from 'src/app/bean/commonBean';
import { WebServiceService } from 'src/app/service/web-service.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CustomGridComponent } from 'src/app/custom-grid/custom-grid.component';

@Component({
  selector: 'app-verify-merit-list',
  templateUrl: './verify-merit-list.component.html',
  styleUrls: ['./verify-merit-list.component.css']
})
export class VerifyMeritListComponent implements OnInit {

  ownerFaculty:CourseClass[] ;
  sessionArray:CourseClass[] ;
  sessionDates:string[] ;
  ownerProgram:CourseClass[] ;
  courseObject:CourseClass;
  beanArray:commonBean[];
  courseInfotoLoad:commonBean[];
  valA="";
  valB="";
  start:any="";
  end:any="";
  type="";
  entity_id="";
  constructor(private myService:WebServiceService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.courseObject=new CourseClass();
    this.loadProgramCombo();
  }

  loadProgramCombo()
  {
  
    this.myService.getOwnerProgram1().subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
     // console.log(this.ownerProgram);
    });
  }

  OwnerProgramChange(program)
  {
    sessionStorage.setItem('program_id', program);
    this.valB=program;
   // this.valA=entity;
   //console.log(program);
  }

  checkApp(appNo)
  {
    sessionStorage.setItem('application_number', appNo);
  }

  viewMeritList()
  {
    this.type="ML";
    this.generateReport();
  }

  viewMeritList2()
  {
    this.type="MLA";
    this.generateReport();
  }

  viewMeritList3()
  {
    this.type="MLA2";
    this.generateReport1();
  }

  generateReport()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="80%";
    dialogConfig.height="60%";
    dialogConfig.data={message:this.type};
    this.dialog.open(CustomGridComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        console.log("val:11"+res);
        
        
        if (res!="")
        {
          sessionStorage.setItem('application_number', res);
          this.type="MLA1";
          this.generateReport1();
        }
       
       // this.myOutput.emit(res);
      }
    );

  }


  generateReport1()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="80%";
    dialogConfig.height="60%";
    dialogConfig.data={message:this.type};
    this.dialog.open(CustomGridComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        //console.log("val:11"+res);
       // this.myOutput.emit(res);
      }
    );

  }
}
