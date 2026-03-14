import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { WebServiceService } from "src/app/service/web-service.service";

@Component({
  selector: "app-generate-admit-card",
  templateUrl: "./generate-admit-card.component.html",
  styleUrls: ["./generate-admit-card.component.css"],
})
export class GenerateAdmitCardComponent implements OnInit, AfterViewInit {
  @ViewChild("spinnerDiv", { static: false }) spinnerDiv!: ElementRef;

  programList: any[] = [];            // List of programs
  selectedProgramId: string = "";     // Selected program ID
  message: string = "";               // Status message
  loading: boolean = false;           // 🔹 spinner flag

  constructor(
    private router: Router,
    private webService: WebServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadPrograms();
  }

  ngAfterViewInit(): void {
    this.hideSpinner();
  }

  /** Show spinner */
  private showSpinner(): void {
    if (this.spinnerDiv) this.spinnerDiv.nativeElement.hidden = false;
  }

  /** Hide spinner */
  private hideSpinner(): void {
    if (this.spinnerDiv) this.spinnerDiv.nativeElement.hidden = true;
  }

  /** Load programs from backend */
  loadPrograms(): void {
  //this.showSpinner();
  this.loading = true;  // show spinner
  this.webService.getProgramList().subscribe(
    (data: any) => {
      this.programList = data.programs || [];
      this.message = "";
      this.loading = false; // hide spinner
     // this.hideSpinner();
    },
    (error) => {
      console.error("Error fetching program list:", error);
      this.message = "Failed to load programs.";
      this.loading = false; // hide spinner
     // this.hideSpinner();
    }
  );
}
  /** Generate Admit Cards for selected program */
  generateAdmitCards(): void {
  if (!this.selectedProgramId) {
    alert("Please select a program first.");
    return;
  }

//  this.showSpinner();
  this.loading = true; // show spinner

  this.webService.generateAdmitCardNew(this.selectedProgramId).subscribe(
    (data: any) => {
      this.message = data.message || "Admit cards generation completed successfully.";
     // this.hideSpinner();
     this.loading = false; // hide spinner
    },
    (error) => {
      console.error("Error generating admit cards:", error);
      this.message = "Error while generating admit cards.";
      //this.hideSpinner();
      this.loading = false; // hide spinner
    }
  );
}

}
