import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FirstLoginPageComponent } from './first-login-page/first-login-page.component';
import { AWSFaceDetectTestComponent } from "./awsface-detect-test/awsface-detect-test.component";

const routes: Routes = [

  {path : "user/register", component : RegisterPageComponent},
  {path : "test", component : AWSFaceDetectTestComponent},
  {path : "user/login", component : LoginPageComponent},
  {path : "user/emojiVerify", component : FirstLoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
