import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../bean/CourseClass';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remark-dialog',
  templateUrl: './remark-dialog.component.html',
  styleUrls: ['./remark-dialog.component.css']
})
export class RemarkDialogComponent implements OnInit {

  studentData:string[] ;
  courseinfo:CourseClass[] ;
  courseObject:CourseClass;
  butControl="Add";
  course_type="";
  subtitle="Enter Remarks"
  value1="Submit Remarks"
  value2="Close";

  constructor(public DialogRef:MatDialogRef<RemarkDialogComponent>) { }

  ngOnInit() {
    this.courseObject=new CourseClass();
  }

  closeDialog()
  {
    this.DialogRef.close(false);
  }


  submitRemarks(val)
  {
   //alert(val);
  }
}
