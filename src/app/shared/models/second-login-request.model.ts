export class SecondLoginRequest {

  tokenString : string;
  userId : number;
  imageDataUrls : Array<string>;

  create(){

    this.userId = 0;
    this.tokenString = "";
    return this;

  }

}
