import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from 'src/app/service/web-service.service';
import { studentBean } from 'src/app/bean/studentBean';
import { commonBean } from 'src/app/bean/commonBean';
import { CourseClass } from 'src/app/bean/CourseClass';

@Component({
  selector: 'app-run-computation',
  templateUrl: './run-computation.component.html',
  styleUrls: ['./run-computation.component.css']
})
export class RunComputationComponent implements OnInit {

  constructor(private router: Router,private myService:WebServiceService,private router1: ActivatedRoute) { }
  genrateStatus:CourseClass[];
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;

  ngAfterViewInit()
  {
    this.spinnerDiv.nativeElement.hidden=true;
  }
  
  ngOnInit() 
  {
   
  }

  genAdmitCard()
  {
    this.spinnerDiv.nativeElement.hidden=false;
    this.myService.genAdmitCard()
    .subscribe
    (
      (data) => 
    {
       this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
       this.spinnerDiv.nativeElement.hidden=true;
       alert("Total record processed="+this.genrateStatus[0].flag);
    });
  }

  runComputation()
  {
    this.spinnerDiv.nativeElement.hidden=false;

    this.myService.runComputationProcess()
    .subscribe
    (
      (data) => 
    {
       this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
       this.spinnerDiv.nativeElement.hidden=true;
       alert("Total record processed="+this.genrateStatus[0].flag);
    });
  }

  runComputation01()
  {
    this.spinnerDiv.nativeElement.hidden=false;

    this.myService.runComputationProcess01()
    .subscribe
    (
      (data) => 
    {
       this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
       this.spinnerDiv.nativeElement.hidden=true;
       alert("Total record processed="+this.genrateStatus[0].flag);
    });
  }


  interviewAll()
  {
    this.spinnerDiv.nativeElement.hidden=false;

    this.myService.BulkMarksProcess("PW")
    .subscribe
    (
      (data) => 
    {
       this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
       this.spinnerDiv.nativeElement.hidden=true;
       alert("processed status ="+this.genrateStatus[0].status);
    });
  }

  CCA_All()
  {
    this.spinnerDiv.nativeElement.hidden=false;

    this.myService.BulkMarksProcess("CA")
    .subscribe
    (
      (data) => 
    {
       this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
       this.spinnerDiv.nativeElement.hidden=true;
       alert("processed status ="+this.genrateStatus[0].status);
    });
  }

  GD_All()
  {
    this.spinnerDiv.nativeElement.hidden=false;

    this.myService.BulkMarksProcess_GD("GD")
    .subscribe
    (
      (data) => 
    {
       this.genrateStatus = Array.from(Object.keys(data), k=>data[k]);
       this.spinnerDiv.nativeElement.hidden=true;
       alert("processed status ="+this.genrateStatus[0].status);
    });
  }

  distmarks(){
    this.myService.distETmarks().subscribe(res=>{
      debugger;
    console.log(res[0].msg);
    alert(res[0].msg);

    },(error=>{
      debugger;
      alert("Error in marks distribution");
    }));
  }

}
