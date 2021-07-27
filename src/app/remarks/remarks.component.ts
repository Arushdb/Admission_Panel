import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { WebServiceService } from '../service/web-service.service';
import { CourseClass } from '../bean/CourseClass';
import { commonBean } from '../bean/commonBean';
import { CounsellingComponent } from '../super-admin/counselling/counselling.component';
import { RemarkDialogComponent } from '../remark-dialog/remark-dialog.component';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent implements OnInit {

  Appno="";
  registration_number="";
  program_id="";
  btech: boolean = false;
  remarks="";
  cols: any[];
  genrateStatus:CourseClass[];
  studentMarks:commonBean[];
  statusBean:commonBean[];

  constructor(public DialogRef:MatDialogRef<RemarksComponent>,
    private myService:WebServiceService, @Inject(MAT_DIALOG_DATA) public data,private dialog: MatDialog) {

     // console.log(data.application_number);
     // console.log(data.program_id);
      this.Appno=data.application_number;
      this.program_id=data.program_id;
      this.registration_number=data.registration_number;
      if( this.program_id=="0001067")
      {
        this.btech=true;
      }
      else
      {
        this.btech=false;
      }

     }


  ngOnInit() {
    this. getCourseDetail(this.Appno);
  }


  getCourseDetail(val)
 {
   this.myService.getStudentMarksforCounselling(val).subscribe
   (
     (data) => {
     this.studentMarks = Array.from(Object.keys(data), k=>data[k]);
   console.log(this.studentMarks);
   });
 }

 onRowEditInit(rowData: commonBean)
 {
console.log(rowData);
 }

 onRowEditSave(rowData: commonBean) {
  if (rowData.val5 != "") {
    // console.log(rowData.val1);
    // console.log(rowData.val2);
    // console.log(rowData.val3);
    // console.log(rowData.val4);
    // console.log(rowData.val5);
    // console.log(rowData.val7);
    //this.myService.updateStudentMarksinSCL(rowData)
    this.myService.updateStudentMarksinSCL(rowData).subscribe
    (
      (data) => {
        this. getCourseDetail(this.Appno);
        alert("record saved");
 
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
  else {
     // this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
  }
}

onRowEditCancel(car: commonBean, index: number) {

  this.studentMarks[index];
  console.log(this.studentMarks[index]);
  // this.cars2[index] = this.clonedCars[car.vin];
  // delete this.clonedCars[car.vin];
}


closeDialog()
{
this.DialogRef.close(false);
}

Edit()
{
  this.DialogRef.close(false);
}

reject()
{
  //RemarkDialogComponent

this.openReamrksDialog().afterClosed().subscribe
 (
  res=> 
  {
    console.log(res);
    if(res!=undefined && res!=false)
       {
         // alert(res);
      this.remarks=res;
      this.myService.updateFinalCandidate(this.registration_number,this.remarks,"REJECT").subscribe
    (
      (data) => {

        this.statusBean = Array.from(Object.keys(data), k=>data[k]);
     
        if( this.statusBean[0].val1=="OK")
        {
          alert("record saved");
        }

       if( this.statusBean[0].val1=="NOTOK")
        {
          alert("record not saved");
        }
 
    }
    );
       }
    else if(res==undefined && res!=false)
       {
       // alert("No remarks");
        this.remarks="No_remarks";

        this.myService.updateFinalCandidate(this.registration_number,this.remarks,"REJECT").subscribe
    (
      (data) => {

        this.statusBean = Array.from(Object.keys(data), k=>data[k]);
     
        if( this.statusBean[0].val1=="OK")
        {
          alert("record saved");
        }

       if( this.statusBean[0].val1=="NOTOK")
        {
          alert("record not saved");
        }
 
    }
    );
       }

       

  }
  
  );

}

openReamrksDialog()
  {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    // dialogConfig.data=
    // {
    //   message: msg,
    //   outPutVal:output
    
    //  };
    return this.dialog.open(RemarkDialogComponent,dialogConfig);
  }
}
