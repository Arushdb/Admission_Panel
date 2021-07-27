import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { studentBean } from '../bean/studentBean';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MarksGridComponent } from '../marks-grid/marks-grid.component';


@Component({
  selector: 'excel-report',
  templateUrl: './excel-report.component.html',
  styleUrls: ['./excel-report.component.css']
})
export class ExcelReportComponent implements OnInit {

  @Input() myvariable:string;
  @Output() myOutput:EventEmitter<studentBean[]>=new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  generateReport()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.height="60%";
    this.dialog.open(MarksGridComponent,dialogConfig).afterClosed().subscribe
    (
      res=>
      {
        this.myOutput.emit(res);
      }
    );

  }

}
