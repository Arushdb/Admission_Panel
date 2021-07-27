import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  intBoard:boolean=false;
  ccaBoard:boolean =false;
  ADMIN:boolean =false;
  SuperADMIN:boolean =false;
  clerkA:boolean =false;
  clerkB:boolean =false;
  clerkC:boolean =false;
  TT:boolean=false;
  ONENT:boolean=false;
  gdBoard:boolean=false;

  user='user@gmail.com';
  //instLogin:boolean;
  constructor(private router: ActivatedRoute,private router1: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('Autho')=='TTT')
      {
        this.TT=true;
        //this.ONENT=true;
        this.ccaBoard=false;
        this.intBoard=false;
       this.ADMIN=false;
        this.SuperADMIN=false;
       this.clerkA=false;
        this.clerkB=false;
      }
      else if (sessionStorage.getItem('Autho')=='INT01')
      {
        this.ccaBoard=false;
        this.intBoard=true;
       this.ADMIN=false;
        this.SuperADMIN=false;
       this.clerkA=false;
        this.clerkB=false;
        this.TT=false;
      }
      else if (sessionStorage.getItem('Autho')=='GD01')
      {
        this.gdBoard=true;
        this.ccaBoard=false;
        this.intBoard=false;
       this.ADMIN=false;
        this.SuperADMIN=false;
       this.clerkA=false;
        this.clerkB=false;
        this.TT=false;
      }
      else if (sessionStorage.getItem('Autho')=='CCA01'){
        this.ccaBoard=true;
        this.intBoard=false;
       this.ADMIN=false;
        this.SuperADMIN=false;
       this.clerkA=false;
        this.clerkB=false;
        this.TT=false;

      }

      else if (sessionStorage.getItem('Autho')=='ADM11'){
        this.ccaBoard=true;
        this.intBoard=true;
       this.ADMIN=true;
        this.SuperADMIN=true;
       this.clerkA=true;
        this.clerkB=true;
        this.gdBoard=true;
        //this.TT=true;

      }

      else if (sessionStorage.getItem('Autho')=='TYP-B'){
        this.ccaBoard=false;
        this.intBoard=false;
       this.ADMIN=false;
        this.SuperADMIN=false;
       this.clerkA=false;
        this.clerkB=true;
        //this.TT=true;

      }
    
    
   // this.clerkC=true;
   //console.log("menuLoad");
  }

  logout()
  {
  // window.location.reload();
  //location.reload();
  this.router1.navigate(['/login']);
  }

  generate_admit_card()
  {
    this.router1.navigate(['/genAdmitCard']);
  }
  enterInterviewMarks()
  {
    this.router1.navigate(['/interview']);
  }
  enterGDMarks()
  {
    this.router1.navigate(['/GD']);
  }
  enterCCAMarks()
  {
    this.router1.navigate(['/cca']);
    
  }

  runComputation()
  {
    this.router1.navigate(['/superAdmin/runCompute']);
  }

  transferApplication()
  {
    this.router1.navigate(['/superAdmin/transfer']);
  }


  viewMarks()
  {
    this.router1.navigate(['/superAdmin/viewMarks']);
  }
  viewMarksfroCounselling()
  {
    this.router1.navigate(['/superAdmin/counselling']);
  }


  runFinalMerit()
  {
    this.router1.navigate(['/superAdmin/runMerit']);
  }

  verifyMerit()
  {
    this.router1.navigate(['/superAdmin/verifyMerit']);
  }

  viewArbitrationReport()
  {
    this.router1.navigate(['/arbit']);
  }
  entreanceTestRelated()
  {
    this.router1.navigate(['/superAdmin/marksUpload']);
  }
  verifyComputation()
  {
    this.router1.navigate(['/superAdmin/verifyComputation']);
  }
  TimeTable()
  {
    this.router1.navigate(['/TT']);
  }

  OnlineEntranceTest()
  {
    this.router1.navigate(['/ONENT']);
  }
  
}
