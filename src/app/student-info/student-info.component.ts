import { Component, OnInit, Input, Output, ViewChild, ElementRef,EventEmitter } from '@angular/core';
import { studentBean } from '../bean/studentBean';
import { WebServiceService } from '../service/web-service.service';

@Component({
  selector: 'student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

@Input() myvariable:string;
inputValue="hello i am parent";
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
  applNo="";
  name="";
  cat="";
  constructor(private myservice:WebServiceService) { }

  ngOnInit() {
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
  }

  checkApp(val)
  {
  var appNumber = new String(val) ;
  if (appNumber.length==6)
  {
    this.myservice.getStdentInfo(val).subscribe
    (
      responce =>
        {
          this.studentInfo =Array.from(Object.keys(responce), k=>responce[k]);
         if (this.studentInfo.length>0)
         {
          this.applNo=this.studentInfo[0].application_number;
          this.name=this.studentInfo[0].first_name;
          this.cat=this.studentInfo[0].category;
          this.myOutput.emit(this.studentInfo);
      
          if(this.studentInfo[0].marks_status=="P")
          {
            alert("Marks are already submitted");
          }
         }
         else
         {
           alert("wrong Application Number");
           this.ClearData();
           this. focusMehtod();
         }
        
        }
        
    );
    //console.log(appNumber);
    
  }

  }

  getData1(value)
  {
    if(value !=false)
    {
      this.spinnerDiv.nativeElement.hidden=false;
      this.myservice.EditMarks("EDIT",value).subscribe
      (
        res=>
        {
          this.spinnerDiv.nativeElement.hidden=true;
         //console.log(res);
        }
      );
    }
   
  }


}
