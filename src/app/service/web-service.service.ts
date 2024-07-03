import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebServiceService {


  httpOption= { headers:{ 'content':"application/json", 'content-type':"application/x-www-form-urlencoded" } };
 // urlName="http://10.3.7.79:8081/";
 //urlName="http://125.17.153.215:8089/";
 // urlName="http://10.154.0.112:8089/";
 urlName="https://admission.dei.ac.in:8088/";
 //urlName="http://localhost:8080/";
  private url=this.urlName+"admission_panel_server/login/checkLogin.htm";
  private url1=this.urlName+"admission_panel_server/login/barCode.htm";
  private getFacultyUrl=this.urlName+"admission_panel_server/login/loadEntity.htm";
  private getprogram = this.urlName+"admission_panel_server/login/loadProgram.htm";
  private getSemester = this.urlName+"admission_panel_server/login/LoadSemester.htm";
  private getBranch = this.urlName+"admission_panel_server/login/LoadBranch.htm";
  private getSessionDate =this.urlName+"admission_panel_server/login/getSessionDate.htm";
  private generateAdmitCard =this.urlName+"admission_panel_server/admitcard/generateAdmitCard.htm"
  private runComputation =this.urlName+"admission_panel_server/computation/runComputation.htm";
  private transfer = this.urlName+"admission_panel_server/computation/TransferApplication.htm";
  private runComputation01 =this.urlName+"admission_panel_server/computation/runComputationForAll.htm";
  private meritListProcess =this.urlName+"admission_panel_server/computation/meritListProcess.htm"
  private getstudent =this.urlName+"admission_panel_server/cca_int/viewData.htm";
  private getstudentView =this.urlName+"admission_panel_server/cca_int/viewDataForArbitration.htm";
  private getstudentViewforCounclling =this.urlName+"admission_panel_server/cca_int/viewDataForCouncelling.htm";
  private DoOPeration =this.urlName+"admission_panel_server/cca_int/DoAction.htm";
  private DoOPerationforBulk =this.urlName+"admission_panel_server/cca_int/BulkMarksPosting.htm";
  private DoOPerationforBulk_GD =this.urlName+"admission_panel_server/cca_int/BulkMarksPosting_GD.htm";
  private EditRecord =this.urlName+"admission_panel_server/cca_int/EditRecord.htm";
private getStudentData =this.urlName+"admission_panel_server/cca_int/viewRecords.htm";
private getCustomeData =this.urlName+"admission_panel_server/computation/getCustomeData.htm";
private UpdateSCLcomponent =this.urlName+"admission_panel_server/computation/UpdateSCLcomponent.htm";
private UpdateFinalCandidate=this.urlName+"admission_panel_server/computation/UpdateFinalCandidate.htm";
private uu1=this.urlName+"admission_panel_server/computation/uploads.htm";
  private uploadETMarks=this.urlName+"admission_panel_server/cca_int/UploadET.htm";
  private EditETMarks=this.urlName+"admission_panel_server/cca_int/EditET.htm";
  private distETMarks=this.urlName+"admission_panel_server/computation/distributETMarks.htm";
  
  // Added by Arush on 17-06-2024
  private url_getapplicantmarks=this.urlName+"admission_panel_server/verifymarks/getapplicantmarks.htm";
  private url_updatestatus=this.urlName+"admission_panel_server/verifymarks/updatestatus.htm";
  private url_validateIWlist=this.urlName+"admission_panel_server/verifymarks/validateiwlist.htm";
  
  
  constructor(private http: HttpClient) { }


  checkLogin(f)
  {
   
    let param=JSON.stringify
    ({
      userName:f.value.userName,
      password:f.value.password
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.url,para,this.httpOption
    )
  }

  getStudent()
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      creator:sessionStorage.getItem('userId'),
      flag:sessionStorage.getItem('flag')
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getStudentData,para,this.httpOption
    )
  }


  getStudentMarks(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      creator:sessionStorage.getItem('userId'),
      flag:'viewMarks',
      application_number :val
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }


  getStudentMarksforCounselling(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      creator:sessionStorage.getItem('userId'),
      flag:'viewMarksforCounselling',
      application_number :val,
      program_id:sessionStorage.getItem('program_id')
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }

  


  getCustomData(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      creator:sessionStorage.getItem('userId'),
      flag:val,
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
      pck:sessionStorage.getItem('pck'),
      course_code:sessionStorage.getItem('course_code'),
      application_number:sessionStorage.getItem('application_number'),
      semester_code:sessionStorage.getItem('semester_code')

    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }



  InsertTimeTableRoomData(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      user_id:sessionStorage.getItem('userId'),
      f_room_key:val,
      flag:'InsertroomData',
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
      pck:sessionStorage.getItem('pck'),
      course_code:sessionStorage.getItem('course_code'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }



  InsertSectionDataTimeTable(count,pck,gender,section)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      user_id:sessionStorage.getItem('userId'),
      capacity:count,
      pck:pck,
      section:section,
      gender:gender,
      sectionType:sessionStorage.getItem('sectionType'),
      flag:'InsertSectionData',
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
      course_code:sessionStorage.getItem('course_code'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }


  InsertJonitLectureInTimeTable(pck,entity,count,sem_start,sem_end)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      user_id:sessionStorage.getItem('userId'),
      capacity:count,
      pck:pck,
      flag:'InsertJointLectures',
      start_date:sem_start,
      end_date:sem_end,
      entity_id:entity,
      course_code:sessionStorage.getItem('course_code'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }



  transferApplication(app,pid1,pid2,pid3,count)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      user_id:sessionStorage.getItem('userId'),
      toprogram:pid1,
      toprogram2:pid2,
      toprogram3:pid3,
      appnumber:app,
      transferFlag:count,
      fromprogram:sessionStorage.getItem('program_id'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.transfer,para,this.httpOption
    )
  }


  InsertTimeTableTeacherData(val)
  {
    let param=JSON.stringify
    ({
      employee_code:val,
      user_id:sessionStorage.getItem('userId'),
      flag:'InsertTeacherData',
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
      pck:sessionStorage.getItem('pck'),
      course_code:sessionStorage.getItem('course_code'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }

updateStudentMarksinSCL(val)
{

let param=JSON.stringify
({
 // employee_code:val,

  user_id:sessionStorage.getItem('userId'),
  flag:'updateStuentCallList',
  start_date:sessionStorage.getItem('start_date'),
  end_date:sessionStorage.getItem('end_date'),
  program_id:sessionStorage.getItem('program_id'),
  registration_number:val.val12,
  marks_obt:val.val6,
  totalMarks:val.val7,
  component_id:val.val5,
  application_number:val.val14,
  JEE_Percetile:val.val3,

});
let para = new HttpParams({fromObject:{courseObject:param}});

return this.http.post
(
this.UpdateSCLcomponent,para,this.httpOption
)
}


updateFinalCandidate(val1,val2,val3)
{

let param=JSON.stringify
({
 // employee_code:val,

  user_id:sessionStorage.getItem('userId'),
  start_date:sessionStorage.getItem('start_date'),
  end_date:sessionStorage.getItem('end_date'),
  program_id:sessionStorage.getItem('program_id'),
  registration_number:val1,
  remarks:val2,
  flag:val3
});
let para = new HttpParams({fromObject:{courseObject:param}});

return this.http.post
(
this.UpdateFinalCandidate,para,this.httpOption
)
}


  InsertTimeRowData(val)
  {
    let param=JSON.stringify
    ({
     // employee_code:val,

      user_id:sessionStorage.getItem('userId'),
      flag:'InsertTimeTableRowData',
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
      pck:sessionStorage.getItem('pck'),
      course_code:val.val1,
      course_classification:val.val4,
      capacity:val.val3,
      section:val.val5,
      status:val.val7,
      credits:val.val2,
      mode:val.val9

    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }



  InsertNewCourse(val1,val2,val3,val4,val5,val6)
  {
    let param=JSON.stringify
    ({
     // employee_code:val,

      user_id:sessionStorage.getItem('userId'),
      flag:'InsertTimeTableNewData',
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
      pck:sessionStorage.getItem('pck'),
      course_code:val1,
      course_classification:val4,
      capacity:val3,
      section:val5,
      status:"Y",
      credits:val2,
      mode:val6

    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }




  getCustomDataforTT(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      creator:sessionStorage.getItem('userId'),
      flag:val,
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
      application_number:sessionStorage.getItem('application_number'),
      pck:sessionStorage.getItem('pck'),
      semester_code:sessionStorage.getItem('semester_code')

    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }








  getCustomDataForET(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      creator:sessionStorage.getItem('userId'),
      application_number:val,
      flag:"WRET",
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
      entity_id:sessionStorage.getItem('entity_id'),
      program_id:sessionStorage.getItem('program_id'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getCustomeData,para,this.httpOption
    )
  }


  getStdentInfo(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      panel_authority:sessionStorage.getItem('Autho'),
      flag:sessionStorage.getItem('flag'),
      application_number:val
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getstudent,para,this.httpOption
    )
  }

  getStdentInfoforViewCouncelling(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      panel_authority:sessionStorage.getItem('Autho'),
      flag:sessionStorage.getItem('flag'),
      application_number:val,
      program_id:sessionStorage.getItem('program_id'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getstudentViewforCounclling,para,this.httpOption
    )
  }




  getStdentInfoforView(val)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      panel_authority:sessionStorage.getItem('Autho'),
      flag:sessionStorage.getItem('flag'),
      application_number:val,
      program_id:sessionStorage.getItem('program_id'),
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.getstudentView,para,this.httpOption
    )
  }

  insertMarks(val,app)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      panel_authority:sessionStorage.getItem('Autho'),
      flag:sessionStorage.getItem('flag'),
      marks:val,
      application_number:app,
      creator:sessionStorage.getItem('userId'),
      
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.DoOPeration,para,this.httpOption
    )
  }


  EditMarks(val,app)
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('EmployeeCode'),
      panel_authority:sessionStorage.getItem('Autho'),
      flag:sessionStorage.getItem('flag'),
      update_flag:val,
      application_number:app,
      creator:sessionStorage.getItem('userId')
    });
