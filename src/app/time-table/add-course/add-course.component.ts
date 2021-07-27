import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { CustomComboComponent } from '../custom-combo/custom-combo.component';
import { WebServiceService } from 'src/app/service/web-service.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DataEntryComponent } from '../data-entry/data-entry.component';
import { commonBean } from 'src/app/bean/commonBean';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseObject:commonBean;
  constructor(private myservice: WebServiceService, private dialog: MatDialog,
    public DialogRef:MatDialogRef<AddCourseComponent>) { }


  ngOnInit() {
    this.courseObject=new commonBean();
  }


  sectionCahnge(val,VV)
{
sessionStorage.setItem("course_code", VV)
  const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.height="70%";
    dialogConfig.data={message:val};
    this.dialog.open(CustomComboComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        console.log("val:11"+res);
        if (res!="")
        {
      
        }
      }
    );

}


openGridforDataEntry(val)
{
 //console.log(val);

 const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose=true;
dialogConfig.autoFocus=true;
dialogConfig.width="90%";
dialogConfig.height="70%";
dialogConfig.data={message:val};
this.dialog.open(DataEntryComponent,dialogConfig).afterClosed().subscribe
(
  res=>
  {
    console.log("val:11"+res);
    if (res!="")
    {
  
    }
  }
);
}

closeform()
{
  this.DialogRef.close(false);
}

  submitform(val1,val2,val3,val4,val5,val6)
  {
    console.log(val1+val2+val3+val4+val5+val6);

    this.myservice.InsertNewCourse(val1,val2,val3,val4,val5,val6).subscribe
    (
      (data) => 
      {
        alert ('Record Submitted');
        this.DialogRef.close(false);
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
               // console.log(error);
            }
       }
      
      );
    
  }
}
