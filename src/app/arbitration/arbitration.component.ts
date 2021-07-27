import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-arbitration',
  templateUrl: './arbitration.component.html',
  styleUrls: ['./arbitration.component.css']
})
export class ArbitrationComponent implements OnInit {

  reasonCode="";
  eligibility="";

  @ViewChild('reasoncode', {static: false}) reasoncode: ElementRef;
  @ViewChild('eligi', {static: false}) eligi: ElementRef;
  constructor() { }

  ngOnInit() {
  }


  getData(value)
  {
    console.log("val"+value);
    if(value[0].first_name!="")
    {
     
      if (value[0].eligibility_status=="InEligible")
      {
        this.eligibility=value[0].eligibility_status;
        if(value[0].reason_status=="aggregate percentage less than 1")
        {
          this.reasonCode="Academic marks not submitted";
        }
        else
        {
          this.reasonCode=value[0].reason_status;
        }
        this.reasoncode.nativeElement.style="color:red";
        this.eligi.nativeElement.style="color:red";

      }
      else
      {
        this.reasonCode=value[0].reason_status;
        this.eligibility=value[0].eligibility_status;
        this.reasoncode.nativeElement.style="color:blue";
        this.eligi.nativeElement.style="color:green";
      }
         
     
    }
   
  }


}
