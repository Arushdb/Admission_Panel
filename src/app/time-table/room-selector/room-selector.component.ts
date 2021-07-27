import { Component, OnInit } from '@angular/core';
import { commonBean } from 'src/app/bean/commonBean';
import { CourseClass } from 'src/app/bean/CourseClass';
import { WebServiceService } from 'src/app/service/web-service.service';

@Component({
  selector: 'room-selector',
  templateUrl: './room-selector.component.html',
  styleUrls: ['./room-selector.component.css']
})
export class RoomSelectorComponent implements OnInit {

  ValA:any;
  course_code1="";
  courseObject:commonBean;
  dataarray=[];
  courseInfo:commonBean[];
  roomss:commonBean[] ;
 //courseObject=new commonBean();
  constructor(private myService:WebServiceService) { }

  ngOnInit() {
    this.courseObject=new commonBean();
    this.dataarray.push(this.courseObject);
    this.add();
    this.getTimeTableRooms();
  }


  getTimeTableRooms()
  {
    this.myService.getDataForTT('TT-ROOM').subscribe
    (
      (data) => {
      this.roomss = Array.from(Object.keys(data), k=>data[k]);
     // console.log(this.roomss);
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
    for (let i = 0; i < 2; i++) {
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
