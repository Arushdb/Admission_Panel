import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ColDef, GridOptions, GridReadyEvent, IsRowSelectable} from 'ag-grid-community';


import { AgGridAngular } from 'ag-grid-angular';

import { SubscriptionContainer } from '../Subscription-container';
import { student } from '../studentinterface';
import { Location } from '@angular/common';
import { WebServiceService } from 'src/app/service/web-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-verifymarks',
  templateUrl: './verifymarks.component.html',
  styleUrls: ['./verifymarks.component.css']
})
export class VerifymarksComponent implements OnInit {
 
  isRowSelectable: IsRowSelectable;
  public columnDefs: ColDef[];
  subs = new SubscriptionContainer();
  mask: boolean = false;
  gridOptions: GridOptions;
  rowData:student[]=[];
  showspinner:boolean;
 

  displaygrid = false;
  applicantForm: FormGroup;
  
  studentregdata: student[] = [];

  
  

  myobj: student;
  lastclass: any;
  lastbranch: any[] = [];
  regclass: any;


  spinnerstatus: boolean = false;
 
  public defaultColDef: ColDef = {

    // suppressSizeToFit:false,
    resizable: false,
    sortable: true,
    filter: true

  };

  getRowStyle: any;
  suppressRowClickSelection: boolean;
  showbutton: boolean;
  regbranch: string;
  submitted: boolean;
  appname:any;
  showcard: boolean;
  reason:any;
  mkstatus: string;

  constructor(
   
    private webservice:WebServiceService,
    private elementRef: ElementRef,
    private location: Location,
    private formBuilder: FormBuilder,
    private router:Router,
    private dialog: MatDialog
  ) { }
  get f() {
          
    return this.applicantForm.controls; }

  ngOnInit() {

    this.showspinner=false;
    this.showcard=true;
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true,
      
    };
  this.rowData =[{
    application_number: "", componentID : "", first_name : "",
    marksPercentage: '',
    marksObtained: '',
    totalMarks: '',
    score: '',
    verificationStatusDesc: '',
    verificationStatusCode: ''
  }];
    debugger;
    this.applicantForm = this.formBuilder.group({
      //title: ['', Validators.required],
      appno: [''],
      reason: [''],
    
    });

    this.columnDefs = [

      { headerName: 'Sq.no', valueGetter: this.hashValueGetter, width: 100},
       
      
      { headerName: 'Class', field: 'componentID', suppressSizeToFit: false, flex: 1 },
      { headerName: 'Marks %', field: 'marksPercentage', suppressSizeToFit: false, flex: 1 },
      { headerName: 'Marks Obtained', field: 'marksObtained', suppressSizeToFit: false, flex: 1 },
      { headerName: 'Total Marks', field: 'totalMarks', suppressSizeToFit: false, flex: 1 },
      { headerName: 'Percentile', field: 'score', suppressSizeToFit: false, flex: 1 },
       
      
    
    ];




  }

  onCancel() {
    debugger;
    //this.showcard=false;
   // this.applicantForm.reset();
    
    this.subs.dispose();
   this.elementRef.nativeElement.remove();
    this.location.back();
    //this.location.back();
    this.router.navigateByUrl("/cca")
    


  }
  ngOnDestroy(): void {
    this.subs.dispose();
    this.elementRef.nativeElement.remove();


  }

  OngridReady(params: GridReadyEvent) {


this.gridOptions.columnDefs = this.columnDefs;




  }

  hashValueGetter = function (params) {

    return params.node.rowIndex + 1;
  };
  onchange($event){
    this.rowData=[];
    this.appname="";
    this.mkstatus="";
    this.showbutton=false;
  }

getApplicantMarks(){
  this.showbutton=false;
 let appno =this.f.appno.value;
 this.showspinner=true;
  this.subs.add =   this.webservice.getApplicantMarks(appno).subscribe(
    
    (res:student[])=>{ 
     
    this.appname="";
    this.rowData=res;
    
    this.appname=this.rowData[0].first_name;
    this.mkstatus=this.rowData[0].verificationStatusCode;
    if (this.rowData.length>0)
        this.showbutton=true;
    this.showspinner=false;
      
    },err=>{
      this.showbutton=false;
      this.mkstatus="";
      this.appname="";
      console.log(err);
      this.showspinner=false;
    });

}

onSubmit() {
  debugger;
  if (this.applicantForm.invalid) {
       
    return;
}
this.submitted = true;

this.getApplicantMarks();


}

onTrue(){
  this.mkstatus="";
  const dialogRef=  this.openConfirmDiaog("Please confirm");
  dialogRef.disableClose = true;
  this.subs.add=dialogRef.afterClosed().subscribe(result => {
if(result){
  let appno =this.f.appno.value;
  let code ="V";
  let reason="";


  this.showspinner=true;
  this.subs.add =   this.webservice.updatestatus(appno,code,reason).subscribe(
    
    (res)=>{ 
     // JSON.parse(res);
    // this.rowData=res;
    //this.rowData=JSON.parse(res[0]);
    this.appname="";
    this.showspinner=false;
    this.getApplicantMarks();
    
      console.log(res);
    },err=>{
      this.showspinner=false;
      this.appname="";
      console.log(err);
    });
}
  
   });      
  
 
}
onWrong(){
  this.mkstatus="";
  let reason:string="";
  reason = String(this.f.reason.value);

  if (reason==='undefined'){
    alert("Please enter reason");
    return;
  }
    
  const dialogRef=  this.openConfirmDiaog("Please confirm");
  dialogRef.disableClose = true;
  this.subs.add=dialogRef.afterClosed().subscribe(result => {
if(result){
 
  let appno =this.f.appno.value;
  let code ="W";
  let reason= this.f.reason.value;
  this.showspinner=true;
  this.subs.add =   this.webservice.updatestatus(appno,code,reason).subscribe(
    
    (res)=>{ 
    this.appname="";
    this.showspinner=false;
    this.getApplicantMarks();
    
      console.log(res);
    },err=>{
      this.showspinner=false;
      this.appname="";
      console.log(err);
    });



}
  

   });      

  

}

openConfirmDiaog(msg)
{
  return this.dialog.open(ConfirmDialogComponent,{
    width:"360px",
    disableClose:true,
    panelClass:'confirm-dialog-container',
    data:
    {
      message:msg
    }
  });

}

}
