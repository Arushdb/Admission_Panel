import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { WebServiceService } from 'src/app/service/web-service.service';
import { CourseClass } from 'src/app/bean/CourseClass';
import { commonBean } from 'src/app/bean/commonBean';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { RemarksComponent } from 'src/app/remarks/remarks.component';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.css']
})
export class CounsellingComponent implements OnInit {

  constructor(private myService:WebServiceService,private dialog: MatDialog) { }
  Appno="";
  meritTotal="--";
  butControl="";
  butControl1="";
  regNo="";
  but1="Verify";
  but2="Update";
  genrateStatus:CourseClass[];
  studentMarks:commonBean[];
  statusBean:commonBean[];
  cols: any[];

  previewUrl:any = null;
  imageToShow:any;
  myURL:any;
//imageUrl = '/Admission_Panel/assets/img/';


   imageUrl = '/assets/img/';
   base64Image: any;

 ngOnInit() {

   this.cols = [
     { field: 'val1', header: 'Called' },
     { field: 'val2', header: 'status' },
     { field: 'val3', header: 'program' },
     { field: 'val4', header: 'comp' },
     { field: 'val6', header: 'marks Obtained' },
     { field: 'val7', header: 'Total' },
     { field: 'val8', header: 'per' },
     { field: 'val9', header: 'time' },
   
 ];
 }


 getData(value)
 {
  console.log(value[0].eligibility_status);
 //  console.log(value[0].application_number);
   this.Appno=value[0].application_number;
   this.regNo=value[0].registration_number;
  // console.log(this.regNo);
// ARush on 04-07 for changes in marks for Edrp Team
  // if (value[0].eligibility_status=="INS")
   if (value[0].eligibility_status=="JOT")
   {

      //open verify and update
      this.butControl="OK";
      this.butControl1="OK";
      this.meritTotal=value[0].meritTotal;
      this.but1="Verify";
      this.but2="Update";
   }
   if (value[0].eligibility_status=="INC")
   {

      //open verify and update
      this.butControl="";
      this.butControl1="";
      this.meritTotal=value[0].meritTotal;

      this.but1="Verify(closed)";
      this.but2="Update(closed)";
   }

   if (value[0].eligibility_status=="VQE")
   {
      //open  update
      this.butControl="OK";
      this.butControl1="OK";
      this.meritTotal="--";
      this.but1="Verify";
      this.but2="Update";
   }
   if (value[0].eligibility_status=="VER")
   {
     //close all
     this.butControl="";
     this.butControl1="";
     this.meritTotal=value[0].meritTotal;
     this.but1="Verify";
     this.but2="Update";
   }

   if (value[0].eligibility_status=="REJ")
   {
     //close all
     this.butControl="";
     this.butControl1="";
     this.meritTotal="--";
     this.but1="Verify";
     this.but2="Update";
   }

   if (value[0].eligibility_status=="NON")
   {
     //close all
     this.butControl="";
     this.butControl1="";
     this.meritTotal="--";
     this.but1="Verify";
     this.but2="Update";
     alert("Not eligible for the selected program")
   }

   this.getCourseDetail(this.Appno);
   
 }


 getCourseDetail(val)
 {
   this.myService.getStudentMarksforCounselling(val).subscribe
   (
     (data) => {
     this.studentMarks = Array.from(Object.keys(data), k=>data[k]);
  // console.log(this.a1);
   });
 }

 verify()
 {
 debugger;
   this.openConfirmDiaog("I checked all component marks, all entered marks are correct , record is verified.")
   .afterClosed()
   .subscribe(
     res=>
     {
      if (res==true)
      {

        this.myService.updateFinalCandidate(this.regNo,"Record VERIFIED","VERIFIED").subscribe
        (
          (data) => {
           // this. getCourseDetail(this.Appno);
           this.statusBean = Array.from(Object.keys(data), k=>data[k]);
            if( this.statusBean[0].val1=="OK")
            {
              alert("record saved");
              this.butControl="";
              this.butControl1="";
            }

            if( this.statusBean[0].val1=="NOTOK")
            {
              alert("record not saved");
            }
           
     
        }
        )
        
      }
      else
      {
       
      }
     }
   
   );

 }

 openConfirmDiaog(msg)
  {
    return this.dialog.open(ConfirmDialogComponent,{
      width:"360px",
      disableClose:true,
      panelClass:'confirm-dialog-container',
      data:
      {
        message:msg
      }
    });
  
  }


  UPDATE()
  {
this.EnterRemarks();
  }

  EnterRemarks()
{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="100%";
  dialogConfig.height="80%";
  dialogConfig.data=
  {
application_number:this.Appno,
program_id:sessionStorage.getItem('program_id'),
registration_number:this.regNo
  }
  return this.dialog.open(RemarksComponent,dialogConfig);
}



//////////////////image code///////////////////////

showDummyImage()
{
  this.getBase64ImageFromURL(this.imageUrl+"BLANK"+".jpg").subscribe(base64data => {
    console.log(base64data);
    
    this.base64Image = 'data:image/jpg;base64,' + base64data;
  });
}
showImage1(){
  this.base64Image=this.imageUrl+this.Appno+".jpeg";
}

  showImage()
{
  debugger;
  this.getBase64ImageFromURL(this.imageUrl+this.Appno+".jpeg").subscribe(base64data => {
    console.log(base64data);
    debugger;
    this.base64Image = 'data:image/jpg;base64,' + base64data;
  });
}


getBase64ImageFromURL(url: string) {
  debugger;
  return Observable.create((observer: Observer<string>) => {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;  //img.src = url;
    if (!img.complete) {
      img.onload = () => {
        observer.next(this.getBase64Image(img));
        observer.complete();
      };
      img.onerror = (err) => {
        observer.error(err);
        alert("Image Not found");
       // img.remove();
       //this.showDummyImage();
      
      };
    } else {
      observer.next(this.getBase64Image(img));
      observer.complete();
    }
  });
}

getBase64Image(img: HTMLImageElement) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
 // console.log(dataURL);
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
}
