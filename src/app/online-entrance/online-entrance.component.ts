import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-entrance',
  templateUrl: './online-entrance.component.html',
  styleUrls: ['./online-entrance.component.css']
})
export class OnlineEntranceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleEvent(val)
  {
    if (val.action=="done")
    {
      console.log(val);
    }

  }
}
