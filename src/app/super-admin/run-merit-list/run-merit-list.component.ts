import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from 'src/app/service/web-service.service';
import { CourseClass } from 'src/app/bean/CourseClass';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CustomGridComponent } from 'src/app/custom-grid/custom-grid.component';

@Component({
  selector: 'app-run-merit-list',
  templateUrl: './run-merit-list.component.html',
  styleUrls: ['./run-merit-list.component.css']
})
export class RunMeritListComponent implements OnInit {
  genrateStatus:CourseClass[];
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;
  courseObject:CourseClass;
  constructor(private router: Router,
    private myService:WebServiceService,
    private router1: ActivatedRoute,
    private dialog: MatDialog) { }

    type="A";
  ngAfterViewInit()
  {
    this.spinnerDiv.nativeElement.hidden=true;
  }

  ngOnInit() {
    this.courseObject=new CourseClass();
  }


  runMeritListforAll()
  {
    sessionStorage.setItem('flag','ALL');
    this.spinnerDiv.nativeElement.hidden=false;
    this.myService.runMeritListProcess()
    .subscribe
    (
      (data) => {
      this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
      // console.log(this.genrateStatus[0].flag);
      this.spinnerDiv.nativeElement.hidden=true;
       alert(this.genrateStatus[0].flag);
    });
  }

  runMeritList()
  {
    sessionStorage.setItem('flag','SINGLE');
    this.spinnerDiv.nativeElement.hidden=false;
    this.myService.runMeritListProcess()
    .subscribe
    (
      (data) => {
      this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
      // console.log(this.genrateStatus[0].flag);
      this.spinnerDiv.nativeElement.hidden=true;
       alert(this.genrateStatus[0].flag);
    });
  }

  ReportClassification(val)
  {
    
    this.type=val;
  }


  generateReport()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.height="60%";
    dialogConfig.data={message:this.type};
    this.dialog.open(CustomGridComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
       // this.myOutput.emit(res);
      }
    );

  }
}
