import { Component, OnInit } from "@angular/core";
import { WebServiceService } from "../service/web-service.service";

@Component({
  selector: "app-verify-signature",
  templateUrl: "./verify-signature.component.html",
  styleUrls: ["./verify-signature.component.css"],
})
export class VerifySignatureComponent implements OnInit {
  userInput: string = "";
  imageUrl: string | null = null;
  constructor(private myservice: WebServiceService) {}

  ngOnInit() {}

  onSubmit() {
    this.myservice.verifySignature(this.userInput).subscribe(
      (blob: Blob) => {
        // debugger;

        if (this.imageUrl) {
          URL.revokeObjectURL(this.imageUrl);
        }
        const objectURL = URL.createObjectURL(blob);
        this.imageUrl = objectURL;

        // const reader = new FileReader();
        // reader.onloadend = () => {
        //   this.imageUrl = reader.result as string;
        // };
        // reader.readAsDataURL(blob);

        window.open(objectURL);
        console.log("Success");
      },
      (error) => {
        console.log("Failed");
        debugger;
      }
    );
    //alert("You entered: " + this.userInput);
  }
}
