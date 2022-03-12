
export class ExceptionsHandler{
  private message: string;
  constructor(message: string){
    this.message = message;
  }

  public warn(){
    console.warn(this.message);
  }
}

