export class SecondLoginResponse {

  status : string;
  errors : Array<string>;

  createWithData(obj : Object){

    Object.assign(this, obj);
    return this;

  }

  create(){

    this.status = "";
    return this;

  }

}
