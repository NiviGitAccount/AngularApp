import { Injectable } from '@angular/core';
@Injectable()
export class userService{
  private value;

  constructor(){

  }

  public setValue(value){
    this.value = value;
  }

  public getValue(){
    return this.value;
  }
}