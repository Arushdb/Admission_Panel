import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { studentBean } from '../bean/studentBean';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogRef } from '@angular/material/dialog';
import { WebServiceService } from '../service/web-service.service';

@Component({
  selector: 'app-marks-grid',
  templateUrl: './marks-grid.component.html',
  styleUrls: ['./marks-grid.component.css']
})
export class MarksGridComponent implements OnInit {

  displayedColumns: string[] = ['select','application_number', 'first_name','marks'];
  selection = new SelectionModel<studentBean>(true, []);
  objectList: Array<studentBean> = [];
  Obj = new studentBean();
  dataSource1;
  studentInfo:studentBean[] ;
  constructor(public DialogRef:MatDialogRef<MarksGridComponent>,
    private myservice:WebServiceService) { }

  ngOnInit() {
this.getStudent();
  }


  getStudent()
  {
    this.myservice.getStudent().subscribe
    (
      (data) => {
      this.studentInfo = Array.from(Object.keys(data), k=>data[k]);
      //console.log(this.studentInfo);
      this.dataSource1=new MatTableDataSource(this.studentInfo);
    
    });
   
  }
  closeDialog()
  {
this.DialogRef.close(false);
  }

  checkClick(row)
    {
      //console.log(row);
    
      this.Obj=row;
    //  console.log(this.Obj);
      
    }

    checkClick2(event)
    {
     // console.log(event.checked);
       
        //let Obj = new CourseClass();

      if (event.checked==true)
      {
        this.objectList.push(this.Obj);

        if(this.objectList.length>1)
        {
        alert("Please do not select multiple records");
        }
      }
      else if (event.checked==false)
      {
            const index: number = this.objectList.indexOf(this.Obj);
            if (index !== -1)
             {
              this.objectList.splice(index, 1);
             } 
      }
     
        //console.log(this.objectList);
    }

    submitArray()
    {
      if(this.objectList.length>0)
      {
      //  alert(this.objectList[0].application_number);
        this.objectList[0].application_number;
        this.DialogRef.close(this.objectList[0].application_number);
      }
    }

    close()
    {
      this.DialogRef.close(false);
    }

}
