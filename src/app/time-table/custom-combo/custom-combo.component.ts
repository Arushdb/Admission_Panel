import { Component, OnInit, Inject } from '@angular/core';
import { commonBean } from 'src/app/bean/commonBean';
import { WebServiceService } from 'src/app/service/web-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-combo',
  templateUrl: './custom-combo.component.html',
  styleUrls: ['./custom-combo.component.css']
})
export class CustomComboComponent implements OnInit {

  ValA:any;
  value:any;
  courseObject:commonBean;
  courseInfo:commonBean[];
  dataarray=[];
  constructor(
    private myService:WebServiceService,
    @Inject(MAT_DIALOG_DATA) public data,
    public DialogRef:MatDialogRef<CustomComboComponent>) {

      this.ValA=data.message;
      sessionStorage.setItem("sectionType",this.ValA);
      if (data.message=="GS")
      {
      this.value="GENDER";
      }
      else if (data.message=="BS")
      {
        this.value="BRANCH";
      }
      else if (data.message=="GB")
      {
        this.value="GEN/BRAN.";
      }
      

     }

  ngOnInit() {
    this.courseObject=new commonBean();
  //  this.dataarray.push(this.courseObject);
    this.getTimeTableCourse();
  
  }


  add(val)
  {
    console.log(val);
    for (let i = 0; i <  val.length; i++) {
      this.courseObject=new commonBean();
      this.courseObject.val1=val[i].val1;
      this.courseObject.val4=val[i].val4;
      this.courseObject.val5=val[i].val5;
      if (this.ValA=="DS")
      {
        this.courseObject.val3=sessionStorage.getItem("pck");
      }
      else
      {
        this.courseObject.val3=val[i].val3;
      }
      
      this.courseObject.val7=val[i].val7;
      this.dataarray.push(this.courseObject);
   } 
  }


  getTimeTableCourse()
  {
    this.myService.getCustomData('TT-Course'+this.ValA).subscribe
    (
      (data) => 
      {
      this.courseInfo = Array.from(Object.keys(data), k=>data[k]);
      //console.log(this.courseInfo.length);
      this.add( this.courseInfo);
      });
  
  }

  addOne()
  {
   this.courseObject=new commonBean();
  
   this.dataarray.push(this.courseObject);
  }

  submitform()
  {
      console.log(this.dataarray);
    for(let i=0; i<this.dataarray.length;i++)
    {
      this.myService.InsertSectionDataTimeTable(this.dataarray[i].val5,this.dataarray[i].val3,this.dataarray[i].val7,"SEC-"+(i+1)).subscribe
      (
        (data) => {

      },
      
      (error:Response) =>   
                       {
                             if(error.status===404)
                             {
                                  alert ('This post has already been deleted.');
                             }
                             else
                             {
                                 alert ('An unexpected error occured.');
                           
                             }
                        }
      );
    }
    alert("Section Alloted");
    this.DialogRef.close(false);
   
  }

  closeform()
  {
    this.DialogRef.close(false);
  }

}