debugger;
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.EditRecord,para,this.httpOption
    )
  }

  barcodeTesting(f)
  {
    let param=JSON.stringify
    ({
      userName:f.value.userName,
      password:f.value.password
    });
    let para = new HttpParams({fromObject:{courseObject:param}});

    return this.http.post
    (
    this.url1,para,this.httpOption
    )
  }


  getOwnerFaculty() 
  {
  
    let param=JSON.stringify
    ({
      //entity_id:val,
      employee_code:sessionStorage.getItem('employeeCode'),
      panel_authority:sessionStorage.getItem('panel_authority'),
      // user_id:sessionStorage.getItem('userId'),
      flag:"ADMISSION",
      // course_code:sessionStorage.getItem('courseCode')
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.getFacultyUrl,para,this.httpOption
   )

  }



  getOwnerFacultyCMS() 
  {
  
    let param=JSON.stringify
    ({
      //entity_id:val,
      employee_code:sessionStorage.getItem('employeeCode'),
      panel_authority:sessionStorage.getItem('panel_authority'),
      // user_id:sessionStorage.getItem('userId'),
       flag:"TimeTable"
      // course_code:sessionStorage.getItem('courseCode')
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.getFacultyUrl,para,this.httpOption
   )

  }



  getDataForTT(val) 
  {
  
    let param=JSON.stringify
    ({
      //entity_id:val,
      employee_code:sessionStorage.getItem('employeeCode'),
      panel_authority:sessionStorage.getItem('panel_authority'),
      // user_id:sessionStorage.getItem('userId'),
      entity_id:sessionStorage.getItem('entity_id'),
     program_id:sessionStorage.getItem('program_id'),
      flag:val,
      start_date:sessionStorage.getItem('start_date'),
      end_date:sessionStorage.getItem('end_date'),
       course_code:sessionStorage.getItem('course_code'),
       pck:sessionStorage.getItem('pck'),
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.getCustomeData,para,this.httpOption
   )

  }

  getSession() 
  {
  
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('employeeCode'),
      panel_authority:sessionStorage.getItem('panel_authority'),
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.getSessionDate,para,this.httpOption
   )

  }

  genAdmitCard() 
  {
  
    let param=JSON.stringify
    ({

     start_date:sessionStorage.getItem('start_date'),
     end_date:sessionStorage.getItem('end_date'),
     entity_id:sessionStorage.getItem('entity_id'),
     program_id:sessionStorage.getItem('program_id'),
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.generateAdmitCard,para,this.httpOption
   )

  }




  runComputationProcess() 
  {
    let param=JSON.stringify
    ({

     start_date:sessionStorage.getItem('start_date'),
     end_date:sessionStorage.getItem('end_date'),
     entity_id:sessionStorage.getItem('entity_id'),
     program_id:sessionStorage.getItem('program_id'),
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.runComputation,para,this.httpOption
   )

  }
  

  BulkMarksProcess(val) 
  {
    let param=JSON.stringify
    ({
    flag:val
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.DoOPerationforBulk,para,this.httpOption
   )

  }


  BulkMarksProcess_GD(val) 
  {
    let param=JSON.stringify
    ({
    flag:val
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.DoOPerationforBulk_GD,para,this.httpOption
   )

  }





  runComputationProcess01() 
  {
    let param=JSON.stringify
    ({

     start_date:sessionStorage.getItem('start_date'),
     end_date:sessionStorage.getItem('end_date'),
     entity_id:sessionStorage.getItem('entity_id'),
     program_id:sessionStorage.getItem('program_id'),
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.runComputation01,para,this.httpOption
   )

  }


  runMeritListProcess() 
  {
  //alert("a1");
    let param=JSON.stringify
    ({

     start_date:sessionStorage.getItem('start_date'),
     end_date:sessionStorage.getItem('end_date'),
     entity_id:sessionStorage.getItem('entity_id'),
     program_id:sessionStorage.getItem('program_id'),
     flag:sessionStorage.getItem('flag')
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
   (
   this.meritListProcess,para,this.httpOption
   )

  }
  

  getOwnerProgram(val)
{
  let param=JSON.stringify
  ({
    entity_id:val,
    employee_code:sessionStorage.getItem('employeeCode'),
    panel_authority:sessionStorage.getItem('panel_authority'),
    // flag:sessionStorage.getItem('trackFlag'),
    flag:"PP",
    // course_code:sessionStorage.getItem('courseCode'),
    user_id:sessionStorage.getItem('userId')
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.getprogram,para,this.httpOption
 )
}


getOwnerProgramCMS(val)
{
  let param=JSON.stringify
  ({
    entity_id:val,
    employee_code:sessionStorage.getItem('employeeCode'),
    panel_authority:sessionStorage.getItem('panel_authority'),
    // flag:sessionStorage.getItem('trackFlag'),
    flag:"TimeTable",
    // course_code:sessionStorage.getItem('courseCode'),
    user_id:sessionStorage.getItem('userId')
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.getprogram,para,this.httpOption
 )
}



getOwnerSemesterCMS(val)
{
  let param=JSON.stringify
  ({
    program_id:val,
    entity_id:sessionStorage.getItem('entity_id'),
    employee_code:sessionStorage.getItem('employeeCode'),
    panel_authority:sessionStorage.getItem('panel_authority'),
    //flag:sessionStorage.getItem('trackFlag'),
    flag:"TimeTable",
    //course_code:sessionStorage.getItem('courseCode'),
    user_id:sessionStorage.getItem('userId')
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.getSemester,para,this.httpOption
 )
}


getOwnerBranchCMS(val)
{
  let param=JSON.stringify
  ({
    program_id:sessionStorage.getItem('program_id'),
    entity_id:sessionStorage.getItem('entity_id'),
    employee_code:sessionStorage.getItem('employeeCode'),
    panel_authority:sessionStorage.getItem('panel_authority'),
    branch_id:val,
    pck:sessionStorage.getItem('pck'),
    semester_code:sessionStorage.getItem('semester_code'),
    //flag:sessionStorage.getItem('trackFlag'),
    flag:"TimeTable",
    //course_code:sessionStorage.getItem('courseCode'),
    user_id:sessionStorage.getItem('userId')
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.getBranch,para,this.httpOption
 )
}

getOwnerProgram1()
{
  let param=JSON.stringify
  ({
    
    employee_code:sessionStorage.getItem('employeeCode'),
    panel_authority:sessionStorage.getItem('panel_authority'),
     flag:"PE",
    // course_code:sessionStorage.getItem('courseCode'),
    user_id:sessionStorage.getItem('userId')
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.getprogram,para,this.httpOption
 )
}


getOwnerProgram2(appNo)
{
  let param=JSON.stringify
  ({
    
    employee_code:sessionStorage.getItem('employeeCode'),
    panel_authority:sessionStorage.getItem('panel_authority'),
     flag:"ARB",
     application_number:appNo,
    // course_code:sessionStorage.getItem('courseCode'),
    user_id:sessionStorage.getItem('userId')
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.getprogram,para,this.httpOption
 )
}

uploadMarks()
{
  let param=JSON.stringify
  ({
     program_id:sessionStorage.getItem('program_id'),
     flag:"ET"
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.uploadETMarks,para,this.httpOption
 )
}


EditEntranceMarks()
{
  let param=JSON.stringify
  ({
     program_id:sessionStorage.getItem('program_id'),
     flag:sessionStorage.getItem('flag'),
     application_number:sessionStorage.getItem('application_number'),
     wrongAppNo:sessionStorage.getItem('wronApplication'),
     marks:sessionStorage.getItem('ETmarks')
  });

  let para = new HttpParams({fromObject:{courseObject:param}});

  return this.http.post
 (
 this.EditETMarks,para,this.httpOption
 )
}

distETmarks()
  {
   
    // let param=JSON.stringify
    // ({
    //   userName:f.value.userName,
    //   password:f.value.password
    // });
    // let para = new HttpParams({fromObject:{courseObject:param}});
    let httpparam = new HttpParams();

    return this.http.post
    (
    this.distETMarks,httpparam,this.httpOption
    )
  }



upload(formData)
{
  // let param=JSON.stringify
  // ({
    
  //   program_id:sessionStorage.getItem('program_id'),
  //   //fileData:formData
  // });
  // let para = new HttpParams({fromObject:{courseObject:param}});

return this.http.post(this.uu1,formData)

// .subscribe(res => {
//   console.log(res);
//   //this.uploadedFilePath = res.data.filePath;
//   alert('SUCCESS !!');
// }) 

}

// added by Arush on 17-06-2024
getApplicantMarks(appno:string)
{

  
  let param=JSON.stringify
  ({
    
    employee_code:sessionStorage.getItem('employeeCode'),
    panel_authority:sessionStorage.getItem('panel_authority'),
     flag:"PE",
    // course_code:sessionStorage.getItem('courseCode'),
    user_id:sessionStorage.getItem('userId')
  });
 let user = sessionStorage.getItem('userId');
  let para = new HttpParams();
 para= para.set("application_number",appno);
 para= para.set("user",user);

  return this.http.post
 (
 this.url_getapplicantmarks,para,this.httpOption
 )
}

// added by Arush on 17-06-2024
updatestatus(appno:string,code:string,reason:string)
{
  let user = sessionStorage.getItem('userId');
let para = new HttpParams();
 para= para.set("application_number",appno);
 para= para.set("verificationStatusCode",code);
 para= para.set("verificationStatusDesc",reason);
 para= para.set("user",user);

  return this.http.post
 (
 this.url_updatestatus,para,this.httpOption
 )
}

validatefromIWlist(appno:string)
{
let para = new HttpParams();
 para= para.set("application_number",appno);
 
  return this.http.post
 (
 this.url_validateIWlist,para,this.httpOption
 )
}


}
