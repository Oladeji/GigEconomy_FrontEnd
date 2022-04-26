import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggeduserinfoService {
private Userinfo :any


  AddUserInfo(response: any) {
   this.Userinfo= response;
  }

  RetrieveUserInfo() {
    return this.Userinfo;
   }
 
  constructor() { }
}
