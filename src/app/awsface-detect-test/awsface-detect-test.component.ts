import { Component, OnInit } from '@angular/core';

import { UserService } from "../service/user.service";

import { AWSFaceDetectTestRequest } from "../shared/models/awsface-detect-test-request.model";

declare var startFaceCapture : any;
declare var startEmotionSequenceCapture: any;

@Component({
  selector: 'app-awsface-detect-test',
  templateUrl: './awsface-detect-test.component.html',
  styleUrls: ['./awsface-detect-test.component.css']
})
export class AWSFaceDetectTestComponent implements OnInit {

  awsFaceDetectTestRequest : AWSFaceDetectTestRequest;

  start = true;
  captured = false;

  constructor(private userService : UserService) {
  }

  ngOnInit() {

    startFaceCapture("log-vid","log-can", "");
    this.awsFaceDetectTestRequest = new AWSFaceDetectTestRequest().create();
    console.log(this.awsFaceDetectTestRequest.imageDataUrls.length);

  }

  startBar() {

    let parent = this;
    let imageDataUrls = [];
    startEmotionSequenceCapture("log-pro-bar", imageDataUrls);
    setTimeout(
      function() {

        parent.start = false;
        parent.captured = true;

        parent.awsFaceDetectTestRequest.imageDataUrls = imageDataUrls;
        console.log(parent.awsFaceDetectTestRequest.imageDataUrls.length);

      }, 11000);

  }

  onSubmit() {

    this.userService.awsFaceDewtectTest(this.awsFaceDetectTestRequest).subscribe(data => {

      console.log("Uploaded");

    }, error => {

      console.log("Fail");

    })

  }

}
