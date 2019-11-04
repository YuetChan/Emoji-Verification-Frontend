export class FirstLoginResponse {

  status : string;

  errors : Array<string>;
  userId : number;
  tokenString : string;
  emojiSequence: Array<string>;

  createWithData(obj : Object){

    Object.assign(this, obj);
    return this;

  }

  create(){

    this.status = "invalid";
    this.userId = 0;
    this.tokenString = "";
    return this;

  }

}
