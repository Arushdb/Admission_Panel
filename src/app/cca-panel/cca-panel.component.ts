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

  @ViewChild(StudentInfoComponent,{static: false}) stuComp:StudentInfoComponent;
  @ViewChild(ProgressSpinnerComponent,{static: false}) progSpin:ProgressSpinnerComponent;
  @ViewChild('marksVal', {static: false}) marksVal: ElementRef;
  @ViewChild('but1', {static: false}) but1: ElementRef;
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;
  constructor(private myservice:WebServiceService,private dialog: MatDialog) { }
   inputValue="hello i am parent";
   Appno="";
   AppnoImage="";
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
 
  }



  getData(value)
  {
    if(value[0].first_name!="")
    {
      if(value[0].marks_status=="P")
      {
        this.marksVal.nativeElement.disabled=true;
        this.but1.nativeElement.disabled=true;
        this.AppnoImage=value[0].application_number;
      }
      else if (value[0].marks_status=="A")
      {
        this.Appno=value[0].application_number;
        this.marksVal.nativeElement.disabled=false;
        this.AppnoImage=value[0].application_number;
        this.but1.nativeElement.disabled=false;
        this.marksVal.nativeElement.focus();
        
      }
     
    }
   
  }

  validateIWlist(val){
    this.myservice.validatefromIWlist(this.Appno).subscribe(
      res=>{

        console.log(res[0].count);
        if(res[0].count!==0)
        this.EnterMarks(val);
         else{
          alert("Invalid Application Number");
         this.Appno="";
         return;


         }
               
      },err=>{
        console.log(err);
      });
  }

  EnterMarks(val)
  {
    var marks = new String(val) ;
    if(+marks<=12)
    {
      this.spinnerDiv.nativeElement.hidden=false;
      //console.log(val); 
    
      this.myservice.insertMarks(val,this.Appno).subscribe
      (
        responce =>
          {
            this.studentInfo =Array.from(Object.keys(responce), k=>responce[k]);
             if(this.studentInfo[0].update_status=="OK")
             {

              this.spinnerDiv.nativeElement.hidden=true;
               this.stuComp.focusMehtod();
               this.stuComp.ClearData();
               this.marksVal.nativeElement.value=null;
               this.marksVal.nativeElement.disabled=true;
               this.but1.nativeElement.disabled=true;
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
              this.stuComp.focusMehtod();
              this.stuComp.ClearData();
              this.marksVal.nativeElement.value=null;
              this.marksVal.nativeElement.disabled=true;
              this.but1.nativeElement.disabled=true;
             }
            
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
