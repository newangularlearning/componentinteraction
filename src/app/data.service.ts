import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export class DataService {
  private messageSub:BehaviorSubject<string>= new BehaviorSubject("Hello");
  currentMsg = this.messageSub.asObservable();
  constructor() { }

  changeMessage(message:string){
    this.messageSub.next(message);
  }

  get message(){
    return this.currentMsg;
  }

  
}
