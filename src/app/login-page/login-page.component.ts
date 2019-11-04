import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from "../service/user.service";
import { DataService } from "../service/data.service";

import { FirstLoginRequest } from "../shared/models/first-login-request.model";
import { FirstLoginResponse } from "../shared/models/first-login-response.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  firstLoginRequest : FirstLoginRequest = new FirstLoginRequest().create();
  firstLoginResponse : FirstLoginResponse = new FirstLoginResponse().create();

  constructor(private router : Router, private dataService : DataService, private userService : UserService) {
  }

  ngOnInit() {
  }

  onFirstLogin(){

    this.userService.firstLogin(this.firstLoginRequest).subscribe(data => {

      this.firstLoginResponse = new FirstLoginResponse().createWithData(data);
      if(this.firstLoginResponse.status === "firstLogined"){

        this.dataService.changeMessage(this.firstLoginResponse.emojiSequence);
        this.router.navigate(["user/emojiVerify"], {queryParams: {userId : this.firstLoginResponse.userId, tokenString : this.firstLoginResponse.tokenString}});

      }else {

        alert("Login Fail" + "\n" + "Reason : " + this.firstLoginResponse.errors);

      }

    }, error => {


    })

  }

}
