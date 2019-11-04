export class FirstLoginRequest {

  useremail : string;
  password : string;

  create(){

    this.useremail = "";
    this.password = "";
    return this;

  }

}
