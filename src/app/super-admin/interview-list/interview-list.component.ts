import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from 'src/app/service/web-service.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {

  constructor(private router: Router,private myService:WebServiceService,private router1: ActivatedRoute) { }
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;
  
  ngAfterViewInit()
  {
    this.spinnerDiv.nativeElement.hidden=true;
  }

  ngOnInit() {
  }


  generateInterviewList(){
    
    this.spinnerDiv.nativeElement.hidden=false;
     this.myService.generateInterviewList().subscribe(res=>{
      this.spinnerDiv.nativeElement.hidden=true;
      debugger;
    // console.log(res[0].msg);/
    alert(res[0].msg);
    },(error=>{
      debugger;
      this.spinnerDiv.nativeElement.hidden=true;
     
    }));

}


bindApplication(){
    
  this.spinnerDiv.nativeElement.hidden=false;
   this.myService.bindApplications().subscribe(res=>{
    this.spinnerDiv.nativeElement.hidden=true;
    debugger;
  // console.log(res[0].msg);/
  alert(res[0].msg);

  },(error=>{
    debugger;
    this.spinnerDiv.nativeElement.hidden=true;
   
  }));

}

populateEntranceTestList(){
    
  this.spinnerDiv.nativeElement.hidden=false;
   this.myService.populateEntranceTestList().subscribe(res=>{
    this.spinnerDiv.nativeElement.hidden=true;
    debugger;
  // console.log(res[0].msg);/
  alert(res[0].msg);

  },(error=>{
    debugger;
    this.spinnerDiv.nativeElement.hidden=true;
   
  }));

}

}