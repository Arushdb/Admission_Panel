import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { studentBean } from '../bean/studentBean';
import { StudentInfoComponent } from '../student-info/student-info.component';
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
import { MatDialog } from '@angular/material/dialog';
import { WebServiceService } from '../service/web-service.service';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-interview-panel',
  templateUrl: './interview-panel.component.html',
  styleUrls: ['./interview-panel.component.css']
})
export class InterviewPanelComponent implements OnInit {

  studentInfo:studentBean[];
  fileData: File = null;
  previewUrl:any = null;
  imageToShow:any;
  myURL:any;
   imageUrl = '/Admission_Panel/assets/img/';
  // imageUrl = '/assets/img/';
   base64Image: any;
   hell="";
  @ViewChild(StudentInfoComponent,{static: false}) stuComp:StudentInfoComponent;
  @ViewChild(ProgressSpinnerComponent,{static: false}) progSpin:ProgressSpinnerComponent;
  @ViewChild('marksVal', {static: false}) marksVal: ElementRef;
  @ViewChild('but1', {static: false}) but1: ElementRef;
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;
  constructor(private myservice:WebServiceService,private dialog: MatDialog) { }
   inputValue="hello i am parent";
   Appno="";
   AppnoImage="";
  

   ngAfterViewInit()
  {
     this.marksVal.nativeElement.disabled=true;
     this.but1.nativeElement.disabled=true;
    this.spinnerDiv.nativeElement.hidden=true;
  }
  
  ngOnInit() {
   sessionStorage.setItem('flag','PW');
 
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
        this.AppnoImage=value[0].application_number;
        this.marksVal.nativeElement.disabled=false;
        this.but1.nativeElement.disabled=false;
        this.marksVal.nativeElement.focus();
        
      }
     
    }
   
  }

  EnterMarks(val)
  {

    this.myservice.validatefromIWlist(this.Appno).subscribe(
      res=>{

        console.log(res[0].count);
        if(res[0].count!==0)
        this.enterIWmarks(val);
         else
         alert("Invalid Application Number");
       
      
      },err=>{
        console.log(err);
      });

    


  }


  showDummyImage()
{
  this.getBase64ImageFromURL(this.imageUrl+"BLANK"+".jpg").subscribe(base64data => {
    console.log(base64data);
    this.base64Image = 'data:image/jpg;base64,' + base64data;
  });
}

  showImage()
{
  this.getBase64ImageFromURL(this.imageUrl+this.AppnoImage+".jpeg").subscribe(base64data => {
    console.log(base64data);
    this.base64Image = 'data:image/jpg;base64,' + base64data;
  });
}


getBase64ImageFromURL(url: string) {
  return Observable.create((observer: Observer<string>) => {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;  img.src = url;
    if (!img.complete) {
      img.onload = () => {
        observer.next(this.getBase64Image(img));
        observer.complete();
      };
      img.onerror = (err) => {
        observer.error(err);
        alert("Image Not found");
       // img.remove();
       this.showDummyImage();
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



enterIWmarks(val){

  var marks = new String(val) ;
  if(+marks<=8)
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
    
    alert(" Interview marks must be equal or less than 8");
  }

}


// showPDF()
// {
//   this.hell="assets/100033.pdf";
// }

}
