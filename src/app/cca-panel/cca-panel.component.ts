import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { studentBean } from '../bean/studentBean';
import { StudentInfoComponent } from '../student-info/student-info.component';
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
import { WebServiceService } from '../service/web-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observer, Observable } from 'rxjs';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';

@Component({
  selector: 'app-cca-panel',
  templateUrl: './cca-panel.component.html',
  styleUrls: ['./cca-panel.component.css']
})
export class CcaPanelComponent implements OnInit {

  studentInfo:studentBean[];
  marks: number | null = null;

  @ViewChild(StudentInfoComponent,{static: false}) stuComp:StudentInfoComponent;
  @ViewChild(ProgressSpinnerComponent,{static: false}) progSpin:ProgressSpinnerComponent;
  @ViewChild('marksVal', {static: false}) marksVal: ElementRef;
  @ViewChild('but1', {static: false}) but1: ElementRef;
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;
  @ViewChild('appNo', { static: false })
appNoInput!: ElementRef;
  selectedprogram: string | null="";
  myAppno: any;
  selectedProgramId: string ="";
  constructor(private myservice:WebServiceService,private dialog: MatDialog) { }
   inputValue="hello i am parent";
   Appno="";
   AppnoImage="";
    applicationNumber: string = '';    
  programList:any; 
  ComponentID:string="CA";
     //imageUrl = '/Admission_Panel/assets/img/';
    //  imageUrl = '/assets/CCA/';
    //  base64Image: any;
    //  pdfPath="";

   ngAfterViewInit()
  {
     this.marksVal.nativeElement.disabled=true;
     this.but1.nativeElement.disabled=true;
     this.spinnerDiv.nativeElement.hidden=true;
  }
  
  ngOnInit() {
   sessionStorage.setItem('flag','CA');
   this.getuserProgramList();
 
  }
onApplicationNumberChange(value: string): void {

 // this.programList = []; 
  this.myAppno = "";
 
  if (value && value.length >= 6) {
    // Clear the program list when the application number changes
     this.myAppno=value;
     this.validateInterview(this.selectedProgramId);
   // this.getApplicantPrograms(value);
  }
}

getuserProgramList() {

  this.myservice.getUserPrograms(this.ComponentID).subscribe(
    res => {  
      console.log('User Program List:', res);
      this.programList = res; // Assign the response to the programList variable
      // Handle the response as needed
    },
    err => {  
      console.error('Error fetching user program list:', err);
    }
  );
}
getApplicantPrograms(applicationNumber: string) {
 
   this.myservice.getApplicantPrograms(applicationNumber).subscribe(
    res => {
      console.log('Applicant Programs:', res);
      this.programList = res; // Assign the response to the programList variable
      // Handle the response as needed
    },
    err => {
      console.error('Error fetching applicant programs:', err);
    }
  );
}

validateInterview(programId: string): void {
  // Call your API
    this.spinnerDiv.nativeElement.hidden=false;
  console.log('Arush Validating Program:', programId);
  debugger;
this.myservice.validateInterview( programId,this.myAppno,"CA").subscribe(
  res => {
    console.log('Validation Response:', res); 
    if(!res[0].status)
    {
       this.marksVal.nativeElement.disabled=true;
     this.but1.nativeElement.disabled=true;
    this.spinnerDiv.nativeElement.hidden=true;
      alert(res[0].message);
    }else{
      this.marksVal.nativeElement.disabled=false;
     this.but1.nativeElement.disabled=false;
    this.spinnerDiv.nativeElement.hidden=true;
    this.marks=null;
    }
  },
  err => {
    console.error('Error validating program:', err);
    this.spinnerDiv.nativeElement.hidden=true;
  }
); 
  // Example
  // this.admissionService.validationProgram(programId)
  //   .subscribe(response => {
  //      console.log(response);
  //   });
}



