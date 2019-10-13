import { Injectable } from '@angular/core';
declare let alertify:any;


@Injectable( /* {
  providedIn: 'root'  //bu ifade global servis olacağını söylüyor.
} */ )
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message);
  }
  error(message:string){
    alertify.error(message);
  }
 
}
  