import { Component, OnInit, Input, Output, ViewChild, ElementRef,EventEmitter } from '@angular/core';
import { studentBean } from '../bean/studentBean';
import { WebServiceService } from '../service/web-service.service';
import { CourseClass } from '../bean/CourseClass';

@Component({
  selector: 'student-view-councelling',
  templateUrl: './student-view-councelling.component.html',
  styleUrls: ['./student-view-councelling.component.css']
})
export class StudentViewCouncellingComponent implements OnInit {

  @Input() myvariable:string;
  @Output() myOutput:EventEmitter<studentBean[]>=new EventEmitter();
  
  //@ViewChild(StudentInfoComponent,{static: false}) stuComp:StudentInfoComponent;
  @ViewChild('appNumber', {static: false}) appNumber: ElementRef;
  @ViewChild('appNum', {static: false}) appNum: ElementRef;
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;

  ngAfterViewInit(){
    this.appNumber.nativeElement.style="font-weight:bold";
    this.spinnerDiv.nativeElement.hidden=true;
    this.appNum.nativeElement.maxLength=6;
    //console.log(this.appNum);
  }

  studentInfo:studentBean[];
  ownerProgram:CourseClass[] ;
  courseObject:CourseClass;
  applNo="";
  name="";
  cat="";
  meritTotal="--";
  reasonCode="";
  eligibility="";
  Application="";
  prog="";
  constructor(private myservice:WebServiceService) { }

  ngOnInit() {
    sessionStorage.setItem("flag","viewCouncelling");
    this.courseObject=new CourseClass();
  }

  focusMehtod()
  {
    this.appNum.nativeElement.value=null;
    this.appNum.nativeElement.focus(); 
    //this.appNum.nativeElement.;
  }

  ClearData()
  {
    this.applNo="";
    this.name="";
    this.cat="";   
    this.meritTotal="--";
  }

  checkApp(val)
  {
    this.ClearData();
   // this.loadProgramCombo(val);
    
  var appNumber = new String(val) ;
  if (appNumber.length==6)
  {
    this.Application=val;
    this.loadProgramCombo(appNumber);
   
  }

  }

  loadProgramCombo(appNo)
  {
    
    this.myservice.getOwnerProgram2(appNo).subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.ownerProgram);
    });
  }
  

  OwnerProgramChange(val)
  {
    this.prog=val;
    console.log(this.prog);
    if(this.prog!=undefined)
    {

    sessionStorage.setItem("program_id",val);
    this.spinnerDiv.nativeElement.hidden=false;
    this.myservice.getStdentInfoforViewCouncelling(this.Application).subscribe
    (
      responce =>
        {
          this.studentInfo =Array.from(Object.keys(responce), k=>responce[k]);
        console.log(this.studentInfo);
          if (this.studentInfo.length>0)
         {
          this.applNo=this.studentInfo[0].application_number;
          this.name=this.studentInfo[0].first_name;
          this.cat=this.studentInfo[0].category;
          
          /////////////////

          if (this.studentInfo[0].eligibility_status=="INS")
          {

             this.meritTotal=this.studentInfo[0].meritTotal;
          }
          if (this.studentInfo[0].eligibility_status=="INC")
          {

             this.meritTotal=this.studentInfo[0].meritTotal;
          }
          if (this.studentInfo[0].eligibility_status=="UPD")
          {
  
             this.meritTotal="--";
          }
          if (this.studentInfo[0].eligibility_status=="VER")
          {
            //close all
            this.meritTotal=this.studentInfo[0].meritTotal;
          }
       
          if (this.studentInfo[0].eligibility_status=="REJ")
          {

            this.meritTotal="--";
          }
       
          if (this.studentInfo[0].eligibility_status=="NON")
          {
            //close all
            this.meritTotal="--";
            //alert("Not eligible for the selected program")
          }

          ///////////////////


          this.myOutput.emit(this.studentInfo);
          this.spinnerDiv.nativeElement.hidden=true;
        }
      }
        
    );
  }
  else
  {
    alert("Please select program!")
  }
  }
     

}
