import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/service/web-service.service';
import { CourseClass } from 'src/app/bean/CourseClass';
import { commonBean } from 'src/app/bean/commonBean';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.css']
})
export class ViewMarksComponent implements OnInit {

  constructor(private myService:WebServiceService) { }
   Appno="";
   genrateStatus:CourseClass[];
   studentMarks:commonBean[];
   cols: any[];
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
    console.log(value[0].application_number);
    this.Appno=value[0].application_number;
    this.getCourseDetail(this.Appno);
  }


  getCourseDetail(val)
  {
    this.myService.getStudentMarks(val).subscribe
    (
      (data) => {
      this.studentMarks = Array.from(Object.keys(data), k=>data[k]);
   // console.log(this.a1);
    });
  }
}
