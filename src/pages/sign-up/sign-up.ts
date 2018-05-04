import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { TodayFollowUpPage } from '../today-follow-up/today-follow-up';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
   
   signupform:FormGroup;
   fullname:AbstractControl;
   password:AbstractControl;
   countrycode:AbstractControl;
   mobile:AbstractControl;
   address:AbstractControl;
   submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {

    this.signupform = formBuilder.group({
      fullname:['',Validators.required],
      password:['',Validators.required],
      countrycode:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required]
     });
      this.fullname = this.signupform.controls['fullname'];
      this.password = this.signupform.controls['password'];
      this.countrycode = this.signupform.controls['countrycode'];
      this.mobile = this.signupform.controls['mobile'];
      this.address = this.signupform.controls['address'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
   homePage(){
    this.submitted = true;
    if (this.signupform.valid) {
      console.log(this.signupform.value);
      this.navCtrl.push(TodayFollowUpPage);
    }
   }
    loginPage(){
      this.navCtrl.push(LoginPage);
   }

}
