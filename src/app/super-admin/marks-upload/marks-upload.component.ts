import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WebServiceService } from 'src/app/service/web-service.service';
import { commonBean } from 'src/app/bean/commonBean';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CustomGridComponent } from 'src/app/custom-grid/custom-grid.component';
import { CourseClass } from 'src/app/bean/CourseClass';

@Component({
  selector: 'marks-upload',
  templateUrl: './marks-upload.component.html',
  styleUrls: ['./marks-upload.component.css']
})
export class MarksUploadComponent implements OnInit {
profileForm:FormGroup;
fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  ownerProgram:commonBean[] ;
  type="";
  courseObject:CourseClass;
  ValA:any=""
  constructor(private fb: FormBuilder,private myService:WebServiceService,private dialog: MatDialog) { }

  ngOnInit() {
    this.courseObject=new CourseClass();
  }

//     this.profileForm=this.fb.group({
//       name:[''],
//       profile:['']
//     });
//   }

//   onselect(event)
//   {
//     if(event.target.files.length>0)
//     {
// const profile = event.target.files[0].name;
// console.log(profile);
// this.profileForm.get('profile').setValue(profile);
//     }
// //console.log(event.target.files);
//   }

//   onsubmit()
//   {
//     const formData =new FormData();
//     formData.append('name',this.profileForm.get('name').value);
//     formData.append('profile',this.profileForm.get('profile').value);
//    // console.log(this.profileForm.get('name').value);
//     // this.myService.upload(formData).subscribe
//     // (
      
//     // );
//   }
    

fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.preview();
}

preview() {
// Show preview 
var mimeType = this.fileData.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

var reader = new FileReader();      
reader.readAsDataURL(this.fileData); 
reader.onload = (_event) => { 
  this.previewUrl = reader.result; 
}
}

onSubmit() {
  const formData = new FormData();
  formData.append('file', this.fileData);
  //formData.append('program_id',sessionStorage.getItem('program_id'));
 // this.myService.post('url/to/your/api', formData)
 this.myService.upload(formData)
    .subscribe(res => {
      console.log(res);
     // this.uploadedFilePath = res.data.filePath;
      alert('SUCCESS !!');
    }) 
}

uploadMarks()
{
  if (sessionStorage.getItem('program_id')!="")
  {
    this.myService.uploadMarks().subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.ownerProgram);
      alert("Unique Records Uploaded:"+this.ownerProgram[0].status);
    });
  }
  else{
    alert("Please Select Program")
  }
}

viewWrongApp()
{
  this.type="WRONGAPP";
  this.generateReport1();
}
  
viewDuplocateApp()
{
  this.type="DPLAPP";
  this.generateReport1();
}

generateReport1()
{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="80%";
  dialogConfig.height="60%";
  dialogConfig.data={message:this.type};
  this.dialog.open(CustomGridComponent,dialogConfig).afterClosed().subscribe
  (
    res=>
    {
      console.log("val:11"+res);
      this.getRecordForUpdate(res);
     // this.myOutput.emit(res);
    }
  );

}

getRecordForUpdate(app)
{
  this.myService.getCustomDataForET(app).subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
      this.courseObject.correctApp= "";
      this.ValA=  this.ownerProgram[0].val3;
      this.courseObject.ETmarks=  Number(this.ownerProgram[0].val2);
      console.log(Number(this.ownerProgram[0].val2));
      //alert("Unique Records Uploaded:"+this.ownerProgram[0].status);
    });
}

updateETMarks(val,val2,flag)
{
  sessionStorage.setItem('wronApplication',this.ValA);
  sessionStorage.setItem('ETmarks',val);
  sessionStorage.setItem('application_number',val2);
  sessionStorage.setItem('flag',flag);

  this.myService.EditEntranceMarks().subscribe
    (
      (data) => {
      this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.ownerProgram);
    });
}
viewMakrs(val,val2)
{
  sessionStorage.setItem('application_number',val);
  sessionStorage.setItem('flag',val2);
  this.type="VIEW_ET_MARKS";
  this.generateReport1();
  // this.myService.EditEntranceMarks().subscribe
  //   (
  //     (data) => {
  //     this.ownerProgram = Array.from(Object.keys(data), k=>data[k]);
  //     console.log(this.ownerProgram);
  //   });
}

//EditEntranceMarks
}