  // getData(value)
  // {
  //    const autho = sessionStorage.getItem("Autho");
  //   if(value[0].first_name!="")
  //   {
  //     const status = value[0].marks_status;
  //   this.AppnoImage = value[0].application_number;
  //     if(value[0].marks_status=="P"  && autho !== "ADM11")
  //     {
  //       this.marksVal.nativeElement.disabled=true;
  //       this.but1.nativeElement.disabled=true;
  //       this.AppnoImage=value[0].application_number;
  //     }
  //    // else if (value[0].marks_status=="A")
  //    else
  //     {
  //       this.Appno=value[0].application_number;
  //       this.marksVal.nativeElement.disabled=false;
  //       this.AppnoImage=value[0].application_number;
  //       this.but1.nativeElement.disabled=false;
  //       this.marksVal.nativeElement.focus();
        
  //     }
     
  //   }
   
  // }

  validateIWlist(val){
    this.myservice.validatefromIWlist(this.myAppno).subscribe(
      res=>{

        console.log(res[0].count);
        if(res[0].count!==0)
        this.EnterMarks();
         else{
          alert("You are not authorized for this Application Number");
         this.Appno="";
         return;


         }
               
      },err=>{
        console.log(err);
      });
  }

  EnterMarks()
  {
    console.log("entered Marks " + this.marks);
    console.log("Selected Program ID:", this.selectedProgramId);
    if(this.selectedProgramId==null || this.selectedProgramId=="")
    {
      alert("Please select program first");
      return;
    }
    var marks = new String(this.marks); ;
    if(+marks<=12)
    {
      this.spinnerDiv.nativeElement.hidden=false;
      //console.log(val); 
    
      this.myservice.insertMarks(this.marks,this.myAppno,this.selectedProgramId

      ).subscribe
      (
        responce =>
          {
            this.studentInfo =Array.from(Object.keys(responce), k=>responce[k]);
             if(this.studentInfo[0].update_status=="OK")
             {

              this.spinnerDiv.nativeElement.hidden=true;
              // this.stuComp.focusMehtod();
               //this.stuComp.ClearData();
               this.marksVal.nativeElement.value=null;
               this.marksVal.nativeElement.disabled=true;
               this.but1.nativeElement.disabled=true;
             this.applicationNumber = '';
             this.marks = null;
              alert(" CCA marks entered successfully");


              }
             else if(this.studentInfo[0].update_status=="NORECORD")
             {
              this.spinnerDiv.nativeElement.hidden=true;
              alert("Not a valid application!");
              this.stuComp.focusMehtod();
              this.stuComp.ClearData();
              this.marksVal.nativeElement.value=null;
              this.marksVal.nativeElement.disabled=true;
              this.but1.nativeElement.disabled=true;
             }
             else 
             {
             this.spinnerDiv.nativeElement.hidden=true;
              alert("Error Occured please contact to Administrator!");
              //this.stuComp.focusMehtod();
              //this.stuComp.ClearData();
              this.marksVal.nativeElement.value=null;
              this.marksVal.nativeElement.disabled=true;
              this.but1.nativeElement.disabled=true;
             }
              setTimeout(() => {
            this.appNoInput.nativeElement.focus();
          });
            
          }
      );
    }
    else
    {
      
      alert(" CCA marks must be equal or less than 12");
    }
  }





  showImageNCC()
  {
   this.viewCertificates("NCC");
  }
  
  showImageNSS()
  {
    this.viewCertificates("NSS");
  }

  showImageCCA()
  {
    this.viewCertificates("CCA");
  }

  showImageSOCIAL()
  {
       this.viewCertificates("SOCIAL");
    // this.getBase64ImageFromURL(this.imageUrl+this.AppnoImage+"/"+this.AppnoImage+"_social"+".jpg","SOCIAL").subscribe(base64data => {
    //   console.log(base64data);
    //   this.base64Image = 'data:image/jpg;base64,' + base64data;
    // });
  }

  
viewCertificates(val)
{
  if (this.AppnoImage=="")
  {
alert("please enter application number");
  }
  else
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="90%";
    dialogConfig.height="80%";
    dialogConfig.data={message:val,
      app: this.AppnoImage
    };
  
    this.dialog.open(ViewCertificateComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        console.log("val:11"+res);
       // this.getRecordForUpdate(res);
       // this.myOutput.emit(res);
      }
    );
  }



}


}
