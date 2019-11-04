import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from "../service/user.service";
import { DataService } from "../service/data.service";

import { SecondLoginRequest } from "../shared/models/second-login-request.model";
import { SecondLoginResponse } from "../shared/models/second-login-response.model";
import { AWSFaceDetectTestRequest } from "../shared/models/awsface-detect-test-request.model";

declare var startFaceCapture : any;
declare var startEmotionSequenceCapture: any;

@Component({
  selector: 'app-first-login-page',
  templateUrl: './first-login-page.component.html',
  styleUrls: ['./first-login-page.component.css']
})
export class FirstLoginPageComponent implements OnInit {

  secondLoginRequest : SecondLoginRequest = new SecondLoginRequest().create();
  secondLoginResponse : SecondLoginResponse =  new SecondLoginResponse().create();

  emojiSequence : Array<string>;
  start = true;
  captured = false;
  responsed = false;

  constructor(private route : ActivatedRoute, private userService : UserService, private dataService : DataService) {
  }

  ngOnInit() {

    this.secondLoginRequest.userId = +this.route.snapshot.queryParams.userId;
    this.secondLoginRequest.tokenString = this.route.snapshot.queryParams.tokenString;
    this.dataService.currentMessage.subscribe(emojiSequence => {

      this.emojiSequence = emojiSequence;
      startFaceCapture("sec-log-vid","sec-log-can", "");

    });

    console.log(this.emojiSequence);

  }

  startBar() {

    let parent = this;
    let imageDataUrls = []
    startEmotionSequenceCapture("sec-log-pro-bar", imageDataUrls);
    setTimeout(
      function() {

        parent.start = false;
        parent.captured = true;

        parent.secondLoginRequest.imageDataUrls = imageDataUrls;

      }, 11000);

  }

  onSubmit() {

    this.userService.secondLogin(this.secondLoginRequest).subscribe(data => {

      this.secondLoginResponse = new SecondLoginResponse().createWithData(data);
      if(this.secondLoginResponse.status === "secondLogined"){

        this.responsed = true;
        alert("Login Success");

      }else {

        this.responsed = true;
        alert("Login Fail" + "\n" + "Reason : " + "Unable to verify your emotion");

      }

    }, error => {

      console.log("Ops Unknown Error");

    })

  }

}
