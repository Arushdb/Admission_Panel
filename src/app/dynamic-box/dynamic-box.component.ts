import { Component, OnInit } from '@angular/core';
import {commonBean} from '../bean/commonBean';
@Component({
  selector: 'dynamic-box',
  templateUrl: './dynamic-box.component.html',
  styleUrls: ['./dynamic-box.component.css']
})
export class DynamicBoxComponent implements OnInit {
//  commonBean:commonBean[];
  courseObject:commonBean;
  dataarray=[]
 //courseObject=new commonBean();
  constructor() { }

  ngOnInit() {
    this.courseObject=new commonBean();
    this.dataarray.push(this.courseObject);

  }

  add()
  {
    for (let i = 0; i < 3; i++) {
      this.courseObject=new commonBean();
    this.dataarray.push(this.courseObject);
    }
    
  }
  submitform()
  {
    console.log(this.dataarray);
    console.log(this.dataarray[0].val1);
  }

}
