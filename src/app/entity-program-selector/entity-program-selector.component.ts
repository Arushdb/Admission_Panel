import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../bean/CourseClass';
import { commonBean } from '../bean/commonBean';
import { WebServiceService } from '../service/web-service.service';

@Component({
  selector: 'entity-program-selecter',
  templateUrl: './entity-program-selector.component.html',
  styleUrls: ['./entity-program-selector.component.css']
})
export class EntityProgramSelectorComponent implements OnInit {

  ownerFaculty:CourseClass[] ;
  sessionArray:CourseClass[] ;
  sessionDates:string[] ;
  ownerProgram:CourseClass[] ;
  courseObject:CourseClass;
  beanArray:commonBean[];
  courseInfotoLoad:commonBean[];
  valA="";
  valB="";
  start:any="";
  end:any="";
  constructor(private myService:WebServiceService) { }

  ngOnInit() {
    this.courseObject=new CourseClass();
    this.getSession();
    this.getFaculty();
    
  }

 
  getSession()
  {
    this.myService.getSession().subscribe
    (
      (data) => {
      this.sessionArray = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.sessionArray);
    });
  }

  onsessionChange(val)
  {
    console.log(val);
   this.start= this.sessionArray[this.sessionArray.findIndex(x=>x.sessionDate===val)].session_start_date;
   this.end= this.sessionArray[this.sessionArray.findIndex(x=>x.sessionDate===val)].session_end_date;
   sessionStorage.setItem('start_date', this.start);
   sessionStorage.setItem('end_date', this.end);
  }

  getFaculty()
  {
    this.myService.getOwnerFaculty().subscribe
    (
      (data) => {
      this.ownerFaculty = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.ownerFaculty);
    });
  }


  loadProgramCombo(entity)
  {
    sessionStorage.setItem('entity_id', entity);
    this.valA=entity;
    this.myService.getOwnerProgram(entity).subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.ownerProgram);
    });
  }

  OwnerProgramChange(program)
  {
    sessionStorage.setItem('program_id', program);
    this.valB=program;
   console.log(program);
  }

}
