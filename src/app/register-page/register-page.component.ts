import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from "../service/user.service";

import { RegisterRequest } from "../shared/models/register-request.model";
import { RegisterResponse } from "../shared/models/register-response.model";

declare var startFaceCapture: any;
declare var stopCapture: any;
declare var snapshot: any;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerRequest : RegisterRequest = new RegisterRequest().create();
  registerResponse : RegisterResponse = new RegisterResponse().create();

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {

    startFaceCapture("reg-vid", "reg-can", "");

  }

  ngDestroy(){

    stopCapture();

  }

  onRegister(){

    this.registerRequest.imageDataUrl = snapshot();
    stopCapture();

    this.userService.register(this.registerRequest).subscribe(data => {

      this.registerResponse = new RegisterResponse().createWithData(data);
      if(this.registerResponse.status === "registered"){

        alert("Register Success");
        this.router.navigateByUrl("user/login");

      }else{

        alert("Register Fail" + "\n" + "Reason : " + this.registerResponse.errors);

      }

    }, error => {

      alert("Ops Unknown Error");

    });

  }

}
