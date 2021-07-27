import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
   ngOnInit() {
     console.log("progress Spinner Load");
   }
   ngAfterViewInit(){}
   //constructor(public DialogRef:MatDialogRef<ProgressSpinnerComponent>) { }
   constructor() { }
  
   closeDialog()
  {
    console.log("hello");
    //this.DialogRef.close();
  }
  hellokitty()
  {
    console.log("hello");
  }

}
