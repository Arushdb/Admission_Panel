
import { Component, OnInit, Input, Output, ViewChild, ElementRef,EventEmitter } from '@angular/core';
import { studentBean } from '../../bean/studentBean';
import { WebServiceService } from '../../service/web-service.service';
import { CourseClass } from '../../bean/CourseClass';

@Component({
  selector: 'app-transfer-app',
  templateUrl: './transfer-app.component.html',
  styleUrls: ['./transfer-app.component.css']
})
export class TransferAppComponent implements OnInit {
  courseObject:CourseClass;
  dataarray=[];
  prog:CourseClass[] ;
  response:CourseClass[] ;
  Appno="";
  T_pid1="";
  T_pid2="";
  T_pid3="";
  count="";
 // @Input() myvariable:string;
 // @Output() myOutput:EventEmitter<studentBean[]>=new EventEmitter();
  
  //@ViewChild(StudentInfoComponent,{static: false}) stuComp:StudentInfoComponent;



  constructor( private myService:WebServiceService) { }

  ngOnInit() {
    sessionStorage.setItem("flag","transfer");
    this.courseObject=new CourseClass();
    this.getPrograms();
    //this.dataarray.push(this.courseObject);
  }


  getPrograms()
  {
    this.myService.getOwnerProgram1().subscribe
    (
      (data) => {
      this.prog = Array.from(Object.keys(data), k=>data[k]);
     // console.log(this.roomss);
    });
  }


  transNumber(val)
  {
    //console.log(val);
    this.count=val;
    this.dataarray=[];
    this.add(val);
  }

  add(v)
  {
    for (let i = 0; i < v; i++) {
      this.courseObject=new CourseClass();
      this.dataarray.push(this.courseObject);
      //this.dataarray2.push(this.courseObject);
   } 
  }

  remove(val)
  {
    console.log(val);
    this.dataarray.splice(val);
  }

 
  getData(value)
  {

    console.log(value[0].application_number);
    this.Appno=value[0].application_number;
  }

  transferApp()
  {
   // console.log(this.dataarray);

    if (this.dataarray.length==1)
    {
      console.log(this.dataarray[0].program_id);

      this.T_pid1=this.dataarray[0].program_id;
    }
    else if (this.dataarray.length==2)
    {
      console.log(this.dataarray[0].program_id);
      console.log(this.dataarray[1].program_id);

      this.T_pid1=this.dataarray[0].program_id;
      this.T_pid2=this.dataarray[1].program_id;
    }
    else if (this.dataarray.length==3)
    {
      console.log(this.dataarray[0].program_id);
      console.log(this.dataarray[1].program_id);
      console.log(this.dataarray[2].program_id);

      this.T_pid1=this.dataarray[0].program_id;
      this.T_pid2=this.dataarray[1].program_id;
      this.T_pid3=this.dataarray[2].program_id;
    }

    // for(let i=0; i<this.dataarray.length;i++)
    // {
      if (this.Appno!="")
      {

      
      
      this.myService.transferApplication(this.Appno,this.T_pid1,this.T_pid2,this.T_pid3,this.count).subscribe
      (
        (data) => {

          this.response = Array.from(Object.keys(data), k=>data[k]);
           console.log(this.response);
           if (this.response[0].status=="OK")
           {
            alert("Transfered application No.   "+this.response[0].transferApp + "and Password   "+ this.response[0].pass);
            this.Appno="";
          }
           else
           {
             alert(this.response[0].status);
             this.Appno="";
           }
           
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
                           
                             }
                        }
      );
    }
    else
    {
      alert ('Type application then click "Submit" and verify data first !');
    }
      
 //   }
//alert("Joint lectures Alloted");
    //this.DialogRef.close(false);
  }

}
