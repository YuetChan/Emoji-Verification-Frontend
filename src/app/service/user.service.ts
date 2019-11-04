import { Injectable } from '@angular/core';
import { Observable } from "rxjs/observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from  "@angular/common/http";

import { AWSFaceDetectTestRequest } from "../shared/models/awsface-detect-test-request.model";
import { FirstLoginRequest } from "../shared/models/first-login-request.model";
import { FirstLoginResponse } from "../shared/models/first-login-response.model";
import { SecondLoginRequest } from "../shared/models/second-login-request.model";
import { SecondLoginResponse } from "../shared/models/second-login-response.model";
import { RegisterRequest } from "../shared/models/register-request.model";
import { RegisterResponse } from "../shared/models/register-response.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl :string = "http://localhost:5000/user/";

  constructor(private http : HttpClient) {
  }

  register(registerRequest : RegisterRequest) {

    let registerUrl = this.userUrl + "register/";
    return this.http.post<RegisterResponse>(registerUrl, registerRequest);

  }

  firstLogin(firstLoginRequest : FirstLoginRequest) {

    let firstLoginUrl = this.userUrl + "firstLogin/";
    return this.http.post<FirstLoginResponse>(firstLoginUrl, firstLoginRequest);

  }

  secondLogin(secondLoginRequest : SecondLoginRequest) {

    let secondLoginUrl = this.userUrl + "secondLogin/";
    return this.http.post<SecondLoginResponse>(secondLoginUrl, secondLoginRequest);

  }

  awsFaceDewtectTest(awsFaceDewtectTestRequest : AWSFaceDetectTestRequest) {

    let awsTestUrl = this.userUrl + "AWSFaceDetectTest/";
    return this.http.post(awsTestUrl, awsFaceDewtectTestRequest);

  }



}
