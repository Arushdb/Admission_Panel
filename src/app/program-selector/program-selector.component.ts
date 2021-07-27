import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../service/web-service.service';
import { CourseClass } from '../bean/CourseClass';

@Component({
  selector: 'program-selector',
  templateUrl: './program-selector.component.html',
  styleUrls: ['./program-selector.component.css']
})
export class ProgramSelectorComponent implements OnInit {

  constructor(private myservice:WebServiceService) { }
  ownerProgram:CourseClass[] ;
  courseObject:CourseClass;
  ValA="";

  ngOnInit() {
    this.courseObject=new CourseClass();
    this.loadProgramCombo();
  }

  loadProgramCombo()
  {
    
    this.myservice.getOwnerProgram1().subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.ownerProgram);
    });
  }

  OwnerProgramChange(val){
    this.ValA=val;
sessionStorage.setItem("program_id",val);
sessionStorage.setItem("entity_id",this.ownerProgram[this.ownerProgram.findIndex(x=>x.program_id===val)].entityId);
  }
}
