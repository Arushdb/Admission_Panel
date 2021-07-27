import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-view-certificate',
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.css']
})
export class ViewCertificateComponent implements OnInit {
  certificateType:String;
  imageUrl = '/Admission_Panel/assets/CCA/';
  //imageUrl = '/assets/CCA/';
  base64Image: any;
  pdfPath="";
  AppnoImage="";
  constructor(public DialogRef:MatDialogRef<ViewCertificateComponent>,
    @Inject(MAT_DIALOG_DATA) public data)
     {
      this.certificateType=data.message;
      this.AppnoImage=data.app;
      console.log(data.message);
      console.log(data.app);
     }

  ngOnInit() {
    this.LoadCertificate(this.certificateType,this.AppnoImage);
  }

  LoadCertificate(type,app)
  {
    if (type=="NCC")
    {
      console.log(type);
      console.log(app);

      this.getBase64ImageFromURL(this.imageUrl+app+"/"+app+"_ncc"+".jpg",type).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
    });
    }
    else if (type=="NSS")
    {
      this.getBase64ImageFromURL(this.imageUrl+app+"/"+app+"_nss"+".jpg",type).subscribe(base64data => {
        console.log(base64data);
        this.base64Image = 'data:image/jpg;base64,' + base64data;
      });
      console.log(type);
      console.log(app);
    }
    else if (type=="CCA")
    {
      this.getBase64ImageFromURL(this.imageUrl+app+"/"+app+"_cca"+".jpg",type).subscribe(base64data => {
        console.log(base64data);
        this.base64Image = 'data:image/jpg;base64,' + base64data;
      });
      console.log(type);
    }
    else if (type=="SOCIAL")
    {
      this.getBase64ImageFromURL(this.imageUrl+app+"/"+app+"_social"+".jpg",type).subscribe(base64data => {
        console.log(base64data);
        this.base64Image = 'data:image/jpg;base64,' + base64data;
      });
      console.log(type);
    }

  
  }

  getBase64ImageFromURL(url: string,f1:string) {
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
         // alert("Image Not found");
         // img.remove();
         this.pdfPath=this.imageUrl;
         this.dummyImage();
         this.showPDFImage(f1);
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

  dummyImage()
{
    this.getBase64ImageFromURL(this.imageUrl+"BLANK"+".jpg","").subscribe(base64data => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
    });
}

Dummypdf()
{
  this.pdfPath= "/Admission_Panel/assets/CCA/BLANK.pdf"
 // this.pdfPath=this.imageUrl+this.AppnoImage+"/"+this.AppnoImage+"_NSS"+".pdf";
  
}

showPDFImage(f1:string)
{
  //console.log(f1);
  if (f1=="NCC")
  {
    this.pdfPath=this.imageUrl+this.AppnoImage+"/"+this.AppnoImage+"_ncc"+".pdf";
   // console.log(this.pdfPath);
  }
  else if (f1=="NSS")
  {
    this.pdfPath=this.imageUrl+this.AppnoImage+"/"+this.AppnoImage+"_nss"+".pdf";
    //console.log(this.pdfPath);
  }
  else if (f1=="CCA")
  {
    this.pdfPath=this.imageUrl+this.AppnoImage+"/"+this.AppnoImage+"_cca"+".pdf";
    //console.log(this.pdfPath);
  }
  else if (f1=="SOCIAL")
  {
    this.pdfPath=this.imageUrl+this.AppnoImage+"/"+this.AppnoImage+"_social"+".pdf";
 //   console.log(this.pdfPath);
  }
  
}

  close()
  {
    this.DialogRef.close(false);
  }
}
