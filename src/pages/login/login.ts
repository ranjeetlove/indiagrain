import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { TodayFollowUpPage } from '../today-follow-up/today-follow-up';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

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
   email:AbstractControl;
   password:AbstractControl;
   submitted: boolean = false;
 
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
        
       this.mygroup = formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required]
       });
        this.email = this.mygroup.controls['email'];
        this.password = this.mygroup.controls['password'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  homePage(){
    this.submitted = true;
    if (this.mygroup.valid) {
      console.log(this.mygroup.value);
      this.navCtrl.setRoot(TodayFollowUpPage)
    }
}
  signUp(){
      this.navCtrl.push(SignUpPage);
   } 
   forgotPass(){
      this.navCtrl.push(ForgotPasswordPage);
   } 
 
}
