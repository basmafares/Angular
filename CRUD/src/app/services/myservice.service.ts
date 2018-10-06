import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 user:string='yoyo';
 pass:string='123';
  constructor() {}
  setUser(data){
    this.user=data
  }
  getUser(){
   return this.user;
  }
  setPass(data){
    this.pass=data;
  }
  getPass(){
    return this.pass;

  }
}
