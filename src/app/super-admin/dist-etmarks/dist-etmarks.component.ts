import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from 'src/app/service/web-service.service';

@Component({
  selector: 'app-dist-etmarks',
  templateUrl: './dist-etmarks.component.html',
  styleUrls: ['./dist-etmarks.component.css']
})
export class DistETMarksComponent implements OnInit {

  constructor(private router: Router,private myService:WebServiceService,private router1: ActivatedRoute) { }
  @ViewChild('spinnerDiv', {static: false}) spinnerDiv: ElementRef;
  
  ngAfterViewInit()
  {
    this.spinnerDiv.nativeElement.hidden=true;
  }

  ngOnInit() {
  }





  runDistribution(){
   
    this.spinnerDiv.nativeElement.hidden=false;
    
    this.myService.distETmarks1().subscribe(res=>{
      this.spinnerDiv.nativeElement.hidden=true;
      debugger;
    // console.log(res[0].msg);/
    alert(res[0].msg);
    },(error=>{
      debugger;
      this.spinnerDiv.nativeElement.hidden=true;
      
    }));

  }






}
