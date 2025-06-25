import { Component, OnInit } from '@angular/core';
import { CourseClass } from 'src/app/bean/CourseClass';
import { commonBean } from 'src/app/bean/commonBean';
import { WebServiceService } from 'src/app/service/web-service.service';
import { ColDef, ColDefUtil, ColGroupDef, GridOptions,GridReadyEvent} from 'ag-grid-community';


@Component({
  selector: 'app-verify-program-list',
  templateUrl: './verify-program-list.component.html',
  styleUrls: ['./verify-program-list.component.css']
})
export class VerifyProgramListComponent implements OnInit {
 programList:CourseClass[] ;
 courseObject:CourseClass;
 programId:String="";
 numlist:String[] = ['1','2','3','4','5','6'];
 listNum:String ="";
 courseListGrid = []; //program list grid
 gridOptions: GridOptions;
 public defaultColDef:any;
 columnDefs: ColDef[]=[];
 verCount = 0;
 pendingCount =0;
 totCount = 0;
 vfyStatus:String="";
 vfyUser:String="";
 vfyDate:String="";
 showConfirmbutton:boolean = false;
showNoDatalbl:boolean = false;
styleCourse: { width: string; height: string; flex: string };

 constructor(private myService:WebServiceService) { 
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    };

    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true,
    };
    const columns = [
      'seq_no',
      'vfy_status',
      'verifiedby',
      'verifiedon',
      'application_number',
      'first_name',
      'category',
      'gender'    
    ];
    this.setColumns(columns);
 }

  ngOnInit() {
    this.gridOptions.columnDefs = this.columnDefs;
    this.courseObject=new CourseClass();
    this.resetData();
    this.loadProgramCombo();
  }
  
  hashValueGetter = function (params) {
    return params.node.rowIndex + 1;
  };

  setColumns(columns: string[]) {
    this.columnDefs = [];
    columns.forEach((column: string) => {
      let definition: ColDef = {
        headerName: column,
        field: column,
        width: 150,
      };
     if (column === 'seq_no') {
        definition.headerName = 'SrNo';
      } else if (column === 'first_name') {
        definition.headerName = 'StudentName';
        definition.maxWidth = 200;
      } else if (column === 'vfy_status') {
        definition.headerName = 'Status';
        definition.cellStyle = params => {
            if (params.value == "Pending") { return { color: 'red'}; }
            else { return { color: 'green'}; }
          }
      } else if (column === 'application_number') {
        definition.headerName = 'ApplicationNumber';
      } else if (column === 'category') {
        definition.headerName = 'Category';
      } else if (column === 'gender') {
        definition.headerName = 'Gender';
      } else if (column === 'verifiedby') {
        definition.headerName = 'VerifiedBy';
      } else if (column === 'verifiedon') {
        definition.headerName = 'VerifiedOnDate';
      } 
      this.columnDefs.push(definition);
    });
  }


  loadProgramCombo()
  {
    this.myService.getUserProgramList().subscribe
    (
      (data) => {
      this.programList = Array.from(Object.keys(data), k=>data[k]);
      console.log("programList", this.programList);
    });
  }

  resetData()
  {
   this.courseListGrid = [];
   this.showNoDatalbl = false;
   this.showConfirmbutton = false;    
   this.vfyStatus = "";  
   this.vfyUser = "";
   this.vfyDate = "";
   this.verCount = 0;
   this.pendingCount =0;
   this.totCount = 0;
  }
  
  ProgramListChange(program)
  {
    //sessionStorage.setItem('program_id', program);
   this.programId = program;
   this.listNum = null;
   this.resetData();
   console.log(program);
  }
  
  ListNumChange(event: Event)
  {
     const target = event.target as HTMLSelectElement; 
     this.listNum = target.value;
     this.resetData();
     console.log(this.listNum);
  }

  getdata()
  {
    //console.log("Selected:Program", this.programId, " List Number=", this.listNum); 
    this.myService.getvfyProgramList(this.programId, this.listNum).subscribe
    (
      (data) => {
      //console.log("programList", data);
      let outputlist = []; 
      let vfyprogramlist = [] ;
      outputlist = Array.from(Object.keys(data), k=>data[k]);
      console.log("grid size", outputlist.length);
      if (outputlist.length == 0) { this.showNoDatalbl = true;} else {this.showNoDatalbl = false;}
        for (var obj of outputlist) {
          vfyprogramlist.push({
            seq_no: this.totCount +1,
            vfy_status: obj.vfy_status == "VER"?"Verified":"Pending",
            application_number: obj.application_number,
            first_name: obj.first_name,
            category: obj.category,
            gender: obj.gender,
            verifiedby: obj.verifiedby,
            verifiedon: obj.verifiedon
          });
          if (obj.vfy_status == "INS") { this.pendingCount++;} 
          else if  (obj.vfy_status == "VER") { this.verCount++;} 
          this.totCount++;
        }
      console.log("total count", this.totCount, " pendingcount", this.pendingCount, "verfiy count", this.verCount);
      this.courseListGrid = vfyprogramlist;
      this.checklistStatus();
    });
  }
  
  checklistStatus(){
    this.vfyStatus ="";
    if (this.totCount > 0) {
      this.myService.chkListStatus(this.programId, this.listNum).subscribe
      (
        (res) => {
        let st = Array.from(Object.keys(res), k=>res[k]);
        console.log("st", st);
        this.vfyStatus = "" + st[0].status;
        this.vfyUser = "" + st[0].verifiedby;
        this.vfyDate = "" + st[0].verifiedon;
          if (this.vfyStatus !=  "VERIFIED")
          {
              this.showConfirmbutton = true;
          }
        }
      );
    }
  }

  onRowSelected(event) {
    console.log("row selected");
  }

  OnCoursegridReady(parameters: GridReadyEvent) {
    this.styleCourse = {
      width: '100%',
      height: '30%',
      flex: '1 1 auto',
    };
    this.gridOptions.api.setRowData(this.courseListGrid);
  }

  confrimVer(){
    if (this.verCount == 0)
    {
      alert("There is no Verified Application Number. Please cross check again");
    }
    else
    {
      this.myService.updatePrgListVfyStatus(this.programId, this.listNum).subscribe
      ( (res) => {
        this.vfyStatus = "Verified";
        this.showConfirmbutton = false;
        console.log(res);
      });
    }
  }

}
