import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/service/web-service.service';
import { commonBean } from 'src/app/bean/commonBean';
import {TableModule} from 'primeng/table';
import { cars } from 'src/app/bean/cars';
import { SelectItem } from 'primeng/api';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DataEntryComponent } from '../data-entry/data-entry.component';
import { CustomComboComponent } from '../custom-combo/custom-combo.component';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.css']
})
export class DynamicFieldsComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }

  cars: commonBean[];
  cars1: cars[];
  cols: any[];
 drop:string[];
    selectedCar: commonBean;

    studentInfo: commonBean[];
    RoomInfo: commonBean[];
    brands: SelectItem[];;
    colors: commonBean[];
    clonedCars: { [s: string]: commonBean; } = {};

    constructor(private myservice: WebServiceService, private dialog: MatDialog) { }

    ngOnInit() {
        //this.myservice.getCustomData('A').then(cars1 => this.cars1 = cars1);
        //sessionStorage.setItem('program_id','0001003')
        
        this.cols = [
          { field: 'val1', header: 'Course Code' },
          { field: 'val2', header: 'Lectures/LAB (Weekly) hours' },
          { field: 'val3', header: 'Student count' },
          { field: 'val4', header: 'Active' },
          { field: 'val5', header: 'Room/Teacher' },
          { field: 'val6', header: 'Lecture Type' },
          { field: 'val7', header: 'Section' },
          { field: 'val9', header: 'Mode' },
          { field: 'val8', header: 'Action' }
      ];

    }

    OwnerProgramChange(val)
    {
console.log(val);
    }

    getCourseData()
    {
      this.getcustomeData('TTViewforEdit');
     // this.getRoomData();
    }


    openGridforDataEntry(val)
    {
     //console.log(val);

     const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="90%";
    dialogConfig.height="70%";
    dialogConfig.data={message:val};
    this.dialog.open(DataEntryComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        console.log("val:11"+res);
        if (res!="")
        {
      
        }
      }
    );
    }



    getcustomeData(val)
  {
    this.myservice.getCustomDataforTT(val).subscribe
    (
      (data) => {
      this.studentInfo = Array.from(Object.keys(data), k=>data[k]);
     // console.log(this.studentInfo);
    });
  }

  getRoomData()
  {
    this.myservice.getCustomDataforTT('TTRoom').subscribe
    (
      (data) => {
      this.RoomInfo = Array.from(Object.keys(data), k=>data[k]);
    //  console.log(this.RoomInfo);
    });
  }

  onRowEditInit(car: commonBean) {
  //this.clonedCars[car.val1] = {...car};
  console.log(car);
}

ON_OFFChange(val,VV)
{
  sessionStorage.setItem("course_code", VV.val1)
  console.log(val);
}
sectionCahnge(val,VV)
{
sessionStorage.setItem("course_code", VV.val1)
  const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.height="70%";
    dialogConfig.data={message:val};
    this.dialog.open(CustomComboComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        console.log("val:11"+res);
        if (res!="")
        {
      
        }
      }
    );

}

onRowEditSave(rowData: commonBean) {
  if (+rowData.val2 > 0) {
    // console.log(rowData.val1);
    // console.log(rowData.val2);
    // console.log(rowData.val3);
    // console.log(rowData.val4);
    // console.log(rowData.val5);
    // console.log(rowData.val7);
     
    this.myservice.InsertTimeRowData(rowData).subscribe
    (
      (data) => {
        alert("record saved");
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
  else {
     // this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
  }
}

onRowEditCancel(car: commonBean, index: number) {

  this.studentInfo[index];
  console.log(this.studentInfo[index]);
  // this.cars2[index] = this.clonedCars[car.vin];
  // delete this.clonedCars[car.vin];
}




}
