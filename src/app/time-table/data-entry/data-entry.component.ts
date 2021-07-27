import { Component, OnInit, Inject } from '@angular/core';
import { commonBean } from 'src/app/bean/commonBean';
import { WebServiceService } from 'src/app/service/web-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  ValA:any;
  course_code1="";
  courseObject:commonBean;
  dataarray=[];
  dataarray2=[];
  dataarray3=[];
  courseInfo:commonBean[];
  roomss:commonBean[] ;
  jointLectures:commonBean[] ;
  objectList: Array<commonBean> = [];
  Instructor:commonBean[] ;

   //courseObject=new commonBean();
   //constructor(private myService:WebServiceService,
   //@Inject(MAT_DIALOG_DATA) public data) { }

  constructor(
    private myService:WebServiceService,
    @Inject(MAT_DIALOG_DATA) public data,
    public DialogRef:MatDialogRef<DataEntryComponent>) 
     {
       this.ValA=data.message;
       this.course_code1=data.message;
       sessionStorage.setItem('course_code',data.message);
       //console.log(data.message);
     }

  ngOnInit() {
    this.courseObject=new commonBean();
    this.dataarray.push(this.courseObject);
    this.dataarray2.push(this.courseObject);
   // this.dataarray3.push(this.courseObject);
    this.add();
    this.add1();
    //this.add2();
    this.getTimeTableRooms();
    this.getTimeTableTeacher();
    this.getJointLectures();

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



  viewDate(a)
  {
console.log(a);
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

  getTimeTableTeacher()
  {
    this.myService.getDataForTT('TT-Teacher').subscribe
    (
      (data) => {
      this.Instructor = Array.from(Object.keys(data), k=>data[k]);
     // console.log(this.Instructor);
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
  remove1(val)
  {
    console.log(val);
    this.dataarray2.splice(val);
  }

  add()
  {
    for (let i = 0; i < 2; i++) {
      this.courseObject=new commonBean();
      this.dataarray.push(this.courseObject);
      //this.dataarray2.push(this.courseObject);
   } 
  }

  add1()
  {
    for (let i = 0; i < 2; i++) {
      this.courseObject=new commonBean();
     // this.dataarray.push(this.courseObject);
      this.dataarray2.push(this.courseObject);
   } 
  }

 

  addOne()
  {
   this.courseObject=new commonBean();
   this.dataarray.push(this.courseObject);
  }

  submitform()
  {
      //console.log(this.dataarray);
    for(let i=0; i<this.dataarray.length;i++)
    {
      this.myService.InsertTimeTableRoomData(this.dataarray[i].val2).subscribe
      (
        (data) => {
        // this.Instructor = Array.from(Object.keys(data), k=>data[k]);
        // console.log(this.Instructor);
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
      //console.log(this.dataarray[i].val2);
    }
    alert("Rooms Alloted");
   
  }

  addOne1()
  {
   this.courseObject=new commonBean();
   this.dataarray2.push(this.courseObject);
  }





  submitform1()
  {
      //console.log(this.dataarray2);
    for(let i=0; i<this.dataarray2.length;i++)
    {
      this.myService.InsertTimeTableTeacherData(this.dataarray2[i].val3).subscribe
      (
        (data) => {
        // this.Instructor = Array.from(Object.keys(data), k=>data[k]);
        // console.log(this.Instructor);
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
    alert("Teachers Alloted");
  
   
  }


  getJointLectures()
  {
    this.myService.getDataForTT('TT-JointLectures').subscribe
    (
      (data) => {
      this.jointLectures = Array.from(Object.keys(data), k=>data[k]);
     this.add2(this.jointLectures);
      console.log(this.jointLectures);
    });
  }

  add2(vall)
  {
    for (let i = 0; i < vall.length; i++) {
      this.courseObject=new commonBean();
      this.courseObject.val1=vall[i].val1;
      this.courseObject.val2=vall[i].val2;
      this.courseObject.val3=vall[i].val3;
      this.courseObject.val4=vall[i].val4;
      this.courseObject.val5=vall[i].val5;
      this.courseObject.val6=vall[i].val6;
     this.dataarray3.push(this.courseObject);
   } 
  }

  addOne2()
  {
   this.courseObject=new commonBean();
   this.dataarray3.push(this.courseObject);
  }

  remove2(val)
  {
   // console.log(val);
    this.dataarray3.splice(val);
  }

  submitform2()
  {
    console.log(this.dataarray3);

    for(let i=0; i<this.dataarray3.length;i++)
    {
      
      this.myService.InsertJonitLectureInTimeTable(this.dataarray3[i].val2,this.dataarray3[i].val3,this.dataarray3[i].val4,this.dataarray3[i].val5,this.dataarray3[i].val6).subscribe
      (
        (data) => {

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
    alert("Joint lectures Alloted");
    //this.DialogRef.close(false);
  }








  submitArray()
  {
    if(this.objectList.length>0)
    {
      this.DialogRef.close(this.objectList[0].val3);
    }
  }

  close()
  {
    this.DialogRef.close(false);
  }

}
