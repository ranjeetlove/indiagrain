import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

let apiUrl ="http://localhost/indiagrain/index.php/api_panel/users/"

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
 postData(credentials, user_sign_up){

   return new Promise((resolve, reject)=>{
     let headers = new HttpHeaders();
     this.http.post(apiUrl+user_sign_up, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
       //resolve(res.json());
     }, (err) =>{
        reject(err);
     });
   })
 }
 // login function-------
 loginData(credentials, user_login){

  return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders();
    this.http.post(apiUrl+user_login, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
      //resolve(res.json());
    }, (err) =>{
       reject(err);
    });
  })
}
}
