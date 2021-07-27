import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebServiceService } from '../service/web-service.service';
import { studentBean } from '../bean/studentBean';
import { MatTableDataSource } from '@angular/material/table';
import { commonBean } from '../bean/commonBean';

@Component({
  selector: 'custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  
  studentInfo:commonBean[] ;
  dataSource1;
  objectList: Array<commonBean> = [];
  Obj = new commonBean();
  col1:String;
  col2:String;
  col3:String;
  col4:String;
  col5:String;
  col6:String;
  col7:String;
  col8:String;
  col9:String;
  col10:String;
  col11:String;
  col12:String;
  col13:String;
  col14:String;

  reportType:String;
  constructor(public DialogRef:MatDialogRef<CustomGridComponent>,
    private myservice:WebServiceService,
    @Inject(MAT_DIALOG_DATA) public data) 
     {
       this.reportType=data.message;
      console.log(data.message);
     }


    //displayedColumns: string[] = ['select','val1', 'val2','val3'];
    displayedColumns: string[] = ['select',
      'val1', 'val2','val3','val4','val5',
      'val6','val7','val8','val9','val10',
      'val11','val12','val13','val14'];

  ngOnInit() 
  {

    this.getcustomeData(this.reportType);
    this.col1="A";
    this.col2="B";
    this.col3="C";
    this.col4="A";
    this.col5="B";
    this.col6="C";
    this.col7="A";
    this.col8="B";
    this.col9="C";
    this.col10="A";
    this.col11="B";
    this.col12="C";
    this.col13="B";
    this.col14="C";
  }


  getcustomeData(val)
  {
    this.myservice.getCustomData(val).subscribe
    (
      (data) => {
      this.studentInfo = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.studentInfo);
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
      //console.log(this.Obj);
      
    }

    checkClick2(event)
    {

      if (event.checked==true)
      {
        this.objectList.push(this.Obj);

        console.log(this.Obj);
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
    }


    submitArray()
    {
      if(this.objectList.length>0)
      {
      //  alert(this.objectList[0].application_number);
        //this.objectList[0].val1;
        this.DialogRef.close(this.objectList[0].val3);
      }
    }

    close()
    {
      this.DialogRef.close(false);
    }

    applyFilter(filterValue: string) {
    
      this.dataSource1.filter = filterValue.trim().toLowerCase();
    }
}
