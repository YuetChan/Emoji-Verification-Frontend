export class AWSFaceDetectTestRequest {

  imageDataUrls : Array<string>;

  create() {

    this.imageDataUrls = [];
    return this;

  }

}
