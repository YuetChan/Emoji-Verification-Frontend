export class RegisterRequest {

  useremail : string;
  password : string;
  imageDataUrl : string;

  create(){

    this.useremail = "";
    this.password = "";
    this.imageDataUrl = "";
    return this;

  }

}
