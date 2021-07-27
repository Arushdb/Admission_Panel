import { Component, OnInit } from '@angular/core';
import { commonBean } from 'src/app/bean/commonBean';
import { WebServiceService } from 'src/app/service/web-service.service';


@Component({
  selector: 'teacher-selector',
  templateUrl: './teacher-selector.component.html',
  styleUrls: ['./teacher-selector.component.css']
})
export class TeacherSelectorComponent implements OnInit {
  ValA:any;
  courseInfo:commonBean[];
  course_code1="";
  courseObject:commonBean;
  dataarray=[];
  Instructor:commonBean[] ;

  constructor(private myService:WebServiceService) { }

  ngOnInit() {
    this.courseObject=new commonBean();
    this.dataarray.push(this.courseObject);
    this.add();
    this.getTimeTableRooms();
  }


  getTimeTableRooms()
  {
    this.myService.getDataForTT('TT-Teacher').subscribe
    (
      (data) => {
      this.Instructor = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.Instructor);
    });
  }


  loadCourseData()
  {
    this.getTimeTableCourse();
  }

  getTimeTableCourse()
  {
    this.myService.getCustomData('TT-Course').subscribe
    (
      (data) => {
      this.courseInfo = Array.from(Object.keys(data), k=>data[k]);
      //this.ValA=this.courseObject.course_code;
      //this.course_code=this.courseObject.course_code;
      console.log(this.courseInfo);
    });
  }

  CourseChange(val)
  {
    this.ValA=val;
    this.ValA=this.courseInfo[this.courseInfo.findIndex(x=>x.val1===val)].val6;
    this.course_code1=val;
  }

  remove(val)
  {
    console.log(val);
    this.dataarray.splice(val);
  }

  add()
  {
    for (let i = 0; i < 3; i++) {
      this.courseObject=new commonBean();
      this.dataarray.push(this.courseObject);
   } 
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
      console.log(this.dataarray[i].val2);
    }
  
   
  }
}
