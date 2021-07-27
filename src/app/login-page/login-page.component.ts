import { Component, OnInit } from '@angular/core';
import { loginBean } from '../bean/loginBean';
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from '../service/web-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  hide=true;
  responceMsg:loginBean[] ;
  constructor(private router: Router,private myservice:WebServiceService,private router1: ActivatedRoute) { }

  ngOnInit() {
    this.hide = true;


  }

  submit(f)
  {
console.log(f.value.userName);
    this.myservice.checkLogin(f).subscribe
    (
      responce =>
          {
            this.responceMsg =Array.from(Object.keys(responce), k=>responce[k]);
            console.log(this.responceMsg[0].status);

                      if(this.responceMsg[0].status=="OK")
                      {
                        
                        console.log(this.responceMsg[0].user_id);
                        console.log(this.responceMsg[0].panel_authority);
                        console.log(this.responceMsg[0].employee_code);
                        sessionStorage.setItem('userId',this.responceMsg[0].user_id);
                        sessionStorage.setItem('Autho',this.responceMsg[0].panel_authority.toString());
                        sessionStorage.setItem('EmployeeCode',this.responceMsg[0].employee_code.toString());
                      this.router.navigate(['/menue'],{queryParams:{page:1,order:this.responceMsg[0].user_id,code:this.responceMsg[0].panel_authority,name:f.value.userName}})
                      
                      }
                      else
                      {
                        alert("In Valid User");
                        //this.router.navigate(['/page2'],{queryParams:{page:1,order:this.responceMsg[0].user_id,code:this.responceMsg[0].panel_authority}})
                      }
          },
                 
                 (error:Response) =>   
                         {
                               if(error.status===404)
                               {
                                    alert ('This post has already been deleted.');
                               }
                               else
                               {
                                   alert ('An unexpected error occured.');
                                   console.log(error);
                               }
                          }


    );

  }


}
