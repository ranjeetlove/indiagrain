import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { TodayFollowUpPage } from '../today-follow-up/today-follow-up';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   mygroup:FormGroup;
   userid:AbstractControl;
   password:AbstractControl;
   submitted: boolean = false;

   responseData : any;
   logData = {"userid":"", "pwd":""}
 
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
        
       this.mygroup = formBuilder.group({
        userid:['',Validators.required],
        password:['',Validators.required]
       });
        this.userid = this.mygroup.controls['userid'];
        this.password = this.mygroup.controls['password'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  homePage(){
    this.submitted = true;
    if (this.mygroup.valid) {
      console.log(this.mygroup.value);
      //this.navCtrl.setRoot(TodayFollowUpPage)
        this.authServiceProvider.loginData(this.logData, "user_login").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        localStorage.setItem('logData', JSON.stringify(this.responseData) )
        //this.navCtrl.setRoot(TodayFollowUpPage);
      }, (err) =>{
         this.navCtrl.setRoot(TodayFollowUpPage);
      }); 
    }
}
  signUp(){
      this.navCtrl.push(SignUpPage);
   } 
   forgotPass(){
      this.navCtrl.push(ForgotPasswordPage);
   } 
 
}
