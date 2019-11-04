import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AWSFaceDetectTestComponent } from './awsface-detect-test/awsface-detect-test.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FirstLoginPageComponent } from './first-login-page/first-login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AWSFaceDetectTestComponent,
    FirstLoginPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
