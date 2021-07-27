import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/service/web-service.service';
import { commonBean } from 'src/app/bean/commonBean';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

courseInfo:commonBean[];
cols: any[];

constructor(private myservice: WebServiceService,
  public DialogRef:MatDialogRef<CourseGridComponent>) { }

  ngOnInit() 
  {
    this.cols = [
      { field: 'val1', header: 'Course Code' },
      { field: 'val2', header: 'Credits' },
      { field: 'val6', header: 'Title' },
      { field: 'val4', header: 'Type' },
      { field: 'val3', header: 'Registered Student' },
    
  ];
  }


  getCourseData()
  {
    this.getcustomeData('TTViewforEditPCKwise');
   // this.getRoomData();
  }

  getcustomeData(val)
  {
    this.myservice.getCustomDataforTT(val).subscribe
    (
      (data) => {
      this.courseInfo = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.courseInfo);
    });
  }

  Close()
  {
    this.DialogRef.close(false);
  }
}
