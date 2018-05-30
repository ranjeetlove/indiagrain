import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { isTrueProperty } from 'ionic-angular/util/util';
import { userModel } from './user.model';

let apiUrl ="http://34.207.7.22/indiagrain/index.php/api_panel/users/"
 
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
  jsonvalue: any;
  signupvalue: any;
  loginuserdata: any;
  usermodel: userModel; 
  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
 postData(credentials, user_sign_up){
   return new Promise((resolve, reject)=>{
     let headers = new HttpHeaders();
     this.http.post(apiUrl+user_sign_up, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
        resolve(JSON.stringify(res));
        this.signupvalue = JSON.stringify(res['status']);
        if (this.signupvalue == "true"){
          return("signup succesfully");
        }
       else{
        return("user already exist");
       }
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
        resolve(JSON.stringify(res));
        this.loginuserdata = JSON.stringify(res['Result']);
        this.usermodel = res['Result'];
        this.jsonvalue = JSON.stringify(res['isSuccess']);
        if (this.jsonvalue == "true"){
          return("login succesfully"); 
        }
       else{
          return('user dose not exist');
       }
      
    }, (err) =>{
       reject(err);
    });
  })
}


}
